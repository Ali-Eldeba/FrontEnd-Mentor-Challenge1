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
    body.style.cssText = "max-height: fit-content; overflow: none; ";
  }
}
