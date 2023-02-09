const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer (){
  return document.documentElement || document.body;
};

document.addEventListener("scroll", ()
{
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})
const goToTop = (){
    document.body.scrollIntoView({
        behavior: "smooth",
      });
  };
backToTopButton.addEventListener("click", goToTop);

var slider = document.getElementById("slider");
var secciones = slider.getElementsByClassName("seccion2");
var index = 0;

function mostrarSiguiente() {
  secciones[index].style.display = "none";
  index = (index + 1) % secciones.length;
  secciones[index].style.display = "block";
}

setInterval(mostrarSiguiente, 3000);

