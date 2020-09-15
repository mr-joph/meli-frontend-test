function productResult(productData, desc) {
  const picture = productData.pictures && productData.pictures.length 
    ? productData.pictures[0].url
    : "";
  
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
