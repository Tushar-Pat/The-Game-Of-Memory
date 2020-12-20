var userInput = "";
var output = "yoinks";
var counter = 0;
//var arrLength = 0;
var colours = new Array("red", "green", "blue", "orange", "yellow", "purple"); //this is gonna be colours
var arr = Object.assign([],colours);
var cities = new Array("Toronto", "Vancouver", "Oshawa", "Montreal", "Calgary", "Hamilton");
var countries = new Array("Canada", "USA", "India", "Mexico", "China", "France");

//Main Game

function cities() {
    userInput = document.getElementById("textInput").value;

    removeIndex();
    findNewValue();

    document.getElementById("output").innerHTML = output;
}

function execute() {
    userInput = document.getElementById("textInput").value;

    removeIndex();
    findNewValue();

    document.getElementById("output").innerHTML = output;
}

function findNewValue() {
    output = arr[0];
    arr.splice(0, 1);
    counter+=1;
}

//game type commands (need to get working)

function colours(){
    var arr = Object.assign([],colours);
    document.getElementById("output").innerHTML = "yoinks";
}



function countries(){
    var arr = Object.assign([],countries);
    document.getElementById("output").innerHTML = "yoinks";
}

function removeIndex() {
    if (counter == 6) {
        window.alert("You win!!!");
    } else {
        var valueExists = false;
        for (var x = 0; x < arr.length; x++) {
            if (arr[x] == userInput) {
                valueExists = true;
                arr.splice(x, 1);
                break;
            }
        }

        if (!valueExists) {
            window.alert("You lose :(");
        }

        counter+=1;
    }
}