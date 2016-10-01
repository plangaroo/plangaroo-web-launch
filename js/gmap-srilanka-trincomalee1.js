// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-srilanka-trincomalee1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 8.073034, lng: 80.621025},
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
    position: {lat: 8.587622, lng: 81.219568},
    map: map,
    title:"Trincomalee",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 8.721847, lng: 81.203910}, 
    map: map,
    title:"Pigeon Island National Park",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 7.731277, lng: 81.676420},
    map: map,
    title:"Batticaloa",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 7.928449, lng: 81.561276},
    map: map,
    title:"Pasikuda",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
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