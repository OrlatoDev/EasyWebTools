import moment from './moment/moment.js';

window.calcAge = function(){
    var dayUser = $("#day")[0].value;
    var monthUser = $("#month")[0].value;
    var yearUser = $("#year")[0].value;

    var dateNow = moment(new Date());
    var datePast = moment(`${yearUser}-${monthUser}-${dayUser}`);
    var duration = moment.duration(dateNow.diff(datePast));
    
    var days = Math.trunc(duration.asDays());
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    for (var i = 0; days > 30;){
        if (months > 0 && days > 30){
            days -= 30;
        }
    }

    for (var i = 0; months > 12;){
        if (years > 0 && months > 12){
            months -= 12;
        }
    }

    if (yearUser === String){
        $("#result")[0].value = "Insira apenas valores numéricos para ano!"
    }
    else{
        $("#result")[0].value = `Você tem ${years} anos, ${months} meses e ${days} dias.`;
    }
}

document.getElementById("btn-calc").onclick = function() {calcAge()};
