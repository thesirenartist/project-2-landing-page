
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  const isExpanded = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});


const imageOverlay = document.querySelector("#image-overlay");
const expandedImage = document.querySelector("#expanded-image");
const closeOverlay = document.querySelector("#close-overlay");

// Open enlarged image
document.querySelectorAll("img").forEach(function (image) {
  image.addEventListener("click", function () {
    expandedImage.src = this.src;
    expandedImage.alt = this.alt;
    imageOverlay.classList.add("active");
  });
});

// Close using the X
closeOverlay.addEventListener("click", function () {
  imageOverlay.classList.remove("active");
});

// Close by clicking outside the image
imageOverlay.addEventListener("click", function (event) {
  if (event.target === imageOverlay) {
    imageOverlay.classList.remove("active");
  }
});

// Close using Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    imageOverlay.classList.remove("active");
  }
});
