let calList = [];
let operCount = 0;
let numCount = 0;
let storedCount = 0;
let dotCount = 0;

function calReset(){
    calList = [];
    operCount = 0;
    numCount = 0;
    dotCount = 0;
    storedCount = 0;
}

function screenReset(){
    calScreen("Calculations")
    calReset()
}

function numPush(num){
    if (dotCount == 1){ 
        if (num != '.'){
            
            if (operCount == 1){   
                if (num != '+' && num != 'x' && num != '-' && num != '/'){
                    calList.push(num);
                }
            }
            else{
                calList.push(num);
            }
        }
    }
    else{  
        if (operCount == 1){
            if (num != '+' && num != 'x' && num != '-' && num != '/'){
                calList.push(num);
            }
        }
        else{
            calList.push(num);
        }
    }

    if (calList[numCount] == '.'){
        dotCount++;
    }

    if (calList[numCount] == '+' || calList[numCount] == '-' || calList[numCount] == 'x' || calList[numCount] == '/'){
        storedCount = numCount;
        operCount++;
        if (dotCount !=0){
            dotCount--;
        }
    }  

    let calText = calList.join('');
    calScreen(calText);
    numCount = calList.length-1;
}

function numberSeperator(){
    let operator = calList[storedCount];

    console.log(operCount)
    console.log(numCount)
    console.log(dotCount)
    console.log(storedCount)

    let num1List;
    let num2List;

    num2List= calList.splice(storedCount+1, numCount);
    num1List= calList.splice(0, storedCount);

    let number1 = parseFloat(num1List.join('').replace(",",""));
    let number2 = parseFloat(num2List.join('').replace(",",""));
    
    myCalculations(number1, number2, operator);

}

function myCalculations(num1, num2, oper){
    let answer;
    console.log(num1)
    console.log(num2)
    console.log(calList)
    if (oper == '+'){
        answer = addition(num1,num2);
    }
    else if (oper == '-'){
        answer = subtraction(num1,num2);
    }
    else if (oper == 'x'){
        answer = mutiplication(num1,num2);
    }
    else if (oper == '/'){
        answer = division(num1, num2);
    }
    answer = answer * 1000000
    answer = Math.round(answer)
    answer = answer / 1000000

    calScreen(answer)

    calList = [];
    
    calReset()

    calList = answer.toString().split('');
    console.log(calList)
}

function addition(num1, num2){
    return (num1 + num2);
}
function subtraction(num1, num2){
    return (num1 - num2);
}
function mutiplication(num1, num2){
    return (num1 * num2);
}
function division(num1, num2){
    return (num1 / num2);
}

function calScreen(calText){
    document.getElementById('display').innerHTML = calText;
}



