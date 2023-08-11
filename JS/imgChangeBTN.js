document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".styled-link");
    const imageContainer = document.querySelector(".right-side-container-4 img");
  
    imageContainer.src = buttons[0].getAttribute("data-image");
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const newImage = button.getAttribute("data-image");
        imageContainer.src = newImage;
        buttons.forEach(button =>{
            button.classList.remove('btnActiv')
        })
        button.classList.add('btnActiv')
      });
    });
  });