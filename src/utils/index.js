
/**
 * @description gets the base url where the application is running
 * Useful for making requests server side to its own endpoints
 * 
 * @return Origin URL 
 */
exports.getOriginURL = function() {
  const { SERVER_HOST, SERVER_PORT, SERVER_PROTOCOL } = process.env;

  return `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;
}

/**
 * @description adds in a raw number the "." in its decimal places
 * i.e. 1934 => 1.934
 * @param {Number} number 
 * 
 * @return - string with the point the decimal place
 */
exports.formatDecimal = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
