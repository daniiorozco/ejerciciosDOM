/* evento onclick */
//-----2.
let saludar = document.querySelector('#boton');
saludar.addEventListener('click', () => {
    alert("Hola, estoy practicando los eventos");

})

/* evento onclick */
//-----3.
let cambiaColor = document.querySelector('#fondoColor');
cambiaColor.addEventListener('click', () => {
    document.body.style.background = 'green';
})

/* evento onmouseover */
//-----4.
let imagenArbi = document.querySelector('#imgArbi');
imagenArbi.addEventListener('mouseover', () => {
    console.log("Estoy viendo la imagen");
    

})
/* evento onclick */
//-----5.
let arbi = document.querySelector('#arbi');
arbi.addEventListener('click', () => {
    console.log("Estoy clikeando la imagen");
})

//evento click
//window
//-----6.
let colorearFondo = (event) => {
    document.body.style.background = 'red';
    //de esta forma ubico el mouse y lo imprimo
    //------9.
    console.log("pageX: ", event.pageX,
        "pageY: ", event.pageY)
  
}
this.addEventListener('click', colorearFondo);
//con esto remuevo el listener
//-----7.
//this.removeEventListener('click',colorearFondo)





