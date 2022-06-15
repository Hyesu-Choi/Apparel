// const popup = document.querySelector(".pop-up");
// const popupClose = document.querySelector(".popup-close");

// popupClose.addEventListener("click", function () {
//   popup.style.display = "none";
// });

// ==========auto slide==========
let currentSlide = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".slide-dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("dots-active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("dots-active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

// document.querySelector(".next").addEventListener("click", next);

// document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

// ========== Load More button==========
const loadmore = document.querySelector("#loadmore");
let currentItems = 5;
loadmore.addEventListener("click", (e) => {
  const elementList = [
    ...document.querySelectorAll(".best-wrapper .best-item"),
  ];
  for (let i = currentItems; i < currentItems + 5; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }
  currentItems += 5;

  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});

// ========== 탭메뉴 ==========
const tabList = document.querySelectorAll(".tab-menu .tab-list li");
for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".tab-btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("tab-on");
    }
    this.parentNode.classList.add("tab-on");
  });
}
