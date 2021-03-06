
class WeatherManager{

    async getCityByName(cityName) {
        return await $.get(`city/${cityName}`);
    }

    async saveCityName(cityName) {
        let data = {name : cityName}
        $.post('/city', data, () => {
            console.log(`${cityName} is saved.`);
        });
    }

    async getCities() {
        return await $.get("/cities");
    }
    
    async removeCity(cityName) {
        return $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: () => { 
                console.log("City deleted");
            }
        });
    }
}