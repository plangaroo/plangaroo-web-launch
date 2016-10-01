// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-pointreyes');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 38.408, lng: -122.947},
      zoom: 9,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 38.244451, lng: -122.629650},
    map: map,
    title:"Sprouts Farmers Market",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 38.516234, lng: -123.246013}, 
    map: map,
    title:"Historic Fort Ross State Park",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 38.569306, lng: -123.324742},
    map: map,
    title:"Gerstle Cove Campground",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 38.189381, lng: -122.949832},
    map: map,
    title:"Trailhead: Pierce Point Ranch",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 38.240616, lng: -122.994968},
    map: map,
    title:"Tomales Point",
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