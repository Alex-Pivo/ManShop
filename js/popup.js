let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    body.classList.toggle("lock");
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
  body.classList.toggle("lock");
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});

// document.addEventListener("click", (e) => {
//   // Вешаем обработчик на весь документ
//   if (e.target === popupBgSet) {
//     // Если цель клика - фот, то:
//     popupBgSet.classList.remove("active"); // Убираем активный класс с фона
//     settingsContainer.classList.remove("active");
//   }
//   if (e.target === closeSet) {
//     popupBgSet.classList.remove("active"); // Убираем активный класс с фона
//     settingsContainer.classList.remove("active");
//   }
// });

// let settingsContainer = document.querySelector(".settings__container");
// let settings = document.querySelector(".settings");
// let popupBgSet = document.querySelector(".popup__bgSet");
// let closeSet = document.querySelector(".sms__container");
// let closeSete = document.querySelector(".rassylka__container");

// settings.addEventListener("click", (e) => {
//   e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//   settingsContainer.classList.toggle("active");
//   popupBgSet.classList.toggle("active");
// });

// closeSet.addEventListener("click", (e) => {
//   popupBgSet.classList.remove("active"); // Убираем активный класс с фона
//   settingsContainer.classList.remove("active");
// });

// closeSete.addEventListener("click", (e) => {
//   popupBgSet.classList.remove("active"); // Убираем активный класс с фона
//   settingsContainer.classList.remove("active");
// });

let burger = document.querySelector(".header__span");
let menuHead = document.querySelector(".header__head");
let header = document.querySelector(".header");
let headerH = document.querySelector(".header").clientHeight;
// let headerUp = document.querySelector(".header__up");
let main = document.querySelector(".main");
let headPoint = document.querySelector(".point");
let body = document.querySelector(".body");
let pointSeason = document.querySelector(".pointSeason");
let pointNew = document.querySelector(".pointNew");
let pointBrands = document.querySelector(".pointBrands");
let pointAbout = document.querySelector(".pointAbout");
let pointCab = document.querySelector(".pointCab");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

headPoint.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

pointSeason.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

pointNew.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

pointBrands.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

pointAbout.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

pointCab.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menuHead.classList.toggle("active");
  header.classList.toggle("active");
  // headerUp.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("lock");
});

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll >= headerH) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};
