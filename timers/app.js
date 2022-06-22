//no sirve con la funcion flecha el evento timer setTimeout
/*  En una página HTML básica, (se puede utilizar la misma de Eventos), que pasado
10 segundos en la página, aparezca un alert que diga “tiempo!”
 */
/* let delay = 10000;
setTimeout(miFuncionUno,delay) */
function miFuncionUno  (){
    alert("Tiempo!!")
}


//Que aparezca un alert que diga “intervalo” cada 5 segundos en la página
/* let delay = 5000;
setInterval(miFuncionInterval,delay) */
function miFuncionInterval (){
    alert("intervalo");
}

// ------Hacer que solamente aparezca una vez sola el alert del ejercicio 1 y 2

let delay = 1000;
setTimeout(funcionTiempo,delay)

function funcionTiempo (){
miFuncionUno()
miFuncionInterval()
}