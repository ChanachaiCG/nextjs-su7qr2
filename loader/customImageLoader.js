exports.default = function (source) {
  return `export default ${JSON.stringify({ source })}`;
};
