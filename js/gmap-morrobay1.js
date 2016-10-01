// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-morrobay1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 35.499146, lng: -120.780544},
      zoom: 9,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 35.371075, lng: -120.857297},
    map: map,
    title:"Oysters",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 35.368822, lng: -120.854306},
    map: map,
    title:"Wine Bar",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 35.643335, lng: -120.771683}, 
    map: map,
    title:"Paso Robles Winery",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 35.281401, lng: -120.660319},
    map: map,
    title:"Firestone Grill",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 35.304303, lng: -120.697632},
    map: map,
    title:"Bishop Peak",
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