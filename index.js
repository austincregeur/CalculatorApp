let expression = "";

function clickHandler(element){
    expression += element.value
    updateScreen();
}

function evaluateExpression(){
    try {
        expression = Math.round(eval(expression)*100)/100;
    } catch (error) {
        expression = "ERR";
    }
    updateScreen();
}

function clearAll(){
    expression = "";
    updateScreen("0");
}

function backspace(){
    try{
        expression = expression.slice(0, expression.length - 1);
    } catch {
        expression="";
    }
    if(expression===""){
        updateScreen("0");
    } else {
        updateScreen();
    }
}

function updateScreen(val){   
    document.getElementById("screen").value = val ? val : expression;
}