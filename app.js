function ajustarFilasTextarea(){
    let textarea = document.getElementById("campo-texto");
    if (window.innerWidth <= 768 && window.innerWidth > 376)
        textarea.rows = 18;
    else if (window.innerWidth <= 376)
        textarea.rows = 15;
    else
        textarea.rows = 12;
}

document.addEventListener("DOMContentLoaded",ajustarFilasTextarea);
window.addEventListener('resize',ajustarFilasTextarea);

function buttonEncriptar(){
    let text = document.getElementById("campo-texto").value;
    let i = 0;
    let string = "";
    while(i < text.length){
        if (text[i] == "a")
            string += "ai";
        else if (text[i] == "e")
            string += "enter";
        else if (text[i] == "i")
            string += "imes";
        else if (text[i] == "o")
            string += "ober";
        else if (text[i] == "u")
            string += "ufat";
        else
            string += text[i];
        i++;
    }
    if (text !== "")
        desactivarDisplay(string);
};

function desactivarDisplay(string){
    let img = document.getElementById("muñeco");
    let bloque = document.querySelector(".bloque-resultado");
    let contenedor = document.querySelector(".contenedor__aside");
    let palabra = document.getElementById("texto__encriptado");
    let msg1 = document.getElementById("no__message");
    let msg2 = document.getElementById("no__message2");

    //Desactivando display
    img.style.display = "none";
    msg1.style.display = "none";
    msg2.style.display = "none";
    //desactivar el flex direction y el text-align
    bloque.style.flexDirection = "row";
    bloque.style.textAlign = "left";


    //desactivar el contenedor__Aside el align-self
    contenedor.style.alignSelf = "flex-start";

    palabra.innerHTML = string;
    activarBotonDesencriptar()
}

function activarBotonDesencriptar(){
    let boton = document.getElementById("btn-desencriptar");
    boton.disabled = false;
    boton.style.cursor = "pointer";
}

function buttonDesencriptar(){
    let text = document.getElementById("campo-texto").value;
    let string = "";

    for (let i = 0; i < text.length;){
        if (text.substring(i,i+2) === "ai"){
            string += "a";
            i+=2;
            continue
        } else if (text.substring(i,i+5) === "enter"){
            string += "e";
            i+=5;
            continue
        } else if (text.substring(i,i+4) === "imes"){
            string += "i";
            i+=4;
            continue
        } else if (text.substring(i,i+4) === "ober"){
            string += "o";
            i+=4;
            continue
        } else if (text.substring(i,i+4) === "ufat"){
            string += "u";
            i+=4;
            continue
        } else
            string += text[i];
            i+=1;
    }
    mostrarTextoDesencriptado(string);
    
}

function mostrarTextoDesencriptado(string){
    let palabra = document.getElementById("texto__encriptado");
    if (string != "")
        palabra.innerHTML = string;
    else
        alert("Ingrese un texto encriptado...");
}

