/* 6. Realizar un archivo que se llame comentarios.html que cuente con un formulario con
nombre, apellido y comentario. Al clickear en enviar, se agrega arriba, en una
<section> con los comentarios el nuevo comentario con el formato de: “Juan Perez
dijo el 18/04/16 a las 19:33: COMENTARIO”
 */
"use strict" 
let btnEnviar = document.querySelector("#btnEnviar");
var form = document.querySelector('form');

btnEnviar.addEventListener('click',()=>{
agregarSeccion()
});

function agregarSeccion (){
    let parent = document.querySelector("body");
    let seccion = document.createElement('section');
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
  let coment = document.querySelector("#comentario").value;
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let texto = document.createTextNode(`${nombre} ${apellido} dijo el ${dia}/${mes}/${anio} a las ${hora}:${min}, lo siguiente: ${coment}.`);
    console.log(texto)
    seccion.append(texto);
    parent.insertBefore(seccion,form);
}