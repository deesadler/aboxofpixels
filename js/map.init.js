"use strict";
var jq = jQuery.noConflict();
//define the basic color of your map, plus a value for saturation and brightness
var	main_color = '#378a9a',
    saturation_value= -10,
    brightness_value= 20;

//we define here the style of the map
var style= [
    {
        //set saturation for the labels on the map
        elementType: "labels",
        stylers: [
            {saturation: saturation_value}
        ]
    },
    {	//poi stands for point of interest - don't show these lables on the map
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show local road lables on the map
        featureType: "road.local",
        elementType: "labels.icon",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show arterial road lables on the map
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show road lables on the map
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {visibility: "off"}
        ]
    },
    //style different elements on the map
    {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.government",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.sport_complex",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.business",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "landscape",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]

    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    }
];
/*==Google MAP==*/
function initialize() {
    var image = 'images/map-marker.png';
    var dataLat = jq('#gmap').attr('data-map-lat')
    var dataLng = jq('#gmap').attr('data-map-Lng')
    var myLatlng = new google.maps.LatLng(dataLat, dataLng);
    var mapOptions = {
        zoom: 15,
        panControl: false,
        zoomControl: false,
        mapTypeControl: true,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);




    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
        title: 'Local Address'
    });



}

//google.maps.event.addDomListener(window, 'load', initialize);