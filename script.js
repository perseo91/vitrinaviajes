import { barcelona,roma,paris,londres } from "./ciudades.js";

let enlaces=document.querySelectorAll('a')
let titulos=document.getElementById("titulo")
let subtitulos=document.getElementById("subtitulo")
let parrafo=document.getElementById("parrafo")
let precio=document.getElementById("precio")
console.log(enlaces)

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(enlace){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        this.classList.add('active')
        let destino=obtenerContenido(this.textContent)
        titulos.innerHTML=destino.titulo
        subtitulos.innerHTML=destino.subtitulo
        parrafo.innerHTML=destino.parrafo
        precio.innerHTML=destino.precio
    })
    
})


function obtenerContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    }
    return contenido[enlace]
}
