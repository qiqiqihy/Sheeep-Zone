function updateFigureReferences() {
  const figures = Array.from(document.querySelectorAll('.md-typeset figure[id]'));
  const figureNumberById = new Map();

  let number = 0;
  for (const figure of figures) {
    number += 1;
    figureNumberById.set(figure.id, number);
  }

  const links = document.querySelectorAll('.md-typeset a.fig-ref[href^="#"]');
  for (const link of links) {
    const targetId = decodeURIComponent(link.getAttribute('href').slice(1));
    const figureNumber = figureNumberById.get(targetId);
    if (!figureNumber) continue;

    link.textContent = `图${figureNumber}`;
  }
}

if (typeof document$ !== 'undefined' && document$.subscribe) {
  document$.subscribe(updateFigureReferences);
} else {
  document.addEventListener('DOMContentLoaded', updateFigureReferences);
}
