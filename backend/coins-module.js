import {requestAPI} from "./api/api-coins.js"

function result(i){
    $("#number2")[0].value = i;
}

function getN1(){
    return $("#number1")[0].value;
}

function getCoin1(){
    return $("#coin1")[0].value;
}

window.onload = getCoin1();
window.onload = getN1();

window.convert = function(){
    var coinsValues = requestAPI();
    
    var coin1 = getCoin1();

    var n1 = getN1();

    if (coin1 == "DOLAR"){
        result(n1*coinsValues['DOLAR'])
    }
    if (coin1 == "EURO"){
        result(n1*coinsValues['EURO'])
    }
    if (coin1 == "PESO"){
        result(n1*coinsValues['PESO'])
    }
    if (coin1 == "BITCOIN"){
        result(n1*coinsValues['BITCOIN'])
    }
    if (coin1 == "LITECOIN"){
        result(n1*coinsValues['LITECOIN'])
    }
    if (coin1 == "IENEJAPONES"){
        result(n1*coinsValues['IENEJAPONES'])
    }
    if (coin1 == "FRANCOSUICO"){
        result(n1*coinsValues['FRANCOSUICO'])
    }
    if (coin1 == "DOLARAUS"){
        result(n1*coinsValues['DOLARAUS'])
    }
    if (coin1 == "YUANCHINES"){
        result(n1*coinsValues['YUANCHINES'])
    }
    if (coin1 == "NOVOSHEKEL"){
        result(n1*coinsValues['NOVOSHEKEL'])
    }
    if (coin1 == "LIBRA"){
        result(n1*coinsValues['LIBRA'])
    }
    if (coin1 == "DOLARCAD"){
        result(n1*coinsValues['DOLARCAD'])
    }
    if (coin1 == "DOLARTURISM"){
        result(n1*coinsValues['DOLARTURISM'])
    }
}

