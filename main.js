var userInput = 0;
var output = 0;
var nums = new Array[1, 2, 3, 4, 5, 5];
var counter = 0;

function execute(){
    userInput = document.getElementById("textInput");

    removeIndex()
    findNewValue();
    
    document.write(output);
}

function removeIndex(){
    if(counter == 5){
        window.alert("You win!!!");
    }
    
    var valueExists = false;
    for(var x = 0; x < nums.length; x++){
        if(nums[x] == userInput){
            valueExists = true;
            nums.splice(x,1);
            break;
        }
    }

    if(!valueExists){
        window.alert("You lose :(");
    }
}

function findNewValue(){
    output = nums[0];
    nums.splice(0,1);
}