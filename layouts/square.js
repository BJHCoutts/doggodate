// document.querySelectorAll("h1").addEventListener("click", () => {
//   console.log("rawr");
// });

document.addEventListener("click", () => {
  // console.log("Something was clicked!");
  document.querySelectorAll(".card").forEach(node => {
    node.classList.toggle("flipped");
    // node.style.transform = "rotateY(180deg)"
    //   ? (node.style.transform = "rotateY(180deg)")
    //   : (node.style.transform = "rotateY(0deg)");
  });
});

// document.querySelectorAll("h1").addEventListener("click", () => {
//   console.log("rawr");
// });
// () => {
//   const { log } = console;
//   log("Flip a dip dip!");
//   console.log("eep");
//   document.querySelectorAll(".card").style.transform = "rotateY(180deg)";
// });

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

// for (i of images) {
//   document.querySelector("#here").appendChild(innerHTML`<div class="card">
//       <div
//         class="front img"
//         style="background-image:url('./assets/images/${i}.jpg');"
//       />
//       <div class="back">
//         <p>This is the back</p>
//       </div>
//     </div>`);
// }
