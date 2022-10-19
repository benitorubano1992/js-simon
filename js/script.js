const spaceResult=document.querySelector("p");
const ulEl=document.getElementById("list-box");
const number1=getRndInteger(1,100);
const number2=getRndInteger(1,100);
const number3=getRndInteger(1,100);
const number4=getRndInteger(1,100);
const number5=getRndInteger(1,100);
arrayNum=[number1,number2,number3,number4,number5];
let stringHtml=createContent(arrayNum);
render(stringHtml);
console.log(arrayNum);
setTimeout(function(){
    render("");
    
   setTimeout(function(){
    const inputValue=inputArray();
    let stringMatch=checkingArray(inputValue);
    spaceResult.innerHTML=stringMatch;
   },3005) 
},3000)








/***
 * funzione che prende in input un array lo confronta con quello generato in automatico  e mi restituisce una stringa letterale in cui mi dice quali e quanti  valori sono uguali a quelli inseriti
*@param{array}un array di valori tra 1 e 100 
*@returs {string} string literal da stampare a video
*/
function checkingArray(unArray){
let result="";
let count=0;
let matchingNum="";
for(let i=0;i<unArray.length;i++){
    if(arrayNum.includes(unArray[i])){
        count++;
        matchingNum+=unArray[i]+", ";
    }
}
if(count===0)
result="nessun elemento uguale"
else if(count===1)
result=`un elemento uguale ed è: ${matchingNum}`
else
result=`in totale i numeri corrispondenti sono :${count} e i valori sono ${matchingNum} `
return result;
}


/**
 * funzione che richiede all'utente 5 valori compresi tra 1 e 10 e li memorizza
 * @returns{array} un array di 5 elementi compresi tra 1 e 100
 * 
 * 
 */
function inputArray(){
    const result=[];
    for(let i=0;i<5;i++){
        const number=parseInt(prompt("inseirsci un valore numerico da 1 a 100"));
        result.push(number);
    }
    return result;
}




/**
 * funzione che prende in input un array e restituisce una stringa literal da usare come innerHtml a ul
 * @param {number} un array di numeri  
 * @returns {string}
 */


function createContent(arrayNum){
let html=``;
for(let i=0;i<arrayNum.length;i++){
    html+=`<li>${arrayNum[i]}</li>`
}

return html;
}


/**
 * 
 *  funzione che prende in input una stringa e la va inserire nel innerHTML di ul
 * @param {string}  
 * @returns 
 */

function render(stringLiteral){
    ulEl.innerHTML=stringLiteral;
}

/*funzione che prende in input due numeri e genera un numero casuale compreso tra questi due numeri
@param{number} input 2 numeri il limite inferiore,e il limite superiore 
@param{number} restituisce un numero random

* 
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}