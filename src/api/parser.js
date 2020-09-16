
/**
 * 
 * @param {Object} productData - product data 
 * @param {Object?} desc - optional external API info with product description
 * 
 * @return simplify product data version 
 */
function productResult(productData, desc) {
  const picture = productData.pictures && productData.pictures.length 
    ? productData.pictures[0].url
    : (productData.thumbnail ? productData.thumbnail : "");
  
  return {
    author: desc ? { name: "", lastname: "" } : undefined,
    item: {
      id: productData.id,
      title: productData.title,
      price: {
        amount: productData.price,
        currency: productData.currency_id,
        decimals: 00,
      },
      picture,
      condition: productData.condition,
      free_shipping: productData.shipping.free_shipping,
      sold_quantity: desc ? productData.sold_quantity : undefined,
      description: desc ? desc.plain_text : undefined,
    }
  }
}

/**
 *
 * @param {Object} searchData - product data
 *
 * @return simplify search result data
 */
function searchResult(searchData) {
  const categories = [];
  const items = searchData.results.slice(0, 4).map((item) => {
    const category = item.category_id;

    if(!categories.includes(category)) {
      categories.push(category);
    }    

    return productResult(item);
  });

  return {
    author: { name: "", lastname: ""},
    categories,
    items,
  };
}

module.exports = {
  searchResult,
  productResult,
};
