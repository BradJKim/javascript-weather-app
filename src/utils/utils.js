const env = {
    GIPHY_API_KEY: "gS0G6jNohoJosno8XPT4LnvlG20g2zSx",
    WEATHER_API_KEY: "d2be86c55efd42cda5315502240806",
};

async function getGiphy(topic, rank) {
    const response = await fetch(
        `http://api.giphy.com/v1/gifs/search/?key=${env.GIPHY_API_KEY}&q=${topic}`,
        { mode: "cors" }
    );
    const gifData = await response.json();
    const gifURL = gifData.data[rank].images.fixed_height.url;
    return gifURL;
}

async function getWeatherByCity(city) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${env.WEATHER_API_KEY}&q=${city}`,
        { mode: "cors" }
    );

    const weatherJson = await response.json();
    return weatherJson.current;
}

async function getLocationByCity(city) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${env.WEATHER_API_KEY}&q=${city}`,
        { mode: "cors" }
    );

    const weatherJson = await response.json();
    return weatherJson.location;
}

export { getGiphy, getLocationByCity, getWeatherByCity };
