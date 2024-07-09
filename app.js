function ajustarFilasTextarea(){
    const textarea = document.getElementById("campo-texto");
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
    const text = document.getElementById("campo-texto").value;
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
    const img = document.getElementById("muñeco");
    const bloque = document.querySelector(".bloque-resultado");
    const contenedor = document.querySelector(".contenedor__aside");
    const palabra = document.getElementById("texto__encriptado");
    const botonCopiar = document.querySelector(".boton__copiar");
    const msg1 = document.getElementById("no__message");
    const msg2 = document.getElementById("no__message2");

    //Desactivando display
    img.style.display = "none";
    msg1.style.display = "none";
    msg2.style.display = "none";

    //adaptando el contenedor__aside
    contenedor.style.maxHeight = "85%";

    bloque.style.textAlign = "left";
    bloque.style.justifyContent = "space-between";
    bloque.style.gap = "1.5em";

    botonCopiar.style.display = "block";
    palabra.style.display = "block";
    palabra.innerHTML = string;
    activarBotonDesencriptar()
}

function activarBotonDesencriptar(){
    let boton = document.getElementById("btn-desencriptar");
    boton.disabled = false;
    boton.style.cursor = "pointer";
}

function buttonDesencriptar(){
    const text = document.getElementById("campo-texto").value;
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
    else{

        const alert = document.getElementById("custom-alert");
        alert.style.backgroundColor = "red";
        showAlert("Ingrese un texto encriptado...");
    }
}

function copiarTexto(){
    const texto = document.getElementById("texto__encriptado").innerText;
    navigator.clipboard.writeText(texto); //Api de clipboard para copiar texto
    showAlert("Texto copiado al portapapeles");
}

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    
    alertMessage.textContent = message;
    alertBox.classList.add('show');

    // Ocultar la alerta después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

