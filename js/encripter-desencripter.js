/* Expresion regular que describe letras minusculas y espacios  */

var expresion_valida = /^[a-z\s]*$/;    


/* valores para encriptar y desencriptar */


const codigosDesencriptador = ['e', 'i', 'a', 'o', 'u'];           /* códigos que se deben encriptar o desencriptar */
const codigoEncripator = ['enter', 'imes', 'ai', 'ober', 'ufat'];  /* codigos de encriptación  */


/* Esta funcion muestra el resultado de cifrar o descifrar un texto
   y además, limpia el textaera de ingreso, oculta la imagen y textos del cuadro de Descifrado. */

function printResultado (texto) {

    document.getElementById("texto-descrifrado").value = "";
    document.getElementById('texto-crifrado').innerHTML = texto;
    document.getElementById('texto-crifrado').classList.remove('no-visible');
    document.getElementById('texto-crifrado').classList.add('visible');
    document.getElementById('muneco').classList.remove('visible');
    document.getElementById('muneco').classList.add('no-visible');
    document.getElementById('grupo-textos-no-encontrado').classList.remove('visible');
    document.getElementById('grupo-textos-no-encontrado').classList.add('no-visible');
    document.getElementById('boton-copiar').classList.remove('no-visible');
    document.getElementById('boton-copiar').classList.add('visible');

}

/* Esta funcion muestra la aplicación con las imagenes originales cuando no se ingresa ningún 
dato para cifrar */

function printVacio () {

    document.getElementById("texto-descrifrado").value = "";
    document.getElementById('texto-crifrado').classList.remove('visible');
    document.getElementById('texto-crifrado').classList.add('no-visible');
    document.getElementById('muneco').classList.remove('no-visible');
    document.getElementById('muneco').classList.add('visible');
    document.getElementById('grupo-textos-no-encontrado').classList.remove('no-visible');
    document.getElementById('grupo-textos-no-encontrado').classList.add('visible');
    document.getElementById('boton-copiar').classList.remove('visible');
    document.getElementById('boton-copiar').classList.add('no-visible');

}

/* Esta funcióm realiza el cifrado o desifrado del texto */

function transformarTexto (texto, codigoOrigen, codigoDestino){
    
    var textoAtransformar = texto;

    for (var indice = 0; indice < codigoOrigen.length; indice++) {

        if (textoAtransformar.includes(codigoOrigen[indice])) {
            textoAtransformar = textoAtransformar.replaceAll(codigoOrigen[indice],codigoDestino[indice]);
        }
    }

    return (textoAtransformar);

}


/* Esta funcion descifra el texto ingresaso en el textarea "texto-descrifrado". El reemplazo se realiza mediante 
comparación de caracteres. */

function descifrarTexto() {

    /* obtener el valor del textarea "texto-descrifrado" */

    var textoDescifrado = document.getElementById("texto-descrifrado").value;

    if (textoDescifrado == "") {

        printVacio();   /* Limpia la pantalla con las imagenes originales */

    } else  if (expresion_valida.test(textoDescifrado) ) {  /* Se valida si el texto cumple con la expresion regular de minusculas y espacio */

        printResultado(transformarTexto(textoDescifrado, codigoEncripator, codigosDesencriptador));

    }  else {

        /* Activa un PopUp indicando que el texto no cumple con los requisitos */

        alert("El texto no cumple con solo letras minusculas y espacios.");
    }
        
    
}


/* Esta funcion cifra el texto ingresaso en el textarea "texto-descrifrado". El reemplazo se realiza mediante 
comparación de caracteres uno a uno. */


function cifrarTexto() {

    
    var textoCifrado = '';

    /* obtener el valor del textarea "texto-descrifrado" */

    var textoACifrar = document.getElementById("texto-descrifrado").value; 

    if (textoACifrar == "") {     /* Limpia la pantalla con las imagenes originales */
        printVacio();

    } else if (expresion_valida.test(textoACifrar) ) {  /* Se valida si el texto cumple con la expresion regular de minusculas y espacio */


        printResultado(transformarTexto(textoACifrar, codigosDesencriptador, codigoEncripator));

        /* Imprime en codigo descrifrado */
        // printResultado(textoCifrado);

    } else {

         /* Activa un PopUp indicando que el texto no cumple con los requisitos */

        alert("El texto no cumple con solo letras minusculas y espacios.");
    }

}
    

function copiarTexto(){

    /* El boton copiar escribe el texto cifrado en el clipboard para que sea pegado con Ctrl+v */
    
    navigator.clipboard.writeText(document.getElementById('texto-crifrado').value);
    
} 

