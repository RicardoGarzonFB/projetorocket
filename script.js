function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("Light")) {
    img.setAttribute("src", "/Assets/avatar-light.png")
  } else {
    img.setAttribute("src", "/Assets/Avatar.png")
  }
}

//pegar a tag image
// substituir a imagem
//se tiver light mode adicionar a imagem, adicionar a imagem light
// se tiver sem light mode, manter a imagem normal
