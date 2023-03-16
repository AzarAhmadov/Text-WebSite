const mobilOpen = document.querySelector('.mobil-open');
const openMenu = document.querySelector('.openMenu');
const closeBtn = document.querySelectorAll('.closeBtn');
const openSub = document.querySelector('.open-sub');
const listSecond = document.querySelector('.list-second')
const prevBtn = document.querySelector('.prevBtn')
const absDiv = document.querySelector('.abs-div');
const opensub2 = document.querySelector('.open-sub2');
const listThree = document.querySelector('.list-three');
const absDiv2 = document.querySelector('.abs-div2');

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', () => {
    mobilOpen.classList.remove('active');
  })
}

openMenu.addEventListener('click', () => {
  mobilOpen.classList.add('active');
})