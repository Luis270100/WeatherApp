const weatherManager = new WeatherManager();
const renderer = new Renderer();

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






