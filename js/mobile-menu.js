document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".btn-burger");
  const closeButton = document.querySelector(".btn-close");
  const navigationMenu = document.querySelector(".navigation");

  burgerButton.addEventListener("click", () => {
    navigationMenu.classList.add("active"); // Добавляем класс для показа меню
  });

  closeButton.addEventListener("click", () => {
    navigationMenu.classList.remove("active"); // Убираем класс для скрытия меню
  });
});
