const domcontrol = (() => {
  // DOM identifiers
  const searchTerm = document.querySelector('.search');
  const submitBtn = document.querySelector('.submit');

  return { searchTerm, submitBtn };
})();

export default domcontrol;
