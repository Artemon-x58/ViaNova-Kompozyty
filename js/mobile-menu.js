document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".btn-burger");
  const closeButton = document.querySelector(".btn-close");
  const navigationMenu = document.querySelector(".navigation");
  const body = document.body;

  burgerButton.addEventListener("click", () => {
    navigationMenu.classList.add("active"); // Добавляем класс для показа меню
    body.classList.add("no-scroll");
  });

  closeButton.addEventListener("click", () => {
    navigationMenu.classList.remove("active"); // Убираем класс для скрытия меню
    body.classList.remove("no-scroll");
  });
});
