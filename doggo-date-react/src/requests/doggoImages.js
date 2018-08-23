import archmageAlfie from "../images/doggos/archmage_alfie.jpg";
import bumbleBertha from "../images/doggos/bumble_bertha.jpg";
import drillBitDarel from "../images/doggos/drill_bit_darel.jpg";
import fourFistsPhil from "../images/doggos/four_fists_phil.jpg";
import inbreadDog from "../images/doggos/inbread_dog.jpg";
import knightNicholas from "../images/doggos/knight_nicholas.jpg";
import larryTheLion from "../images/doggos/larry_the_lion.jpg";
import lumberjackLaurence from "../images/doggos/lumberjack_laurence.jpg";
import moneybagsMichael from "../images/doggos/moneybags_michael.jpg";
import ninaTheNinja from "../images/doggos/nina_the_ninja.jpg";
import paws from "../images/doggos/paws.jpg";
import rebelWithACauseCallum from "../images/doggos/rebel_with_a_cause_callum.jpg";
import toxicTim from "../images/doggos/toxic_tim.jpg";
import wickedWitchWendy from "../images/doggos/wicked_witch_wendy.jpg";

const doggoImages = [
  archmageAlfie,
  bumbleBertha,
  drillBitDarel,
  fourFistsPhil,
  inbreadDog,
  knightNicholas,
  larryTheLion,
  lumberjackLaurence,
  moneybagsMichael,
  ninaTheNinja,
  paws,
  rebelWithACauseCallum,
  toxicTim,
  wickedWitchWendy
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(doggoImages);

export default doggoImages;
