
//evento que al hacer click no se envie poniendo preventDefault
let boton = document.querySelector('#boton');

boton.addEventListener('click',(e)=>{
    alert("No se puede realizar este envío");
    e.preventDefault();

})