let Btn = document.querySelector("#button");

Btn.addEventListener("click", () => {

let Inp1 =parseFloat( document.querySelector(".inp1").value);

let Inp2 =parseFloat(document.querySelector(".inp2").value);

let Opt = document.querySelector(".operator").value;

let Res = document.querySelector("#result");

    let result;
    
    if(Opt === "Addition") {
        result = Inp1 + Inp2
    } else if (Opt === "Subtract") {
        result = Inp1- Inp2
    } else if (Opt === "Multiply") {
        result = Inp1 * Inp2
    } else if (Opt === "Divide") {
        result = Inp1 / Inp2
    } 
     
  Res.textContent = `Result : ${result}`
    
})



