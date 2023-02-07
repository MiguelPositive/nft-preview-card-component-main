const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");

const handleMouseover = (e) => {
  if (e.target.matches("#img-1")) {
    img1.style.display = "none";

    img2.className += "animate__animated animate__fadeIn";
    img2.style.display = "block";
  }
};

const handleMouseout = (e) => {
  if (e.target.matches("#img-2")) {
    img2.style.display = "none";

    img1.className += "animate__animated animate__fadeIn";
    img1.style.display = "block";
  }
};

document.addEventListener("mouseover", handleMouseover);
document.addEventListener("mouseout", handleMouseout);
