// cypress/support/commands.js
const { count } = require('../utils/getProducts/getParams')

Cypress.Commands.add(
  'getProductsAndSetEnv',
  (query, cep, envKey = 'produto') => {
    return cy
      .request({
        url: '/api/catalog_system/pub/products/search',
        qs: { ft: query, _from: 0, _to: count - 1 },
        failOnStatusCode: false,
      })
      .then((r) => {
        const products = (Array.isArray(r.body) ? r.body : [])
          .map((p) => {
            const item = p.items?.[0]
            return {
              name: p.productName,
              sku: item?.itemId,
              link: p.link || (p.linkText && `/${p.linkText}/p`),
            }
          })
          .filter((p) => p.link && p.sku)

        return cy.request('POST', '/api/checkout/pub/orderForm').then((of) => {
          const orderFormId = of.body.orderFormId

          return cy
            .request(
              'POST',
              `/api/checkout/pub/orderForm/${orderFormId}/attachments/shippingData`,
              {
                address: {
                  postalCode: cep,
                  country: 'BRA',
                },
              },
            )
            .then(() => {
              const available = []

              return Cypress.Promise.each(products, (p) => {
                return cy
                  .request({
                    method: 'POST',
                    url: `/api/checkout/pub/orderForm/${orderFormId}/items`,
                    body: {
                      orderItems: [
                        {
                          id: p.sku,
                          quantity: 1,
                          seller: '1',
                        },
                      ],
                    },
                    failOnStatusCode: false,
                  })
                  .then((res) => {
                    const hasStock =
                      res.body?.items?.length > 0 &&
                      res.body?.items?.[0]?.availability !== 'cannotBeDelivered'

                    if (hasStock) {
                      available.push({ ...p, cep })
                    }

                    return cy.request(
                      'POST',
                      `/api/checkout/pub/orderForm/${orderFormId}`,
                      { items: [] },
                    )
                  })
              }).then(() => {
                Cypress.env(envKey, available)
                return available
              })
            })
        })
      })
  },
)

// cypress/support/commands.js
Cypress.Commands.add('clearCart', () => {
  cy.request('GET', '/api/checkout/pub/orderForm').then((res) => {
    const orderFormId = res.body.orderFormId

    cy.request({
      method: 'POST',
      url: `/api/checkout/pub/orderForm/${orderFormId}/items/removeAll`,
      failOnStatusCode: false,
    })
  })
})
