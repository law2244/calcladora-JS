let buttoens = document.querySelectorAll(".botaocalc1") 

let input = document.querySelector(".inputCalc") as HTMLInputElement

input.disabled = true

buttoens.forEach((c) => {
    c.addEventListener("click" , () => {
        input.value += c.getAttribute("data")
    })
})

let result = document.querySelector(".botaocalcResult") as HTMLElement

result.addEventListener("click" , () => {
    input.value = eval(input.value)
    if(eval(input.value) == undefined){
        input.value = ""
    }
})

let reset = document.querySelector(".botaocalcReset") as  HTMLElement

reset.addEventListener("click" , () => {
    input.value = ""
    
})

let del = document.querySelector(".botaocalDEl") as  HTMLElement

del.addEventListener("click" , () => {
    let cacter = input.value.substring(0 , input.value.length -1)
    input.value = cacter
    
})

const circle = document.querySelector(".circle") as  HTMLElement

const botao = document.querySelector(".botao") as  HTMLElement

let areaBotoes = document.querySelector(".areaBotoes") as  HTMLElement

let body = document.querySelector("body") as  HTMLElement

circle.addEventListener("click" , () => {
    if(botao.getAttribute("data") === "tema1" ){
        botao.style.justifyContent = "center"

        botao.setAttribute("data" , "tema2")

        areaBotoes.setAttribute("data" , "tema2")

        body.setAttribute("data" , "tema2Body")

        return
    }
    if(botao.getAttribute("data") === "tema2" ){
        botao.style.justifyContent = "flex-end"

        botao.setAttribute("data" , "tema3")

        areaBotoes.setAttribute("data" , "tema3")

        body.setAttribute("data" , "tema3Body")

        return
    }
    if(botao.getAttribute("data") === "tema3" ){
        botao.style.justifyContent = "flex-start"

        botao.setAttribute("data" , "tema1")

        areaBotoes.setAttribute("data" , "tema1")
        
        body.setAttribute("data" , "tema1Body")

        return
    }
})

