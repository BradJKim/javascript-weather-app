import { getGiphy, getWeatherByCity, getLocationByCity } from "./utils/utils";
import "./style.css";

const inputElement = document.getElementById("cityInput");
inputElement.value = "";

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", async () => {
    const inputElement = document.getElementById("cityInput");

    const cityName = inputElement.value;

    const response = await getWeatherByCity(cityName);
    console.log(response);

    if (response === undefined) {
        const error = document.getElementById("error");
        error.classList.add("shown");
    } else {
        const error = document.getElementById("error");
        error.classList.remove("shown");

        const phrase = response.condition.text;
        
        const information = document.getElementById("information");
        information.innerHTML = `Current Weather in ${cityName}: ${phrase}`;

        const random = Math.floor(Math.random() * 50);

        const gifurl = await getGiphy(phrase, random);

        const element = document.getElementById("gif");
        element.src = gifurl;
    }
});

const phrase = "Hello World";
const random = Math.floor(Math.random() * 50);

const gifurl = await getGiphy(phrase, random);

const element = document.getElementById("gif");
element.src = gifurl;
