const { count, country, sallesChannel } = require('./getParams.js')

export function getProducts(query) {
  const url = `/api/io/_v/api/intelligent-search/product_search/?query=${encodeURIComponent(
    query,
  )}&count=${count}`

  return cy
    .request({
      method: 'GET',
      url,
      headers: { accept: 'application/json' },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Erro ao buscar produtos. Status: ${response.status}`)
      }

      const ordinalNumbers = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
      ]

      const productData =
        response.body?.products
          ?.slice(0, ordinalNumbers.length)
          ?.map((product, index) => {
            const item = product.items?.[0]
            const offer = item?.sellers?.[0]?.commertialOffer

            if (!item?.itemId || !product?.link) return null

            return {
              order: ordinalNumbers[index],
              name: product.productName,
              productId: product.productId,
              sku: item.itemId,
              link: product.link,
              quantity: offer?.AvailableQuantity ?? 0,
              availability: offer?.IsAvailable ?? false,
              itemId: item.itemId,
            }
          })
          .filter(Boolean) || []

      return productData
    })
}

export function simulateOrderForm(itemId, cep, countryArg = country) {
  const url = `/api/checkout/pub/orderForms/simulation?sc=${sallesChannel}`

  const payload = {
    items: [{ id: itemId, quantity: 1, seller: '1' }],
    country: countryArg,
    postalCode: cep,
  }

  return cy
    .request({
      method: 'POST',
      url,
      body: payload,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then((response) => {
      const quantidade = response.body?.items?.[0]?.quantity ?? 0
      const disponibilidade = response.body?.items?.[0]?.availability

      return quantidade > 0 && disponibilidade === 'available'
        ? cy.wrap(quantidade)
        : cy.wrap(0)
    })
}

export function getAvailabeProducts(query, cep) {
  return getProducts(query).then((produtos) => {
    if (!produtos || !produtos.length) return {}

    const available = {}

    const promessas = produtos.map((produto) =>
      simulateOrderForm(produto.itemId, cep, country).then((quantidade) => {
        if (quantidade > 0) {
          available[produto.order] = {
            order: produto.order,
            name: produto.name,
            url: produto.link,
            sku: produto.sku,
            quantity: produto.quantity,
            itemId: produto.itemId,
          }
        }
      }),
    )

    // eslint-disable-next-line no-undef
    return Promise.all(promessas).then(() => available)
  })
}
