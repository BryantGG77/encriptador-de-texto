



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarInput(elemento) {
    document.querySelector(elemento).value = "";
    return;
}

function copiarTexto() {
    let texto = document.querySelector(".salida-btn").textContent;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado");
    return;
}


function encriptarTexto() {
    let texto = document.querySelector(".input").value;
    if (texto == "") {
        alert("No hay texto para encriptar");
    } else {
        let textoMinusculas = texto.toLowerCase();
        let textoEncriptado = textoMinusculas
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        asignarTextoElemento(".output", `<div class="container-text-output p-0">
            <p class="salida-btn">${textoEncriptado}</p>
            </p>
            </div>
            <button onclick="copiarTexto();" class="btn-copiar">Copiar</button>`);
        limpiarInput('.input');
        return;
    }

}

function desencriptarTexto() {
    let texto = document.querySelector(".input").value;
    if (texto == "") {
        alert("No hay texto para desencriptar");
    } else {
        let textoMinusculas = texto.toLowerCase();
        let textoDesencriptado = textoMinusculas
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        asignarTextoElemento(".output", `<div class="container-text-output p-0">
            <p class="salida-btn">${textoDesencriptado}</p>
            </p>
            </div>
            <button onclick="copiarTexto();" class="btn-copiar">Copiar</button>`);
        limpiarInput('.input');
        return;
    }
}