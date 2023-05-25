console.log("Hello World")

newFunction = () => {
    let valueOne = valOne;
    let valueTwo = valTwo;

    let valOne = document.getElementById("valOne").value;
    let valTwo = document.getElementById("valTwo").value;
    let total = valAnswer;


    if(valueOne === plus){
        let valAnswer = valOne + valTwo;
        
    }    

    if(valueOne === minus){
        let valAnswer = valOne - valTwo;
    } 

    if(valueOne === divide){
        let valAnswer = valOne / valTwo;
    } 

    if(valueOne === times){
        let valAnswer = valOne * valTwo
    } 

    console.log(total);

}

newFunction(6,2);