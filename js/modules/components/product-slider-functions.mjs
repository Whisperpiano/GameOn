export function productSliderFunctions() {
    createProductPageSlider();
    nextButton();
    previousButton();
  }
  function createProductPageSlider() {
    const mainImage = document.querySelector("#main-picture");
    const images = document.querySelectorAll(
      "#small-picture-1, #small-picture-2, #small-picture-3, #small-picture-4"
    );
  
    images.forEach((image) => {
      image.addEventListener("click", () => {
        mainImage.src = image.src;
        mainImage.alt = image.alt;
      });
    });
  }
  
  function nextButton() {
    const nextButton = document.querySelector("#next-btn");
    const mainImage = document.querySelector("#main-picture");
    const images = document.querySelectorAll(
      "#small-picture-1, #small-picture-2, #small-picture-3, #small-picture-4"
    );
    nextButton.addEventListener("click", () => {
      for (let i = 0; i < images.length; i++) {
        if (mainImage.src === images[i].src) {
          if (i === images.length - 1) {
            mainImage.src = images[0].src;
            break;
          } else {
            mainImage.src = images[i + 1].src;
            break;
          }
        }
      }
    });
  }
  
  function previousButton() {
    const previousButton = document.querySelector("#prev-btn");
    const mainImage = document.querySelector("#main-picture");
    const images = document.querySelectorAll(
      "#small-picture-1, #small-picture-2, #small-picture-3, #small-picture-4"
    );
    previousButton.addEventListener("click", () => {
      for (let i = 0; i < images.length; i++) {
        if (mainImage.src === images[i].src) {
          if (i === 0) {
            mainImage.src = images[images.length - 1].src;
            break;
          } else {
            mainImage.src = images[i - 1].src;
            break;
          }
        }
      }
    });
  }
  
  previousButton();