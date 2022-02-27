var Mousetrap = require('mousetrap');

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");
var boton9 = document.getElementById("boton9");
var boton0 = document.getElementById("boton0");
var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonActual = document.getElementById("actual");
var botonResultado = document.getElementById("resultado");
var mensajeError = document.getElementById("mensajeError");
var borrarNumero = document.getElementById("borrarNumero");
var reiniciarOperaciones = document.getElementById("reiniciarOperaciones");
var operacionActual = "+";

boton1.addEventListener("click", clickUno);
Mousetrap.bind("1", clickUno);
boton2.addEventListener("click", clickDos);
Mousetrap.bind("2", clickDos);
boton3.addEventListener("click", clickTres);
Mousetrap.bind("3", clickTres);
boton4.addEventListener("click", clickCuatro);
Mousetrap.bind("4", clickCuatro);
boton5.addEventListener("click", clickCinco);
Mousetrap.bind("5", clickCinco);
boton6.addEventListener("click", clickSeis);
Mousetrap.bind("6", clickSeis);
boton7.addEventListener("click", clickSiete);
Mousetrap.bind("7", clickSiete);
boton8.addEventListener("click", clickOcho);
Mousetrap.bind("8", clickOcho);
boton9.addEventListener("click", clickNueve);
Mousetrap.bind("9", clickNueve);
boton0.addEventListener("click", clickCero);
Mousetrap.bind("0", clickCero);
botonSuma.onclick = clickSuma;
Mousetrap.bind("+", clickSuma);
botonResta.onclick = clickResta;
Mousetrap.bind("-", clickResta);
botonProducto.onclick = clickMultiplicacion;
Mousetrap.bind("*", clickMultiplicacion);
botonRazon.onclick = clickDivision;
Mousetrap.bind("/", clickDivision);
inicializarCantidades();

borrarNumero.addEventListener("click", borrarCaracter);
Mousetrap.bind("backspace", borrarCaracter);
reiniciarOperaciones.addEventListener("click", inicializarCantidades);

function clickUno(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "1"));
}

function clickDos(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "2"));
}

function clickTres(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "3"));
}

function clickCuatro(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "4"));
}

function clickCinco(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "5"));
}

function clickSeis(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "6"));
}

function clickSiete(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "7"));
}

function clickOcho(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "8"));
}

function clickNueve(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "9"));
}

function clickCero(){
    limpiarError();
    botonActual.innerHTML = parseInt((botonActual.innerHTML += "0"));
}

function clickSuma(){
    limpiarError();
    let valorActual = parseInt(botonActual.innerHTML);
    let valorResultado = parseInt(botonResultado.innerHTML);
    if(operar(valorActual, valorResultado))
        operacionActual = "+"
}

function clickResta(){
    limpiarError();
    let valorActual = parseInt(botonActual.innerHTML);
    let valorResultado = parseInt(botonResultado.innerHTML);
    if(operar(valorActual, valorResultado))
        operacionActual = "-"
}

function clickMultiplicacion(){
    limpiarError();
    let valorActual = parseInt(botonActual.innerHTML);
    let valorResultado = parseInt(botonResultado.innerHTML);
    if(operar(valorActual, valorResultado))
        operacionActual = "*"
}

function clickDivision(){
    limpiarError();
    let valorActual = parseInt(botonActual.innerHTML);
    let valorResultado = parseInt(botonResultado.innerHTML);
    if(operar(valorActual, valorResultado))
        operacionActual = "/"
}

function operar(valorActual, valorResultado){
    if(operacionActual == "+"){
        botonResultado.innerHTML = valorActual + valorResultado;
        botonActual.innerHTML = "0";
        return true;
    }else if(operacionActual == "-"){
        if(valorResultado > valorActual){
            botonResultado.innerHTML = valorResultado - valorActual;
            botonActual.innerHTML = "0";
            return true;
        }else{
            mensajeError.innerHTML = "No se puede realizar la operacion";
            return false;
        }
    }else if(operacionActual == "*"){
        botonResultado.innerHTML = valorActual * valorResultado;
        botonActual.innerHTML = "0";
        return true;
    }else if(operacionActual == "/"){
        if(valorResultado > valorActual){
            botonResultado.innerHTML = valorResultado / valorActual;
            botonActual.innerHTML = "0";
            return true;
        }else{
            mensajeError.innerHTML = "No se puede realizar la operacion";
            return false;
        }
    }
    return false;
}

function inicializarCantidades(){
    botonActual.innerHTML = "0";
    botonResultado.innerHTML = "0";
    valorActual = 0;
    valorResultado = 0;
    operacionActual = "+";
}

function limpiarError(){
    mensajeError.innerHTML = "";
}

function borrarCaracter(){
    if(botonActual.innerHTML.length > 1){
        botonActual.innerHTML = botonActual.innerHTML.substring(0,botonActual.innerHTML.length-1);
    }else{
        botonActual.innerHTML = "0";
        valorActual = 0;
    }
}
