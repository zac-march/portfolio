function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const isVisible =
    rect.top >= 0 &&
    rect.bottom <=
      window.innerHeight - (window.innerHeight - window.innerHeight / 2);
  return isVisible;
}

export default isScrolledIntoView;
