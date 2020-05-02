var userInput = "";
var output = "yoinks";
var counter = 0;
var arr = new Array("red", "green", "blue", "orange", "yellow", "purple");
//var arr = new Array(6);

function execute() {
    userInput = document.getElementById("textInput").value;

    removeIndex()
    findNewValue();

    document.getElementById("output").innerHTML = output;
}

function removeIndex() {
    if (counter == 3) {
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

        counter += 1;
    }
}

function findNewValue() {
    output = arr[0];
    arr.splice(0, 1);
}

//game type commands

function colours(){
    arr = colours;
}