

function addText(){
    var text = $("#myInput").val();
    console.log(text)
    var a = document.createElement('li');
    a.innerHTML = text;
    document.getElementById("uList").appendChild(a);
    console.log("text was added")
}
let $list = $('ul')

function check() {
    $list.on('click', 'li', function() {
let $this = $(this);
$this.remove();
    });
}



var count = 0;

function cookieClick() {
  count = count + 1;
  document.getElementById("numClicks").innerHTML = count;
}

function eatClick() {
  if(count >= 10){ 
    count = count - 10;
    document.getElementById("numClicks").innerHTML = count;
}
}

var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}