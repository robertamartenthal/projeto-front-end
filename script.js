function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  // pegar a tag imagem
  const imagemLight = document.querySelector("#profile img")

   // se tiver light mode, adicionar a imagem light
   if(html.classList.contains("light")) {
        imagemLight.setAttribute("src", "./imagens/assets/avatar-light.png")

   } else {
  // se tiver sem light mode, manter a imagem normal
  imagemLight.setAttribute("src", "./imagens/assets/avatar.png")
  }
}
