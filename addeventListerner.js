const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#boton");
const resultado = document.querySelector("#result");

btn.addEventListener(/*"submit"*/"click",btnOnClick);


function btnOnClick(/*event*/) {
      /*event.preventDefault();
      console.log({event});*/
      let sum1=parseInt(input1.value);
      let sum2=parseInt(input2.value);
      resultado.innerHTML=(sum1 + sum2);
};