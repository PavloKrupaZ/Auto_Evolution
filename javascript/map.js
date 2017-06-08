function showPosition(position) 
			{
				    var latlon = 51.5+ "," + -0.12;
				    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=500x500";
				    document.getElementById("geolocation").innerHTML = "<img src ='"+img_url+"'>";
			}