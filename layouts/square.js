document.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(node => {
    node.classList.toggle("flipped");
  });
});

const images = [
  "archmage_alfie.jpg",
  "bumble_bertha.jpg",
  "drill_bit_darel.jpg",
  "four_fists_phil.jpg",
  "inbread_dog.jpg",
  "knight_nicholas.jpg",
  "larry_the_lion.jpg",
  "lumberjack_laurence.jpg",
  "moneybags_michael.jpg",
  "nina_the_ninja.jpg",
  "paws.jpg",
  "rebel_with_a_cause_callum.jpg",
  "toxic_tim.jpg",
  "wicked_witch_wendy"
];

for (i of images) {
  document.querySelector("#here").appendChild(innerHTML`<div class="card">
      <div
        class="front img"
        style="background-image:url('./assets/images/${i}.jpg');"
      />
      <div class="back">
        <p>This is the back</p>
      </div>
    </div>`);
}
