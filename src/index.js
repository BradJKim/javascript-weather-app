import { getGiphy, getWeatherByCity } from "./utils/utils";

const response = await getWeatherByCity("London");

console.log(response);

const phrase = "Hello World"
const random = Math.floor(Math.random() * 50)

const gifurl = await getGiphy(phrase, random);

const element = document.getElementById("gif");
element.src = gifurl;
