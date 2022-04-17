/*
  Looping on All of The images in The Website
*/
// Strting the Loop
for (i = 0; i < document.images.length; i++) {
  // images that have "draggable" Attribute
  if (document.images[i].draggable === "") {
    // images that have "draggable" Attribute and its Value is Empty
    document.images[i].setAttribute("draggable", "false");
  } else {
    // Images Does not Have "draggable" Attribute
    document.images[i].setAttribute("draggable", "false");
  }
}

let body = document.querySelector("body");
let barButton = document.querySelector(".bar");
let closeButton = document.querySelector(".close");
let mobileHeader = document.querySelector(".mobile-header");

barButton.addEventListener("click", function () {
  barButton.style.cssText = "display: none !important;";
  closeButton.style.cssText = "display: block !important;";
  mobileHeader.style.cssText = "display: block !important;";
  // Scrolling to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

closeButton.addEventListener("click", function () {
  barButton.style.cssText = "display: block !important;";
  closeButton.style.cssText = "display: none !important;";
  mobileHeader.style.cssText = "display: none !important;";
});

// Prevent Scrolling
setInterval(checkScroll, 1);
function checkScroll() {
  if (mobileHeader.style.display == "block") {
    body.style.cssText = "max-height: 100vh; overflow: hidden; ";
  } else {
    body.style.cssText = "max-height: fit-content; overflow: none;";
  }
}

// Displaying none on resize
window.onresize = function () {
  if (window.innerWidth >= 768) {
    closeButton.style.cssText = "display: none !important;";
    barButton.style.cssText = "display: none !important;";
    mobileHeader.style.cssText = "display: none !important;";
  } else {
    barButton.style.cssText = "display: block !important;";
    closeButton.style.cssText = "display: none !important;";
    mobileHeader.style.cssText = "display: none !important;";
  }
};
