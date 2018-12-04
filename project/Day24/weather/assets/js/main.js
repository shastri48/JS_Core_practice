import '../stylesheet/style.scss';
import {create} from './create.js';
import {createImage} from './create.js';



var displayReport = document.querySelector(".display__weather");
var searchPlace = document.querySelector("#searchPlace");
var displayCity = document.querySelector("#search__city");
var tempType = document.querySelector("#tempType");


var storeLatitude;
var storeLongitude;
var storeReport;
var storeSearch;
var storeFiveDay;

function getWeather(){
  var data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${storeLatitude}&lon=${storeLongitude}&appid=555d08b7ce7f613747408910cfce3af1`).then(d=>d.json()).then(d=>{storeReport = d; showReport()});
}
function showReport(){
  displayReport.textContent = "";
  console.log(tempType.textContent);
  var tempC;
  if(tempType.textContent == "Celcius"){
    tempC = storeReport.main.temp-273.15
  } else {
    tempC = storeReport.main.temp;
  }

  let placeName = `Your Place : ${storeReport.name}  , ${storeReport.sys.country}`;
  create("h4", placeName,"place", displayReport);

  let temp = `Temperature : ${(tempC).toFixed(2)} (${storeReport.weather[0].description})`;
  create("div", temp, "temperature", displayReport);

  let latitude = `Latitude : ${storeReport.coord.lat}`;
  create("span", latitude, "latitude", displayReport);

  let longitude = `Longitude : ${storeReport.coord.lon}`;
  create("span", longitude, "longitude", displayReport);


  let minTemp = `Min Temp : ${(tempC).toFixed(2)}`;
  create("span", minTemp, "minTemp", displayReport);
  
  let maxTemp = `Max Temp : ${(tempC).toFixed(2)}`;
  create("span", maxTemp, "maxTemp", displayReport);

  let pressure = `Pressure : ${(storeReport.main.pressure).toFixed(2)}`;
  create("span", pressure, "pressure", displayReport);

  let humidity = `Humidity : ${(storeReport.main.humidity).toFixed(2)}`;
  create("span", humidity, "humidity", displayReport);

  console.log(storeReport);
  
}


function searchDetails(e){
  if(e.keyCode == 13){
    var data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchPlace.value}&appid=555d08b7ce7f613747408910cfce3af1`).then(d=>d.json()).then(d=>{storeSearch = d;showSearch(storeSearch)});
  }
}
function showSearch(storeSearch){
  let temp = `Today's temperature : ${(storeSearch.main.temp-273.15).toFixed(2)}`;

  if(displayCity.childElementCount == 0){
    create("h4", temp, "temperature", displayCity);
  } else {
    displayCity.innerHTML = "";
    create("h4", temp, "temperature", displayCity);
  }

  var data = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchPlace.value}&APPID=555d08b7ce7f613747408910cfce3af1`).then(d=>d.json()).then(d=> {storeFiveDay = d; showFiveDay(storeFiveDay)});
}

function showFiveDay(storeFiveDay){
  console.log(storeFiveDay.list[0].dt_txt.split(" ")[0]);
  create("h4", "Next Four Days Average Temperature", `avgTitle`, displayCity);
  var avgTemp = document.createElement("div");
  avgTemp.setAttribute("id", "avgTemp");
  for(let i = 0, j = 1; i < storeFiveDay.list.length; i+=8, j++){
    var temp = `${storeFiveDay.list[i].dt_txt.split(" ")[0]} ( ${(storeFiveDay.list[i].main.temp-273.15).toFixed(2)})`;
      if(i!=0){
      // var img = document.createElement("img");
      let src = `https://openweathermap.org/img/w/${storeFiveDay.list[i].weather[0].icon}.png`;
      createImage("img", src, avgTemp);
      create("h4", temp, `temp${i};`, avgTemp);
    }
  }
  displayCity.appendChild(avgTemp);
}




window.onload = function(){
navigator.geolocation.getCurrentPosition(d => {storeLatitude = d.coords.latitude; storeLongitude = d.coords.longitude; getWeather();});
}

tempType.addEventListener("click", ()=>{
  if(  tempType.textContent == "Celcius"){
    tempType.textContent = "Kelvin";
  } else {
    tempType.textContent = "Celcius";
  }
  navigator.geolocation.getCurrentPosition(d => {storeLatitude = d.coords.latitude; storeLongitude = d.coords.longitude; getWeather();});
})
searchPlace.addEventListener("keydown", searchDetails)