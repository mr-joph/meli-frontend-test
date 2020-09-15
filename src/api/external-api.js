const fetch = require("isomorphic-fetch");
const parser = require("./parser");

const SERVICE_BASE_URL = "https://api.mercadolibre.com";

module.exports = {
  async search(searchValue = "") {
    const url = `${SERVICE_BASE_URL}/sites/MLA/search?q=${searchValue}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
    
      return parser.searchResult(data);
    } catch(err) {
      console.error(err);
      
      return err;
    }
  },

  async getProductDetail(productId) {
    const itemUrl = `${SERVICE_BASE_URL}/items/${productId}`;
    const descURL = `${SERVICE_BASE_URL}/items/${productId}/description`;
    
    try {
      const responses = await Promise.all([fetch(itemUrl), fetch(descURL)]);
      const [details, desc] = await Promise.all(responses.map(res => res.json()));

      return parser.productResult(details, desc);
    } catch(err) {
      console.error(err);

      return err;
    }
    
  },
};
