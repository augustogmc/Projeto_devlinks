function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Mobile/Avatar-light.png")
    img.setAttribute("alt", "Foto de Augusto com o fundo amarelo e com óculos")
  } else {
    img.setAttribute("src", "./assets/Mobile/Avatar-dark.png")
    img.setAttribute("alt", "Foto de Augusto com o fundo azul")
  }
}
