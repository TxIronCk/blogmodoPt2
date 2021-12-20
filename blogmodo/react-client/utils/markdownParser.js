const markdownParser = function (text) {
  if (contains(text, "**")) {
    <i>{text}</i>;
  }
  if (contains(text, "_")) {
    <b>{text}</b>;
  }
  if (contains(text, "******")) {
    <h6>{text}</h6>;
  }
  if (contains(text, "*****")) {
    <h5>{text}</h5>;
  }
  if (contains(text, "****")) {
    <h4>{text}</h4>;
  }
  if (contains(text, "***")) {
    <h3>{text}</h3>;
  }
  if (contains(text, "**")) {
    <h2>{text}</h2>;
  }
  if (contains(text, "*")) {
    <h1>{text}</h1>;
  }
  return text;
};

export default markdownParser;
