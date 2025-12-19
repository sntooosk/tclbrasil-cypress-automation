// cypress/support/commands.js
const {
  count,
  country,
  sallesChannel,
} = require('../utils/getProducts/getParams')

// =======================
// API – SEARCH PRODUCTS (PUBLIC / SAME DOMAIN)
// =======================
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
            ?.map((p) => {
              const item = p.items?.[0]
              const seller = item?.sellers?.[0]

              return {
                name: p.productName,
                productId: p.productId,
                sku: item?.itemId,
                link: p.link,
                quantity: seller?.commertialOffer?.AvailableQuantity ?? 0,
                availability: seller?.commertialOffer?.IsAvailable ?? false,
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
              const item = body?.items?.[0]

              if (item?.availability === 'available' && item?.quantity > 0) {
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

// =======================
// CART – CLEAR (PUBLIC API)
// =======================
Cypress.Commands.add('clearCart', () => {
  cy.request('/api/checkout/pub/orderForm').then(({ body }) => {
    const orderFormId = body?.orderFormId
    const hasItems = body?.items?.length > 0

    if (!orderFormId || !hasItems) return

    cy.request({
      method: 'POST',
      url: `/api/checkout/pub/orderForm/${orderFormId}/items/removeAll`,
      failOnStatusCode: false,
    })
  })
})
