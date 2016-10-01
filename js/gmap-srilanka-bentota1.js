// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-srilanka-bentota1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 6.823034, lng: 80.221025},
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
    position: {lat: 6.444796, lng: 79.989248},
    map: map,
    title:"Bentota Resort",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 6.354329, lng: 80.018319}, 
    map: map,
    title:"Turtle Hatchery",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 6.585231, lng: 79.960781},
    map: map,
    title:"Kalutara",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 6.389690, lng: 80.501432},
    map: map,
    title:"Sinharaja Forest Reserve",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 6.273268, lng: 80.039829},
    map: map,
    title:"Madu Ganga Safari",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker6.png'
    });
    var marker7 = new google.maps.Marker({
    position: {lat: 6.896938, lng: 79.854372}, 
    map: map,
    title:"Colombo Shopping",
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