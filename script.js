const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1199d1bdbmsha6902c57ef7f55dp10c453jsn49d9a99a71e8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response =>response.json())
.then(response =>{
    console.log(response,city)
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity
	min_temp.innerHTML=response.min_temp
	max_temp.innerHTML=response.max_temp
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
	temp.innerHTML=response.temp
	temp2.innerHTML=response.temp
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed
	wind_degrees.innerHTML=response.wind_degrees

})
.catch(err => console.log(err));
}
const getWeather1=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response =>response.json())
.then(response =>{
	cloud_pct3.innerHTML=response.cloud_pct
	feels_like3.innerHTML=response.feels_like
	humidity3.innerHTML=response.humidity
	min_temp3.innerHTML=response.min_temp
	max_temp3.innerHTML=response.max_temp
	sunrise3.innerHTML=response.sunrise
	sunset3.innerHTML=response.sunset
	temp3.innerHTML=response.temp
	wind_speed3.innerHTML=response.wind_speed
	wind_degrees3.innerHTML=response.wind_degrees
})
.catch(err => console.log(err));
}
const getWeather2=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response =>response.json())
.then(response =>{
	cloud_pct4.innerHTML=response.cloud_pct
	feels_like4.innerHTML=response.feels_like
	humidity4.innerHTML=response.humidity
	min_temp4.innerHTML=response.min_temp
	max_temp4.innerHTML=response.max_temp
	sunrise4.innerHTML=response.sunrise
	sunset4.innerHTML=response.sunset
	temp4.innerHTML=response.temp
	wind_speed4.innerHTML=response.wind_speed
	wind_degrees4.innerHTML=response.wind_degrees
})
.catch(err => console.log(err));
}
const getWeather3=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response =>response.json())
.then(response =>{
	cloud_pct5.innerHTML=response.cloud_pct
	feels_like5.innerHTML=response.feels_like
	humidity5.innerHTML=response.humidity
	min_temp5.innerHTML=response.min_temp
	max_temp5.innerHTML=response.max_temp
	sunrise5.innerHTML=response.sunrise
	sunset5.innerHTML=response.sunset
	temp5.innerHTML=response.temp
	wind_speed5.innerHTML=response.wind_speed
	wind_degrees5.innerHTML=response.wind_degrees
})
.catch(err => console.log(err));
}
const getWeather4=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response =>response.json())
.then(response =>{
	cloud_pct6.innerHTML=response.cloud_pct
	feels_like6.innerHTML=response.feels_like
	humidity6.innerHTML=response.humidity
	min_temp6.innerHTML=response.min_temp
	max_temp6.innerHTML=response.max_temp
	sunrise6.innerHTML=response.sunrise
	sunset6.innerHTML=response.sunset
	temp6.innerHTML=response.temp
	wind_speed6.innerHTML=response.wind_speed
	wind_degrees6.innerHTML=response.wind_degrees
})
.catch(err => console.log(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
getWeather(city.value)
getWeather1("Shangai")
getWeather2("Boston")
getWeather3("Lucknow")
getWeather4("Kolkata")
})
getWeather("Delhi")
getWeather1("Shangai")
getWeather2("Boston")
getWeather3("Lucknow")
getWeather4("Kolkata")