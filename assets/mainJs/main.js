let mobilOpen = document.querySelector('.mobil-open');
let openMenu = document.querySelector('.openMenu');
let closeBtn = document.querySelectorAll('.closeBtn');
let openSub = document.querySelector('.open-sub');  
let listSecond = document.querySelector('.list-second')
let prevBtn = document.querySelector('.prevBtn')
let absDiv = document.querySelector('.abs-div');
let opensub2 = document.querySelector('.open-sub2');
let listThree = document.querySelector('.list-three');
let absDiv2 = document.querySelector('.abs-div2');

for (i = 0; i<closeBtn.length; i++){
    closeBtn[i].addEventListener('click', () => {
        mobilOpen.classList.remove('active');
        listThree.classList.remove('active')
        listSecond.classList.remove('active')
    })
}

openMenu.addEventListener('click', () => {
  mobilOpen.classList.add('active');
})

openSub.addEventListener('click', () => {
  listSecond.classList.add('active')
})

absDiv.addEventListener('click', () => {
    listSecond.classList.remove('active')
})

opensub2.addEventListener('click', () => {
  listThree.classList.add('active')
})

absDiv2.addEventListener('click', () => {
    listThree.classList.remove('active')
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300:{
      slidesPerView: 1,
      spaceBetweenSlides: 30
    },
    499: {
        slidesPerView: 2,
        spaceBetweenSlides: 30
    },
    
    999: {
        slidesPerView: 3,
        spaceBetweenSlides: 40
    }
}
});