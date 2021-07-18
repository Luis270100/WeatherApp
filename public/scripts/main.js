const weatherManager = new WeatherManager();
const renderer = new Renderer();


$(document).ready(async () => {
    getCities();
});


const searchCity = async () => {
    let searchInput = $('#search-input').val();
    if (!/\S/.test(searchInput)) {
        return alert("Please type a city name");
    }

    let city = await weatherManager.getCityByName(searchInput);
    if(!city){
        return alert("Hubo un error intentalo de nuevo.")
    }
    renderer.renderCitySearch([city]);
};


const getCities = async () => {
    let cities = await weatherManager.getCities();
    let citiesInfo = [];
    for(const city of cities){
        let cityInfo = await weatherManager.getCityByName(city.name);
        citiesInfo.push(cityInfo);
    };
    console.log(citiesInfo);
    renderer.renderCitiesInDb(citiesInfo);
};

$('#cities-container').on("click", ".btt", async (event) => {
    await weatherManager.removeCity(event.target.value);
    getCities();
});