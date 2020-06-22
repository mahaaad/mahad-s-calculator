//declares global variables
var a;
var b;
var operatorpressed = false;
var operator;

//adds numbers to input field
function storeNum(num){
    if (num == 'clear'){
        a = null;
        b = null;
        operatorpressed = false
        document.getElementById("input").value = 0;
    }
    //sets first value if user has not chosen operation yet
    else if(operatorpressed == false){
        if (document.querySelector("#input").value == 0){
            document.getElementById("input").value = num;
        }
        else{
            document.getElementById("input").value = document.querySelector("#input").value + num;
        }
    }
    //if user has chosen operation then it stores second value
    else{
        if (document.querySelector("#input").value == 0){
            document.getElementById("input").value = num;
        }
        else{
            document.getElementById("input").value = document.getElementById("input").value = document.querySelector("#input").value + num;
        }
        
    }

}
function setOperator(op){
    if (operatorpressed == false){
    operator = op
    operatorpressed = true
    a = document.querySelector("#input").value
    document.getElementById("input").value = 0;
    }
}

function calc(){
    operatorpressed = false
    b = document.querySelector("#input").value
    if (operator == "+")
    {
        document.getElementById("input").value = (parseFloat(a) + parseFloat(b)).toFixed(1);
    }
    if (operator == "-")
    {
        document.getElementById("input").value = parseFloat(a) - parseFloat(b);
    }
    if (operator == "x")
    {
        document.getElementById("input").value = parseFloat(a) * parseFloat(b);
    }
    if (operator == "/")
    {
        document.getElementById("input").value = parseFloat(a) / parseFloat(b);
    }
    if (operator == "^")
    {
        document.getElementById("input").value = parseFloat(a) ** parseFloat(b);
    }
}