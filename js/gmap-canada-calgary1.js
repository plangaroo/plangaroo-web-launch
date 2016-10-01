// This is the file I created per instructions here: https://developers.google.com/maps/documentation/javascript/tutorials/adding-a-google-map#create_and_configure_the_map
  function initMap() {
    var mapDiv = document.getElementById('map-canada-calgary1');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 51.323267, lng: -115.263485},
      zoom: 9,
      scrollwheel: false
    });
    var marker1 = new google.maps.Marker({
    position: {lat: 51.125249, lng: -114.016900},
    map: map,
    title:"Calgary Airport (YYC)",
    icon: 'http://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker1.png'
    });
	var marker2 = new google.maps.Marker({
    position: {lat: 51.074298, lng: -115.359717},
    map: map,
    title:"Canmore",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker2.png'
	});
	var marker3 = new google.maps.Marker({
    position: {lat: 51.064007, lng: -115.401752}, 
    map: map,
    title:"Ha Ling Peak and Grassi Lake",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker3.png'
	});
	var marker4 = new google.maps.Marker({
    position: {lat: 51.151140, lng: -115.560800},
    map: map,
    title:"Banff Hot Springs",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker4.png'
	});
    var marker5 = new google.maps.Marker({
    position: {lat: 51.254732, lng: -115.837479},
    map: map,
    title:"Johnston Canyon",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker5.png'
    });
    var marker6 = new google.maps.Marker({
    position: {lat: 51.425919, lng: -116.177234},
    map: map,
    title:"Lake Louise",
    icon: 'https://s3-us-west-1.amazonaws.com/plangaroo.com/img/marker6.png'
    });
    var marker7 = new google.maps.Marker({
    position: {lat: 51.324501, lng: -116.182581}, 
    map: map,
    title:"Lake Moraine",
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