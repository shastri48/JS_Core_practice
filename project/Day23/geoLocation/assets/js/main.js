import '../stylesheet/color.scss';
import '../stylesheet/css-reset.scss';
import '../stylesheet/style.scss';

var location = document.querySelector("#location");
var latitude = document.querySelector(".latitude");
var longitude = document.querySelector(".longitude");


var storeLatitude;
var storeLongitude;

function showData(){
  latitude.textContent = `Latitude: ${storeLatitude}`;
  longitude.textContent = `Longitude: ${storeLongitude}`;
}


function showMap(){
  navigator.geolocation.getCurrentPosition(d => {storeLatitude = d.coords.latitude; storeLongitude = d.coords.longitude; showData();});
}

location.addEventListener("click", showMap);