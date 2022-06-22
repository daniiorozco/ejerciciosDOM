let click = document.querySelector("#botonClick");
click.addEventListener('click',agregarParrafo)

//a. Muestre un alert
/* function clickeaste (){
    alert("me clickeaste");
} */

//b. Cambie el color de fondo del sitio a rojo
/* function colorFondo (){
    document.body.style.background = "red";
} */

//---c
/**
 * recorro un for hasta 6 veces para tener como resultado
 * un color hexadecimal random.
 * @returns codigohas
 */

/* function colorRandom  () {
    let codigo = '0123456789ABCDEF';
    let codigohas= '#';
    for(let i = 0;i<6;i++){
        codigohas = codigohas + codigo[Math.floor(Math.random() * 16)];
        
    }
    return codigohas;
    
}
var color ;
//----d
function randomColor (){
    let colorNuevo = colorRandom();
if(colorNuevo != color){
    document.body.style.background = colorNuevo;
    color = colorNuevo;
}else{
    color = colorRandom();
    document.body.style.background = color;
   console.log("eran iguales");
}
} */

/*----e Alterne el color de fondo entre rojo y azul
 */
/* function AzuloRojo(){
    let colores = ['red','blue'];
    let guardoColor = colores[Math.floor(Math.random() * 2)];

    return guardoColor;
} */

/* var viejoColor;
function fondoAzuloRojo (){
let nuevoColor = AzuloRojo();
if(nuevoColor != viejoColor){

document.body.style.background = nuevoColor;
viejoColor = nuevoColor;
}
} */

//----f
function agregarParrafo (){
    //capturo el selector al cual le voy a agregar los nodos
    const parentElement = document.querySelector("body");
//creo el nodo
let parrafo = document.createElement("p");
//creo el parrafo
let frase = document.createTextNode("Click número N");
//agrego el texto a mi nodo
parrafo.append(frase);
//--agrego el nodo al selector body
//parentElement.append(parrafo);
//--con insertBefore inserto mi parrafo antes del boton
parentElement.insertBefore(parrafo, click);
}

//---2

this.addEventListener("keypress",(e)=>{
   //si la tecla que presione es s desabilito el boton
if (e.key.toUpperCase() === "S"){
    click.disabled = true;

}//si presiono la tecla p vuelve a funcionar el boton
else if(e.key.toUpperCase() === "P"){
click.disabled = false;
}
})




