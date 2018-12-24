import './index.css';

const { UI } = require('./ui');
const ui = new UI();

const { Store } = require('./store');
const store = new Store();
const { city, countryCode } = store.getLocationData();

const { Weather } = require ('./weather');
const weather = new Weather(city, countryCode);

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather)