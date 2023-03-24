
function cambiarColor(){
    document.body.style.backgroundColor="red" 
    /* document.getElementById('boton_color').addEventListener('click', function(){debugger
       /*  document.body.style.backgroundColor= 'red';  
        document.body.style.backgroundColor="red" 
    }); */
}

const botonColor = document.getElementById('boton_color');
botonColor.addEventListener("click",function(){
    document.body.style.backgroundColor="white" 
    document.getElementById('algo').innerText="Nombre y Apellido"
})

const span = document.getElementById('algo');
span.addEventListener("click",function(){
    document.body.style.color="blue" 

})