import moment from './moment/moment.js';

window.updateDate = function(){
    var durationElement = document.getElementById("duration");

    var dateNow = moment(new Date());
    var datePast = moment("2020-06-06");
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
    
    durationElement.innerHTML = `Duração do desenvolvimento: ${days} dias, ${months} meses e ${years} anos.`    
}

window.onload = updateDate();