// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-pescadero');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 37.205, lng: -122.363},
      zoom: 11,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 37.253, lng: -122.383},
    map: map,
    title:"Arcangeli Grocery",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 37.201, lng: -122.344},
    map: map,
    title:"Butano State Park",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 37.132584, lng: -122.313342},
    map: map,
    title:"Pie Ranch",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 37.165543, lng: -122.359972},
    map: map,
    title:"Hwy 1 Brewing Company",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
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