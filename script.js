var weatherData = [
    {
        city: 'New York',
        temperature: 22,
        condition: 'Cloudy',
        country: 'USA',
        icon: 'cloud.svg'
    },
    {
        city: 'Los Angeles',
        temperature: 28,
        condition: 'Sunny',
        country: 'USA',
        icon: 'sunny.svg'
    },
    {
        city: 'Chicago',
        temperature: 18,
        condition: 'Rainy',
        country: 'USA',
        icon: 'rain.svg'
    },
    {
        city: 'Houston',
        temperature: 30,
        condition: 'Sunny',
        country: 'USA',
        icon: 'sunny.svg'
    },
    {
        city: 'Phoenix',
        temperature: 35,
        condition: 'Sunny',
        country: 'USA',
        icon: 'sunny.svg'
    }
];
var selectCity =  document.getElementById('select-city');
const  weatherInfo = document.getElementById('weather-info');
const weatherResult = document.getElementById('weather-result');
const manualTemp = document.getElementById('manual-temp');
const manualCond = document.getElementById('manual-cond');
const iconId = document.getElementById('icon-id');
const weatherPlatform = document.getElementById('weather-platform');

//Populate the dropdown with city options
weatherData.forEach((city) => {
    var option = document.createElement('option');
    option.value = city.city;
    option.text = city.city;
    selectCity.appendChild(option);
    console.log(city.city);
});

// for (let i = 0; i < weatherData.length; i++) {
//     var option = document.createElement('option');
//     option.value = weatherData[i].city;
//     option.text = weatherData[i].city
//     selectCity.appendChild('option');
// }
console.log(weatherData[1].temperature);

selectCity.addEventListener('change', function() {
    var selectedCity = selectCity.value;
    weatherData.forEach((data)=>{
        if (selectedCity === data.city) {
            weatherPlatform.setAttribute('class', 'bg-gray-950 w-96 h-96 flex flex-col justify-center text-center items-center')
            weatherResult.removeAttribute('class', 'hidden');
            weatherInfo.innerHTML = `<h2>${selectedCity}, ${data.country}</h2>`;
            manualTemp.innerHTML = `<p>Temperature: ${data.temperature}°C</p>`;
            iconId.setAttribute('src',`${data.icon}`);
            manualCond.innerHTML = `<p>Condition<br> 
                                    ${data.condition}</p>`;
        }
    });

    // if (selectedCity && weatherData[selectedCity]) {
    //     var data = weatherData[selectedCity];
    //     weatherInfo.innerHTML = `<h2>${selectedCity}</h2>
    //                              <p>Temperature: ${data.temperature}°C</p>
    //                              <p>Condition: ${data.condition}</p>`;
    // } else {
    //     weatherInfo.innerHTML = '<p>Please select a city to see the weather information.</p>';
    // }
});

