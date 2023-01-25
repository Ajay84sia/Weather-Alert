const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ee49019b38msh8ff281367c9586fp127781jsnb688571c834e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let sunRise;
let sunSet;
let cursunRise;

const getWeather = (city) =>{

    cityName.innerHTML = city
     
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunRise = response.sunrise
        cursunRise = response.sunrise
        sunSet = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunRise = sunRise * 1000;
        let date = new Date(sunRise);
        date = date.toLocaleString()
        let sunriseTime = date.slice(10,21)
        sunrise.innerHTML = sunriseTime

        cursunRise = cursunRise * 1000;
        let curDate = new Date(cursunRise);
        curDate = curDate.toLocaleDateString()
        appDate.innerHTML = curDate



        sunSet = sunSet * 1000;
        let setDate = new Date(sunSet);
        setDate = setDate.toLocaleString()
        let sunsetTime = setDate.slice(10,21)
        sunset.innerHTML = sunsetTime
    })
    .catch(err => console.error(err));

    if(sunRise){
        ; 
    }

}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value)
})



getWeather("Delhi")