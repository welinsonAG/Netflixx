

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio =document.querySelector(".audio")

// ligar som //
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
video.muted = false

}

// mostrar o botao //
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
modal.style.display = "block"

}
 function esconderModal(){
    modal.style.display = "none"
 }

// tocar tumdum //

 window.addEventListener("load", tocarAudio)

 function tocarAudio(){
   audio.play()
 }