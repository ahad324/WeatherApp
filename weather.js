const container = document.querySelector('.container')
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const otherdetails = document.querySelector('.other-details')
const feelslike = document.querySelector('.feels-like');
const tempminmax = document.querySelector('.tempmin-max');


search.addEventListener('click', () => {

    const APIKey = '87fbfbeea5cb7fa3cbf54ce9ef288a84    '
    const city = document.querySelector('.search-box input').value;
    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)

        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {

                container.style.height = '80%';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                otherdetails.style.display = 'none';
                tempminmax.style.display = 'none';

                return;
            }
            else {
                error404.style.display = 'none';
                error404.classList.remove('fadeIn');

            }


            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const feel = document.querySelector('.other-details .feelslike span');
            const pressure = document.querySelector('.other-details .pressure span');
            const tempmin = document.querySelector('.tempmin-max .tempmin span');
            const tempmax = document.querySelector('.tempmin-max .tempmax span');



            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'https://icon666.com/r/_thumb/gjm/gjmlds5akhf8_64.png';
                    break;
                case 'Rain':
                    image.src = 'https://icon666.com/r/_thumb/iax/iax5qukve84u_64.png';
                    break;
                case 'Snow':
                    image.src = 'https://icon666.com/r/_thumb/u8v/u8vl3bxwwgdu_64.png';
                    break;
                case 'Clouds':
                    image.src = 'https://icon666.com/r/_thumb/h8z/h8z9i2krvtdz_64.png';
                    break;
                case 'Haze':
                    image.src = 'https://icon666.com/r/_thumb/ce2/ce20lzvn56f1_64.png';
                    break;

                default:
                    image.src = 'smoke.svg'
                    break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span><i class="fa fa-circle"></i> C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
            feel.innerHTML = `${parseFloat(json.main.feels_like)}`;
            pressure.innerHTML = `${parseInt(json.main.pressure)}`;
            tempmin.innerHTML = `${parseFloat(json.main.temp_min)}`;
            tempmax.innerHTML = `${parseFloat(json.main.temp_max)}`;
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            otherdetails.style.display = '';
            tempminmax.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            otherdetails.classList.add('fadeIn');
            tempminmax.classList.add('fadeIn');


            container.style.height = '95%';
            container.classList.add('fade');


        })
})




