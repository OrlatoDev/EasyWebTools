count(0);
function count(i){
    var textAreaElement = $("#text-area")[0].value;

    var characters = textAreaElement.length;
    
    if (characters+i<0){

    }
    else{
        var key = event.keyCode;

        if (key == 8){
            count(-1);
        }
        document.getElementById("character").innerHTML = `Caracteres: ${characters+i}`;
    }
}

function upper(){
    //$("#text-area").css('text-transform', 'uppercase');
    $("#text-area")[0].value = $("#text-area")[0].value.toUpperCase();
}

function lower(){
    //$("#text-area").css('text-transform', 'lowercase');
    $("#text-area")[0].value = $("#text-area")[0].value.toLowerCase();
}

function capitalize(){
    //$("#text-area").css("text-transform", "capitalize");
    $("#text-area")[0].value = $('#text-area')[0].value.charAt(0).toUpperCase() + $("#text-area")[0].value.slice(1).toLowerCase();
}

function alternate(){
    var text = $("#text-area")[0].value;
    var alternateTextArray = [];
    for (var i=0; i<text.length; i++){
        if (i%2 === 0){
             alternateTextArray.push(text.charAt(i).toUpperCase());
        }
        else{
            alternateTextArray.push(text.charAt(i).toLowerCase());
        }
    }
    $("#text-area")[0].value = alternateTextArray.join("");
}

function capAll(){
    var text = $("#text-area")[0].value.toLowerCase();

    var spacesNumber = text.replace(/[^ ]/g, "").length;

    var textsSliceds = [];

    for (var i=0; i<spacesNumber+1; i++){
        var space = text.search(" ");
        if (i === spacesNumber){
            textsSliceds.push(text.slice(0));
        }
        else{
            textsSliceds.push(text.slice(0, space));
        }

        text = text.slice(space+1);
    }

    for (var i=0; i<textsSliceds.length; i++){
        textsSliceds[i] = textsSliceds[i].charAt(0).toUpperCase() + textsSliceds[i].slice(1);
    }

    var content = textsSliceds.join(" ");

    $("#text-area")[0].value = content;
}
function copy(){
    var value = $("#text-area")[0];

    value.select();

    document.execCommand("copy")
}
