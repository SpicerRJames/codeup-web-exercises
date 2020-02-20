"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 5,
    center: [-98.4916, 29.4252]

});

var markerOptions = {
    color: "#ff0000",
};
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.4866849, 29.4352497])
//     .addTo(map)
//     .setHTML("<p>Hello</p>");
//
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.4866849, 29.4352497])
//     .addTo(map)
//     .setPopup(popup);

geocode('4903 Northwest Loop 410, San Antonio, TX 78229', mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.flyTo({center: result, zoom: 15});

});

var favFoods = [
    {
     location: [-98.4866849, 29.4352497],
     popHTML: "<p>GOOD CHINESE FOOD</p>"
    },
    {
     location: [-98.4866849, 27.4352497],
     popHTML: "<p>TAPPPPASSS!</p>"
    },
    {
     location: [-98.4866849, 28.4352497],
     popHTML: "<p>Best Bar in Twon!</p>"
    }
];

favFoods.forEach(function(favFood){

    var popup = new mapboxgl.Popup()
        .addTo(map)
        .setHTML(favFood.popHTML);

    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(favFood.location)
        .addTo(map)

    marker.setPopup(popup).togglePopup();
});

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.4866849, 29.4352497])
//     .addTo(map)
//     .setHTML("<p>Hello</p>")
//     popup.addTo(map);
//
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.4866849, 29.4352497])
//     .addTo(map)
//     .setPopup(popup);


// map.on('click', marker, function () {
//     map.popupHTML
// });


// var favFood = {
//     address: "Chopsticks Chinese Restaurant + 4903 Northwest Loop 410, San Antonio, TX 78229",
//     popupHTML: "<h1>GOOD CHINESE FOOD</h1>"
// };

// var favFood = {
//     address: "Chopsticks Chinese Restaurant + 4903 Northwest Loop 410, San Antonio, TX 78229",
//     popupHTML: "<p>GOOD CHINESE FOOD</p>"
// },
// {
//     address: "Toro Kitchecn + Bar, San Antonio, Tx, 78205",
//     popupHTML: "<p>TAPPPPASSS!</p>"
// },
// {
//     address: "Paramour + 1524, 102 9th St #400, San Antonio, TX 78215",
//     popupHTML: "<p>Best Bar in Twon!</p>"
// };