const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = (type, coords) => {
    if (type === 'activity') {
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.activity;
    };
    if (type === 'restaurant') {
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.restaurant;
    };
    if (type === 'hotel') {
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconURLs.hotel;
    }

};

module.exports = buildMarker;