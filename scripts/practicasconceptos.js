console.log("hola muy buenas")
 const edadInput = document.getElementById("edadInput");
 console.log(edadInput)

 const mensaje = document.getElementById("mensaje");
  console.log(mensaje);

 function verificarEdad(){


    console.log("Entró a mi funcion verificar edad");

    let edad = edadInput.value;
    console.log(edad)

    

 

  if(edad>= 18){

    console.log("eres mayor de edad")
   console.log(mensaje.textContent)
   mensaje.textContent = "Eres mayor de Edad"
  }

else{

    console.log("eres menor de edad")
    mensaje.textContent ="Eres menor de edad"}


 }