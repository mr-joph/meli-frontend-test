
exports.getOriginURL = function() {
  const { SERVER_HOST, SERVER_PORT, SERVER_PROTOCOL } = process.env;

  return `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;
}
