// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const {
  count,
  country,
  sallesChannel,
} = require('../utils/getProducts/getParams')

Cypress.Commands.add(
  'getAvailableProducts',
  (query, cep, envKey = 'produto') => {
    return cy
      .request({
        method: 'GET',
        url: '/api/io/_v/api/intelligent-search/product_search',
        qs: { query, count },
        headers: { accept: 'application/json' },
      })
      .then(({ body }) => {
        const products =
          body?.products
            ?.map((product) => {
              const item = product.items?.[0]
              const seller = item?.sellers?.[0]
              const offer = seller?.commertialOffer

              return {
                name: product.productName,
                productId: product.productId,
                sku: item?.itemId,
                link: product.link,
                quantity: offer?.AvailableQuantity ?? 0,
                availability: offer?.IsAvailable ?? false,
              }
            })
            .filter((p) => p.sku && p.link) || []

        if (!products.length) return []

        const available = []

        return Cypress.Promise.each(products, (product) => {
          return cy
            .request({
              method: 'POST',
              url: `/api/checkout/pub/orderForms/simulation?sc=${sallesChannel}`,
              body: {
                items: [{ id: product.sku, quantity: 1, seller: '1' }],
                postalCode: cep,
                country,
              },
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            })
            .then(({ body }) => {
              const simulatedItem = body?.items?.[0]

              if (
                simulatedItem?.availability === 'available' &&
                simulatedItem?.quantity > 0
              ) {
                available.push({ ...product, cep })
              }
            })
        }).then(() => {
          Cypress.env(envKey, available)
          return available
        })
      })
  },
)

Cypress.Commands.add('clearCart', () => {
  cy.request('/api/checkout/pub/orderForm').then(({ body }) => {
    const orderFormId = body?.orderFormId
    const hasItems = (body?.items?.length ?? 0) > 0

    if (!orderFormId || !hasItems) return

    cy.request({
      method: 'POST',
      url: `/api/checkout/pub/orderForm/${orderFormId}/items/removeAll`,
      failOnStatusCode: false,
    })
  })
})
