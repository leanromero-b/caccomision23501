const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const ciudad = document.getElementById("ciudad")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const destino = document.getElementById("destino")
const comentario = document.getElementById("textarea")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const inquietud = document.getElementById("inquietud")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(nombre.value.length <3){
   warnings += `El nombre no es válido <br>`
   entrar = true
}
if(apellido.value.length <2){
   warnings += `El apellido no es válido <br>`
    entrar = true
 }
 if(ciudad.value.length <4){
   warnings += `La ciudad no es válida <br>`
    entrar = true
 }
 if(telefono.value.length <10){
   warnings += `El teléfono no es válido <br>`
    entrar = true
 }
 
 if(inquietud.value.length >5){
   warnings += `Escriba al menos 5 palabras en su consulta<br>`
 }
console.log(regexEmail.test(email.value))
if(!regexEmail.test(email.value)){
   warnings += `El email no es válido <br>`
   entrar = true
}
if(entrar){
   parrafo.innerHTML = warnings
}else{parrafo.innerHTML = "Enviado"
}
})
