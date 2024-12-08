const display = document.getElementById('display');

//adds the value to the display 
function appendValue(n){
    display.value+=n;
}

function clearScreen(){
    display.value='';
}

function Decrease(){
    display.value = display.value.slice(0,-1);
}

function Evaluate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        alert("invalid input ,please provide a valid input");
        clearScreen();
    }
}


