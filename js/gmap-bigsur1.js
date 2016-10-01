// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-bigsur1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 35.975069, lng: -121.488277},
      zoom: 8,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 36.222012, lng: -121.759271},
    map: map,
    title:"Big Sur Brunch",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 35.884441, lng: -121.455318},
    map: map,
    title:"Glambing Yurt",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 36.157435, lng: -121.672404}, 
    map: map,
    title:"McWay Cove",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 36.020116, lng: -121.522483},
    map: map,
    title:"Limekiln SP",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 35.685425, lng: -121.168161},
    map: map,
    title:"Hearst Castle",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 35.563906, lng: -121.081752},
    map: map,
    title:"Cambria",
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