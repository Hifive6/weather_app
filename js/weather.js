//api key for open weather
var key = '32e202b1d9f0b78dbf8cc5854ff951a2'


var Moment = require('moment-timezone');




$('#submitZipcode').on('click', function(){
    let zipcode = $('#zipcodeSubmit').val();
    $('#zipcodeSubmit').empty();
    $('#displayJsTime').empty();
    
    $.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + key, function(response){
        console.log(response)
        let cityWeather = {
            name: response.name,
            weather: response.weather[0].description,
            temp: Math.floor((response.main.temp - 273.15) * (9/5) + 32),
            // convertedTempToFahrenheit: Math.floor((temp - 273.15) * (9/5) + 32)
        };
        
        $.each(cityWeather, function(key, val){
            // console.log(key);
            // console.log(val);
            let li = $('<br><li></li>');
            let value = li.append(val);
            $('#displayJsTime').append(value);
            
        })
        // console.log(cityWeather);
        // .append('Welcome to ' + currentName + '<br>')
        // .append('where the current temperature is ' + convertedTempToFahrenheit+ 'degress F' + '<br>')
        // .append(currentWeather);
        
        // let timeZone = response.timezone;
        // let name = response.name;
        // let anyCity = moment.tz(mo)
        // console.log(timeZone);
        // var a =  new Moment().tz(timeZone);

        setInterval(function(){
            let time = new Moment();
            let currentTimeInTimeZone = time.tz('America/New_York').format('hh:mm:ss a');
            console.log(currentTimeInTimeZone);
        }, 1000);


        // console.log(a)
    });
    
    

    
    
    // let time = new Moment();
    // currentTime = time.format('h:mm:ss a');


})