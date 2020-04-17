//api key for open weather
var key = '32e202b1d9f0b78dbf8cc5854ff951a2'


var Moment = require('moment-timezone');




$('#submitZipcode').on('click', function(){
    let zipcode = $('#zipcodeSubmit').val();
    $('#zipcodeSubmit').empty();
    $('#displayJsTime').empty();
    
    $.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + key, function(response){
        console.log(response)

        let city = {
            name: response.name,
            weather: response.weather[0].description,
            temp: Math.floor((response.main.temp - 273.15) * (9/5) + 32) + ' degrees',
            lat: response.coord.lat,
            lon: response.coord.lon

        };
        $.get('http://api.openweathermap.org/data/2.5/onecall?lat=' + city.lat + '&lon=' + city.lon + '&appid=' + key,function(response){
            // console.log(response.timezone);
            let timeZone = response.timezone;
            let time = new Moment();
            let currentTime = time.tz(timeZone).format('hh:mm:ss a')
            // console.log(currentTime);

            let newDiv = $('<br>')
            // let timeInTimeZone = newDiv.append(currentTime);
            // console.log(timeInTimeZone)
            $('#addTime').append(currentTime);
            // let currentTimeInTimeZone = time.tz(name).format('hh:mm:ss a');
            // console.log(currentTimeInTimeZone);
            // }, 1000);
            
        })
        
        
        
        $.each(city, function(key, val){
            // console.log(key);
            // console.log(val);
            let li = $('<br><li></li>');
            let value = li.append(val);
            $('#displayJsTime').append(value);
            
        })
    });
    // convertedTempToFahrenheit: Math.floor((temp - 273.15) * (9/5) + 32)
    // console.log(cityWeather);
    // .append('Welcome to ' + currentName + '<br>')
    // .append('where the current temperature is ' + convertedTempToFahrenheit+ 'degress F' + '<br>')
    // .append(currentWeather);
    
    // let timeZone = response.timezone;
        // let name = response.name;
        // let anyCity = ('America'/`${name}`);

        // console.log(anyCity);
        // var a =  new Moment().tz(timeZone);

        // setInterval(function(){


        // console.log(a)
    
    

    
    
    // let time = new Moment();
    // currentTime = time.format('h:mm:ss a');


})