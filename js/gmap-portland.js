// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-portland');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 45.911, lng: -122.098},
      zoom: 7,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 45.589508, lng: -122.593343},
    map: map,
    title:"Portland (PDX)",
    icon: 'http://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 45.523053, lng: -122.677357},
    map: map,
    title:"Downtown Hotel",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 45.669527, lng: -121.887803}, 
    map: map,
    title:"Columbia River Gorge Nat'l Scenic Area",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 45.705686, lng: -121.519582},
    map: map,
    title:"Hood River Winery",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 45.554501, lng: -122.675804},
    map: map,
    title:"Food Cart Tour",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 45.523456, lng: -122.719819},
    map: map,
    title:"Pittock Mansion",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker6.png'
    });
    var marker7 = new google.maps.Marker({
    position: {lat: 45.890170, lng: -123.955773}, 
    map: map,
    title:"Coastal Tour",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker7.png'
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