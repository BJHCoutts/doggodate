function getRandomSize(min,max) {
  return Math.round(Math.Random() * (max - min) + min)
}

let = allImages "";

for (let i =0; i < 14; i++){
  let width = getRandomSize(200, 400);
  let height = getRandomSize(200, 400);
  allImages += '<img src="./images/'+width+'/'+height+'" alt="good doggo">';
}

$('#photos').append(allImages);