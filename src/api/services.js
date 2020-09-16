const fetch = require("isomorphic-fetch");
const config = require("../config");
const parser = require("./parser");

const SERVICE_BASE_URL = config.server.EXTERNAL_API;

module.exports = {
  /**
   * @param {String} searchValue - query value
   * 
   * @return Promise
   */
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

  /**
  * @param {String} productId
  *
  * @return Promise
  */
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
