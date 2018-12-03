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

var map;
var mapDiv = document.querySelector("#map");

function initMap() {
  map = new google.maps.Map(mapDiv, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
  









location.addEventListener("click", showMap);
