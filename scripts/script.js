let profileContainer = document.querySelector(".profile");
let userName = profileContainer.querySelector(".profile__username");
let userInfo = profileContainer.querySelector(".profile__userinfo");
let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__close");
let saveProfile = popup.querySelector(".popup__save");

function togglePopup() {
  popup.classList.toggle("popup__opened");
}

openPopup.addEventListener("click", togglePopup);

closePopup.addEventListener("click", togglePopup);

saveProfile.addEventListener("click", togglePopup);


let formElement = document.querySelector(".popup__form");

formElement.querySelector(".popup__input_username").value =
  userName.textContent;
formElement.querySelector(".popup__input_userinfo").value =
  userInfo.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  let nameInput = formElement.querySelector(".popup__input_username");
  let jobInput = formElement.querySelector(".popup__input_userinfo");

  userName.textContent = nameInput.value;
  userInfo.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
