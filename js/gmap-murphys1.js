// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-murphys1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 38.108452, lng: -120.466009},
      zoom: 12,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 38.137982, lng: -120.464739},
    map: map,
    title:"Town of Murphys",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 38.069060, lng: -120.465929}, 
    map: map,
    title:"Moaning Cavern & Zip Line",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
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