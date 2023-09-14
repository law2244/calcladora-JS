"use strict";
let buttoens = document.querySelectorAll(".botaocalc1");
let input = document.querySelector(".inputCalc");
input.disabled = true;
buttoens.forEach((c) => {
    c.addEventListener("click", () => {
        input.value += c.getAttribute("data");
    });
});
let result = document.querySelector(".botaocalcResult");
result.addEventListener("click", () => {
    input.value = eval(input.value);
    if (eval(input.value) == undefined) {
        input.value = "";
    }
});
let reset = document.querySelector(".botaocalcReset");
reset.addEventListener("click", () => {
    input.value = "";
});
let del = document.querySelector(".botaocalDEl");
del.addEventListener("click", () => {
    let cacter = input.value.substring(0, input.value.length - 1);
    input.value = cacter;
});
const circle = document.querySelector(".circle");
const botao = document.querySelector(".botao");
let areaBotoes = document.querySelector(".areaBotoes");
let body = document.querySelector("body");
circle.addEventListener("click", () => {
    if (botao.getAttribute("data") === "tema1") {
        botao.style.justifyContent = "center";
        botao.setAttribute("data", "tema2");
        areaBotoes.setAttribute("data", "tema2");
        body.setAttribute("data", "tema2Body");
        // temas(
        //     "#E6E6E6" ,
        //     "#383731" ,
        //     "#EFEFEF" ,
        //     "#D5CCCD" ,
        //     "#E6E4E0" ,
        //     "#3B8086" ,
        //     "#C85401" ,
        //     "CA423B"  ,
        //     "383731" ,
        // )
        return;
    }
    if (botao.getAttribute("data") === "tema2") {
        botao.style.justifyContent = "flex-end";
        botao.setAttribute("data", "tema3");
        areaBotoes.setAttribute("data", "tema3");
        body.setAttribute("data", "tema3Body");
        // temas(
        //     "#170629" ,
        //     "#E8D459" ,
        //     "#1D0836" ,
        //     "#1D0836" ,
        //     "#331A4E" ,
        //     "#53077D" ,
        //     "#00DECE" ,
        //     "#04DDD1" ,
        //     "#EFDC5F" ,
        // )
        return;
    }
    if (botao.getAttribute("data") === "tema3") {
        botao.style.justifyContent = "flex-start";
        botao.setAttribute("data", "tema1");
        areaBotoes.setAttribute("data", "tema1");
        body.setAttribute("data", "tema1Body");
        // temas(
        //     "#3B4664" ,
        //     "#F6FCFD" ,
        //     "#191F32" ,
        //     "#252D43" ,
        //     "#EAE4DB" ,
        //     "#647298" ,
        //     "#D03F30" ,
        //     "#D03F30" ,
        //     "#4D5058" ,
        // )
        return;
    }
});
// function temas(
//      a:colors ,
//      b:colors ,
//      c:colors ,
//      d:string ,
//      e:colors ,
//      f:colors ,
//      g:colors ,
//      h:colors ,
//      i:colors  
//      )
//      {
//     let body = document.querySelector("body") as  HTMLElement
//     let classTema = document.querySelector(".tema") as  HTMLElement
//     let visor = document.querySelector(".visor") as  HTMLElement
//     let input = document.querySelector(".visor input") as  HTMLElement
//     let botao = document.querySelector(".botao") as  HTMLElement
//     let botaocalc1: any = document.querySelectorAll(".botaocalc1")
//     let botaocalDEl = document.querySelector(".botaocalDEl") as  HTMLElement
//     let botaocalcReset = document.querySelector(".botaocalcReset") as  HTMLElement
//     let botaocalcResult = document.querySelector(".botaocalcResult") as  HTMLElement
//     let circleBotao =  document.querySelector(".circle") as  HTMLElement
//     body.style.backgroundColor = a
//     classTema.style.color = b
//     visor.style.backgroundColor = c
//     input.style.color = b
//     botao.style.backgroundColor = d
//     areaBotoes.style.backgroundColor = d
//     botaocalc1.forEach((c) => {
//         c.style.backgroundColor = e
//         c.style.color = i
//     })
//     botaocalDEl.style.backgroundColor = f
//     botaocalcReset.style.backgroundColor = f
//     botaocalcResult.style.backgroundColor = g
//     circleBotao.style.backgroundColor = h 
// }
