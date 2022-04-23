function MLParser(html) {
  let appliedColor = "000000";

  function parseNode(inheritedStyles, inheritedColor, node) {
    // Base case: a plain text node:
    if (node.nodeType === 3) {
      if (inheritedColor !== appliedColor && node.nodeValue.trim()) {
        appliedColor = inheritedColor;
        return `[${appliedColor}]${node.nodeValue}`;
      }
      return node.nodeValue;
    }
    // Transfer color HTML attribute to style attribute:
    if (node.nodeName === "FONT" && node.color) node.style.color = node.color;

    // Get relevant styles of this node
    let { color, textDecorationLine, fontWeight, fontStyle } = node.style;
    color = color || inheritedColor;

    // Determine U,S,B,I:
    let styles = {
      u:
        inheritedStyles.u ||
        node.nodeName === "U" ||
        textDecorationLine.includes("underline"),
      s:
        inheritedStyles.s ||
        node.nodeName === "STRIKE" ||
        node.nodeName === "S" ||
        textDecorationLine.includes("through"),
      b:
        inheritedStyles.b ||
        node.nodeName === "B" ||
        node.nodeName === "STRONG" ||
        fontWeight.includes("bold") ||
        +fontWeight >= 700,
      i:
        inheritedStyles.i ||
        node.nodeName === "I" ||
        node.nodeName === "EM" ||
        fontStyle.includes("italic"),
    };

    // Deal with color
    if (color.slice(0, 4) === "rgb(") {
      color = color
        .match(/\d+/g)
        .map((dec) => (+dec).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
    }

    // Apply recursion to parse the child nodes
    let res = Array.from(
      node.childNodes,
      parseNode.bind(null, styles, color)
    ).join("");

    // Wrap the content inside the necessary [] tags
    for (let prop in styles) {
      if (styles[prop] !== !!inheritedStyles[prop])
        res = `[${prop}]${res}[\/${prop}]`;
    }
    return res;
  }

  return parseNode(
    {},
    "000000",
    new DOMParser().parseFromString(html, "text/html").body
  );
}

export default MLParser;
