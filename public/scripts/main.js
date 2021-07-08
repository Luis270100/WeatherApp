const weatherManager = new WeatherManager();
const renderer = new Renderer();

const handleSearch = async () => {
    let searchInput = $('#search-input').val();
    let city = await weatherManager.getCityByName(searchInput);
    
    if(!city){
        return alert("Hubo un error intentalo de nuevo.")
    }
    
    console.log(city);
    renderer.renderCitySearch([city]);
}

