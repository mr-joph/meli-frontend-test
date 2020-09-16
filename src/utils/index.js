
exports.getOriginURL = function() {
  const { SERVER_HOST, SERVER_PORT, SERVER_PROTOCOL } = process.env;

  return `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;
}

exports.formatDecimal = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
