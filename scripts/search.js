// Wunderground API Key: d1230b7c1330b01d
// Get the data from the wunderground API
var results;
function getData(lat, lon) {
    $.ajax({
        url: 'https://api.wunderground.com/api/d1230b7c1330b01d/geolookup/conditions/forecast/q/' + lat + ',' + lon + '.json',
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            results = data;
            var location = data.location.city + ', ' + data.location.state;
            var temp = Math.round(data.current_observation.temp_f);
            var summary = data.current_observation.weather;
            var highTemp = Math.round(data.forecast.simpleforecast.forecastday["0"].high.fahrenheit);
            var lowTemp = Math.round(data.forecast.simpleforecast.forecastday["0"].low.fahrenheit);
//            var precip = data.current_observation.precip_today_in;
//            var feelsLike = data.current_observation.feelslike_f;
//            var windDir = data.current_observation.wind_dir;
            var icon = data.current_observation.icon_url;
            var iconName = data.current_observation.icon;
            $('#cityDisplay').text(location);
            $('title').text(location + ' | Weather Home');
            $('#currentTemp').text(temp + "°F");
            $('#summary').text(summary);
//            $('#add1').text("Feels Like: " + feelsLike + "°F");
//            $('#add2').text("Precipitation: " + precip + " inches");
//            $('#add3').text("Wind Direction: " + windDir);
            $('#highTemp').text("High: " + highTemp + "°F");
            $('#lowTemp').text("Low: " + lowTemp + "°F");
            $('#iconDiv').html("<img src=" + icon + " alt=" + iconName + ">");
            $("#cover").fadeOut(250);
        }
    });
}

$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="#"' + ' onclick="getData(' + val.lat + ',' + val.lon + ')"' + ' title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup

// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    var i = $(this).index('a');
    console.log(i);
    $("#searchResults").hide();
    $("#resultsHeading").hide();
    // With the text value get the needed value from the weather.json file
    var city = $(this).text(); // Franklin, etc...
    console.log(city);
    getData(i.lat, i.lon);
});
