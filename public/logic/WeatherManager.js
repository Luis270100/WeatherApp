
class WeatherManager{

    async getCityByName(cityName) {
        return await $.get(`cities/${cityName}`);
    }
}