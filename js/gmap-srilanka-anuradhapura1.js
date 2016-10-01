// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-srilanka-anuradhapura1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 7.823034, lng: 80.221025},
      zoom: 8,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 7.180400, lng: 79.884274},
    map: map,
    title:"Colombo International Airport (CMB)",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 8.311706, lng: 80.403709},
    map: map,
    title:"Anuradhapura",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 7.962119, lng: 80.720831}, 
    map: map,
    title:"Dambulla",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 8.029562, lng: 80.827542},
    map: map,
    title:"Minneriya National Park",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 7.290989, lng: 80.632850},
    map: map,
    title:"Kandy",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 6.896938, lng: 79.854372}, 
    map: map,
    title:"Colombo Shopping",
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