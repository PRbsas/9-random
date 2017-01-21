var url = "https://unsplash.it/300/?image=";

// Get random number to start
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomImage = getRandomIntInclusive(1, 1000);

// Add 1 to randomImage to generate 9 consecutive numbers
// Get 9 img tags to add images to
for(var i = 0; i < 9; i ++) {
  randomImage = randomImage + 1;
  var imageUrl = url + randomImage;
  console.log(imageUrl);
  document.getElementsByTagName('img')[i].src = imageUrl;
}

document.querySelector("button").addEventListener("click", function(){
  window.location.reload(true);
});
