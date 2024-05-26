console.log("Priyanka Rampuria Portfolio");

function menuToggle() {
  const mobile = document.querySelector(".mobile");
  mobile.classList.toggle("opned");
  var x = document.getElementById("menu-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
