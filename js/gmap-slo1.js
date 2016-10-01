// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-slo1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 35.225, lng: -120.706},
      zoom: 10,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 35.180311, lng: -120.733433},
    map: map,
    title:"Avila Beach Hotel",
    icon: 'http://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
	});
	var marker2 = new google.maps.Marker({
    position: {lat: 35.179472, lng: -120.734714},
    map: map,
    title:"Wine Bar",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 35.178800, lng: -120.732167}, 
    map: map,
    title:"Sunset Dinner",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 35.179112, lng: -120.733156},
    map: map,
    title:"Grocery and Deli",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 35.213754, lng: -120.606022},
    map: map,
    title:"Edna Valley",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 35.279928, lng: -120.662611},
    map: map,
    title:"Burgers in SLO",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker6.png'
    });
    var marker7 = new google.maps.Marker({
    position: {lat: 35.106625, lng: -120.629383}, 
    map: map,
    title:"ATV Rental",
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