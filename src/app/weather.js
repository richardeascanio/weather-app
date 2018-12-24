export class Weather{

    constructor(city, countryCode){
        this.apikey = '6be73aa01d8b7102c084007802ba5ccb'; //apikey mia 131c409977dea581b0d1604d10a868f8
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},
        ${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}