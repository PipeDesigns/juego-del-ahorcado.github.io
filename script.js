const imagenes = document.querySelector(".imagenes");
const palabra = document.querySelector(".palabra")
const letrasErradas = document.querySelector(".letrasErradas")
const agregarInput = document.querySelector(".input-text")
const horca = document.querySelector(".bruja")
const primero = document.querySelector(".horca")
var intentos = 7;
var palabraElegida;
const imagen = document.querySelector(".letra");
var textContent;
let nuevoArray = [];
let nuevoArray2 = [];
// let pattern = new RegExp('[A-ZÑ]?'); //patron para letras entre la A y la Z mayusculas y la Ñ
var palabras = 
["HTML",
"CSS",
"ALURA",
"LOGICALK",
"ORACLE",
"BRUJA",]

function escogerPalabra(n){
    random = Math.round(Math.random()*n); //funcion para randomizar un numero entre el 0 y el numero mayor del array
    if (random == palabras.length) {
        random = random - 1; 
    }
    return random;
}
var numeroPalabra = escogerPalabra(palabras.length);   //variable asociada al numero que se randomizó

function agregarBtn(){
    agregar(agregarInput.value);    //función de botón que llama a la función para agregar la palabra
    const url = new URL(window.location);
    // url.searchParams.set('juego','.html');
    // window.history.pushState({}, '', url);  
    history.pushState(null, "", "juego.html");
}

function agregar(value){         // funcion para agregar una nueva palabra en mayuscula
    value = value.toUpperCase();
    palabras.push(value);
    console.log(palabras);
}
palabraAleatoria =  palabras[numeroPalabra].split("");     //posiblemente no funcione y se necesite splitear la palabra
const fragment = document.createDocumentFragment();
const bgrImg = document.createDocumentFragment();
function escoger() {
    for ( const letra of palabraAleatoria) {
        palabraElegida= document.createElement("span");
        palabraElegida.innerHTML += `<img src= "imagenes/LETRA.SVG"><b>${letra}</b>`
        palabraElegida.classList.add(letra);
        fragment.appendChild(palabraElegida);
    }
    // imagen.innerHTML = "imagenes/LETRA.png";
    palabra.appendChild(fragment);
}
escoger();

document.addEventListener("keydown", verificacion) //recoge el evento de la tecla

function verificacion(event){
    key = event.key.toUpperCase();   // Deja solo la letra que se apretó en mayuscula
    const existe = palabraAleatoria.includes(key);
    const repite = nuevoArray.includes(key);
    const repite2 = nuevoArray2.includes(key);
    const repetidas = repite + repite2;
    const abecedario = /^[A-ZÑ]$/.test(key);
    if(abecedario){
        if (repite == false && existe){
            for( const letra of palabraAleatoria){
                if(letra == key){
                    nuevoArray.push(letra);
                    document.querySelector("."+letra).classList.add("aparecer");
                    document.querySelector("."+letra).classList.remove(letra);
                }
            }    
        }
        if (nuevoArray.length == palabraAleatoria.length) {
            alert("FELICIDADES, USTED HA GANADO")
        }
        if(repetidas){
            alert("palabra repetida");
        }
        if(existe == false && repite2 == false){
                nuevoArray2.push(key);
            letrasErradas.innerHTML += (" "+ key);
            intentos = intentos -1;
            bruja(intentos);
        }
    } 
    if(intentos == 0){
        alert("Perdiste la palabra era " + palabraAleatoria.join(""));
    } 
}

function bruja(numero){
    switch (numero){
        case 6:
            console.log(numero);
        horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-3.svg">`
        break;

        case 5:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
        horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-4.svg">`
        break;
        
        case 4:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
            horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-5.svg">`
        break;

        case 3:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
            horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-6.svg">`
        break;
        
        case 2:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
            horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-7.svg">`
        break;
        
        case 1:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
            horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-8.svg">`
        break;
        
        case 0:
            console.log(numero);
            document.querySelector(".horca").classList.add("sencillo")
            document.querySelector(".horca").classList.remove("horca");
            horca.innerHTML += `<img class="horca" src="imagenes/AHORCADO PARTES/PARTE-9.svg">`
        break;
        
        default:
        break;
    }
}