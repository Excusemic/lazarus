const imageBoxes = document.querySelectorAll(".imageBox");
const carouselImage = document.querySelector("#carouselImage");
const carousel = document.querySelector("#carousel");
const nextBtn = document.querySelector("#nextBtn");
const imgDesc = document.querySelector("#imgDesc")
const prevBtn = document.querySelector("#prevBtn");
const exitBtn = document.querySelector("#exitBtn");
const navItems = document.querySelectorAll(".nav-link")
const video = document.querySelector("video")
video.play()
let currentNo = 0;
imageBoxes.forEach(image => {
    image.addEventListener('click', () => {
        currentNo = image.getAttribute("data-no")
        carouselImage.src = image.getAttribute("data")
        imgDesc.innerHTML = ''
        imgDesc.appendChild(image.getElementsByTagName("span")[0].cloneNode(true))
        document.body.style.overflow="hidden"
        carousel.style.display="block";
              setTimeout(() => {
                   carousel.classList.add("showCarousel")
              }, 100)
     
    })

})
navItems.forEach((item) => {
  item.addEventListener('click', () => {
         document.body.style.overflow = "auto"
         carousel.classList.remove("showCarousel")
         setTimeout(() => {
           carousel.style.display = "none"
         }, 500)
  })
})
exitBtn.addEventListener("click", () => {
     document.body.style.overflow = "auto"
      carousel.classList.remove("showCarousel")
      setTimeout(() => {
        carousel.style.display = "none"
      }, 500)

})
nextBtn.addEventListener('click', () => {
    if(currentNo < 24) {
        currentNo = Number(currentNo) + 1
    } else {
        currentNo = 1
    }
    imageBoxes.forEach(image => {
        if(Number(image.getAttribute('data-no')) === Number(currentNo)) {
            carouselImage.src = image.getAttribute("data")
            imgDesc.innerHTML = ""
            imgDesc.appendChild(image.getElementsByTagName("span")[0].cloneNode(true))
        }

    })

})
prevBtn.addEventListener("click", () => {
  if (currentNo > 1) {
    currentNo = Number(currentNo) - 1
  } else {
    currentNo = 24
  }
  imageBoxes.forEach((image) => {
    if (Number(image.getAttribute("data-no")) === Number(currentNo)) {
        carouselImage.src = image.getAttribute("data")
        imgDesc.innerHTML = ""
        imgDesc.appendChild(image.getElementsByTagName("span")[0].cloneNode(true))
    }

  })
 
})