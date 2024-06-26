function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fot o a.jfif")
  } else {
    img.setAttribute("src", "./ab9356f8-9d31-4e3c-b3a1-6937ec9e6edc.jpg")
  }
}
