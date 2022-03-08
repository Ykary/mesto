let profileContainer = document.querySelector(".profile");
let userName = profileContainer.querySelector(".profile__username");
let userInfo = profileContainer.querySelector(".profile__userinfo");
let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".profile__edit-button");
let popupClose = popup.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_username");
let jobInput = formElement.querySelector(".popup__input_userinfo");

function openPopup() {
  nameInput.value = userName.textContent;
  jobInput.value = userInfo.textContent;
  popup.classList.add("popup_opened");
}

popupOpen.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}

popupClose.addEventListener("click", closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  userName.textContent = nameInput.value;
  userInfo.textContent = jobInput.value;
  closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
