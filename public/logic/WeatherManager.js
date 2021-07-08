
class WeatherManager{

    async getCityByName(cityName) {
        console.log("City: " + cityName);
        return await $.get(`cities/${cityName}`);
    }
}