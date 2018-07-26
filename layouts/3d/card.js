document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const check = document.getElementById("box");

  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  check.addEventListener("input", function() {
    card.classList.toggle("is-spinning");
  });
});

// var spinCubeCheckbox = document.querySelector('.spin-cube-checkbox');
// spinCubeCheckbox.onchange = function() {
//   cube.classList.toggle( 'is-spinning', spinCubeCheckbox.checked );
// };
// spinCubeCheckbox.onchange();
