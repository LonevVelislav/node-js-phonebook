const dropDownBtn = document.querySelector(".drop-menu");
const allContacts = document.querySelector(".all-contacts-container");
dropDownBtn.addEventListener("click", function (event) {
  event.preventDefault();
  allContacts.classList.toggle("open");
});
