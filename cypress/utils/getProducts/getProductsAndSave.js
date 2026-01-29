const { count, category1 } = require('./getParams.js')
const { writeFile } = require('fs').promises

async function getProductsAndSave() {
  const query = category1
  const url = `/api/io/_v/api/intelligent-search/product_search/%2F?query=${encodeURIComponent(
    query,
  )}&count=${count}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { accept: 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`Erro na requisição. Status: ${response.status}`)
    }

    const body = await response.json()

    const ordinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth']

    const product_list_entries =
      body?.products
        ?.slice(0, ordinalNumbers.length)
        ?.map((product, index) => {
          const item = product.items?.[0]
          const offer = item?.sellers?.[0]?.commertialOffer

          const stock = offer?.AvailableQuantity ?? 0
          if (!item?.itemId || !product?.link || stock <= 0) return null

          return [
            ordinalNumbers[index],
            {
              name: product.productName,
              url: product.link,
              productId: product.productId,
              sku: item.itemId,
              itemId: item.itemId,
              quantity: stock,
              availability: offer?.IsAvailable ?? false,
            },
          ]
        })
        .filter(Boolean) || []

    if (!product_list_entries.length) {
      throw new Error('Nenhum produto com estoque encontrado.')
    }

    const productData = {
      product_list: Object.fromEntries(product_list_entries),
    }

    await writeFile(
      'cypress/fixtures/productsDynamic.json',
      JSON.stringify(productData, null, 2),
      'utf-8',
    )

    // eslint-disable-next-line no-console
    console.log('✅ Arquivo productsDynamic.json salvo com sucesso!')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Erro:', error.message)
    process.exit(1)
  }
}

getProductsAndSave()
