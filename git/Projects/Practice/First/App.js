var img;

img = document.querySelector(".img1");

img.addEventListener("click", enlargeImg);

function enlargeImg() {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 1.5s ease";
    img.style.width = value ('400px');
    img.style.height = value ('auto');
}

function resetImg() {  
    img.style.width = "40%"; 
    img.style.height = "auto"; 
    img.style.transition = "width 0.5s ease";;
  } 