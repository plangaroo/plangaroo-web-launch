// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-canada-calgary2');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 51.923267, lng: -115.263485},
      zoom: 6,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 51.125249, lng: -114.016900},
    map: map,
    title:"Calgary Airport (YYC)",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 51.479403, lng: -112.790147},
    map: map,
    title:"Royal Tyrell Museum",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 51.135989, lng: -115.554876}, 
    map: map,
    title:"Sulphur Mountain",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 52.197261, lng: -117.255331},
    map: map,
    title:"Athabasca Glacier",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 52.532394, lng: -117.645063},
    map: map,
    title:"Sunwapta Falls",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 53.115813, lng: -119.157921},
    map: map,
    title:"Mt. Robson",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker7 = new google.maps.Marker({
    position: {lat: 53.130424, lng: -117.769892}, 
    map: map,
    title:"Miete Hot Springs",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker6.png'
    });

    //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

	// To add the marker to the map, call setMap();
	//marker.setMap(map);
  }