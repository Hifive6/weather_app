//api key for open weather
//32e202b1d9f0b78dbf8cc5854ff951a2


var Moment = require('moment');



$('#submitZipcode').on('click', function(){
    let zipcode = $('#zipcodeSubmit').val();
    
    $.get('https://api.openweathermap.org/data/2.5/weather?zip=' +zipcode + '&appid=32e202b1d9f0b78dbf8cc5854ff951a2',function(response){
        $('#zipcodeSumit').empty;
        
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
    });

    
    
    
    
    // let time = new Moment();
    // currentTime = time.format('h:mm:ss a');


})