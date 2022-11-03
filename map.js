// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 15);

const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
timesSquare.bindPopup("<b>Times Square</b>");

const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to the Graduate Center</b>");

circle.bindPopup("I'm a circle!");

const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);

poemMap.panTo(timesSquare.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

//challenge
const metMuseum = L.marker([40.7794, -73.9632]).addTo(poemMap);

const mmlatLng = metMuseum.getLatLng();
console.log(mmlatLng.lat);
console.log(mmlatLng.lng);
poemMap.panTo(metMuseum.getLatLng());

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  L.marker([40.7794, -73.9632], {icon: redIcon}).addTo(poemMap);

// create a red polyline from an array of LatLng points
var mmlatlngs = [
    [40.778937, -73.962340],
    [40.781519, -73.960393],
    [40.779534, -73.955643]
];
var mmpolyline = L.polyline(mmlatlngs, {color: 'red'}).addTo(poemMap);
mmpolyline.bindPopup("Walk north to 86th Street.<br>Turn right.<br>Walk east to Lexington Ave.<br>Look for 4/5/6 Subway.");

