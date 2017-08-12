// document.getElementById("map").innerText = "Hello from JS";

const buildMarket = require("./marker.js");

const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoiamVldHNycyIsImEiOiJjajY4M3FpM2swYnhrMzRyMGt1dGRmM2g4In0.uVm4cxhoLxloxzDxSTPeNg';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);