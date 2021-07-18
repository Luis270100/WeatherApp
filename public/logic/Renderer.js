class Renderer {

    renderCitySearch(cityData){
        const source = $('#search-city-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({cityData})
        $('#cities-container').empty();
        $('#cities-container').append(newHTML);
    }


    renderCitiesInDb() {
        
    }


}