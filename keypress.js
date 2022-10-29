// creating an array to store pressed keys
const keys = [];

//creating an array to store time
const time = [];

//this listener looks out for key presses. "keyup" was used because I don't want one keypress to be repeated
const keyBoard = addEventListener("keyup", e => {
    //console.log(e.key);
    let x = Date.now();
    //console.log(x);
    floatFix(x);
    arrayAdd(e.key, x);
    if(keys.length >= 5){
        arrayDelete();
    }
    logic(time);
})



//adding keypress value and time to map
function arrayAdd(x, y){
    keys.unshift(x);
    time.unshift(y);
}

//deleting last keypress value
function arrayDelete(){
    keys.pop();
    time.pop();
}

//fixing floating point time
function floatFix(x){
    x = x * 10;
    x = x / 10;
    return(x);
}

//Checks typing speed and determines if typing speed fell below 150ms
function logic(x){
    if(x == 5){
        //first we inspect if the last pressed buttons were above limit.
        if((x[4] - x[5]) > 150 && (x[0] - x[1]) < 150){
            display();
        }
    }
}

//Writing out result
function display(){
    document.getElementById("result").innerHTML = keys;
}