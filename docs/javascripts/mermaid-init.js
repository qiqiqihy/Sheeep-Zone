import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.12.1/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  flowchart: {
    padding: 10,
    nodeSpacing: 30,
    rankSpacing: 30,
  },
  themeVariables: {
    edgeLabelBackground: "transparent",
  },
});

document.querySelectorAll("pre.mermaid").forEach((pre) => {
  const container = document.createElement("div");
  container.className = "mermaid";
  container.textContent = pre.textContent;
  pre.replaceWith(container);
});

mermaid.run({
  querySelector: ".mermaid",
});
