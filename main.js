
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
    let texto = document.querySelector(".encriptador__salida__resultado").textContent;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado");
    return;
}


function encriptarTexto() {
    let texto = document.querySelector(".encriptador__entrada__input").value;
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
        asignarTextoElemento(".encriptador__salida", `<p class="encriptador__salida__resultado">${textoEncriptado}</p>
            <button class="encriptador__salida__copiar" onclick="copiarTexto();">Copiar</button>`);
        limpiarInput('.encriptador__entrada__input');
        return;
    }

}

function desencriptarTexto() {
    let texto = document.querySelector(".encriptador__entrada__input").value;
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
        asignarTextoElemento(".encriptador__salida", `<p class="encriptador__salida__resultado">${textoDesencriptado}</p>
            <button class="encriptador__salida__copiar" onclick="copiarTexto();">Copiar</button>`);
        limpiarInput('.encriptador__entrada__input');
        return;
    }
}