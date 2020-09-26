import {requestAPI} from "./api/api-tempo.js"

var city;
var temp;
var tempMax;
var tempMin;
var feelsLike;
var pressure;
var humidity;

window.weather = function weather(){
    city = $("#nameCity")[0].value.charAt(0).toUpperCase() + $("#nameCity")[0].value.slice(1);
    city = city.trim();

    var info = requestAPI(city);

    temp = (info.temp).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"°C";
    tempMax = (info.temp_max).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"°C";
    tempMin = (info.temp_min).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"°C";
    feelsLike = (info.feelsLike).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"°C";
    pressure = (info.pressure).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"psi"
    humidity = (info.humidity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })+"%";

    renderResult();
}
window.renderResult = function renderResult(){

    clearResult();

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");

    var textNodeTitle = document.createTextNode(`Tempo para ${city}:`);
    var textNodeTemp = document.createTextNode(`Temperatura: ${temp}`)
    var textNodeTempMax = document.createTextNode(`Temperatura Máxima: ${tempMax}`)
    var textNodeTempMin = document.createTextNode(`Temperatura Mínima: ${tempMin}`)
    var textNodeFeelsLike = document.createTextNode(`Sensação Térmica: ${feelsLike}`)
    var textNodePressure = document.createTextNode(`Pressão: ${pressure}`)
    var textNodeHumidity = document.createTextNode(`Umidade: ${humidity}`)
    
    p1.appendChild(textNodeTitle);
    document.getElementById("result-weather").appendChild(p1).classList.add("text-white");
    p2.appendChild(textNodeTemp);
    document.getElementById("result-weather").appendChild(p2).classList.add("text-white");
    p3.appendChild(textNodeTempMax);
    document.getElementById("result-weather").appendChild(p3).classList.add("text-white");
    p4.appendChild(textNodeTempMin);
    document.getElementById("result-weather").appendChild(p4).classList.add("text-white");
    p5.appendChild(textNodeFeelsLike);
    document.getElementById("result-weather").appendChild(p5).classList.add("text-white");
    p6.appendChild(textNodePressure);
    document.getElementById("result-weather").appendChild(p6).classList.add("text-white");
    p7.appendChild(textNodeHumidity);
    document.getElementById("result-weather").appendChild(p7).classList.add("text-white");

}

window.clearResult = function clearResult(){
    document.getElementById("result-weather").innerHTML = "";
}

window.document.getElementById("nameCity").addEventListener('keypress', function(e){
    if(e.which == 13){
       weather();
    }
 }, false);
