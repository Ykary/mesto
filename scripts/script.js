//получаем контейнер списка мест
const contentList = document.querySelector(".elements__content");
//получаем содержимое шаблона
const placeTemplate = document.querySelector(".place-template").content;


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const placeElement = placeTemplate.cloneNode(true);

  placeElement.querySelector(".elements__photo").src = element.link;
  placeElement.querySelector(".elements__title").textContent = element.name;

  contentList.append(placeElement);
});


const contentForm = document.querySelector(".popup__form_new_place");
const placeFormInput = document.querySelector(".popup__input_new_place");
const photoLinkFormInput = document.querySelector(".popup__input_new_photo");
const contentFormSubmitBtn = contentForm.querySelector(".popup__save_content_btn");


let profileContainer = document.querySelector(".profile");
let userName = profileContainer.querySelector(".profile__username");
let userInfo = profileContainer.querySelector(".profile__userinfo");
let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".profile__edit-button");
let popupClose = popup.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_user_name");
let jobInput = formElement.querySelector(".popup__input_user_info");

function openPopup() {
  nameInput.value = userName.textContent;
  jobInput.value = userInfo.textContent;
  popup.classList.add("popup_opened");
}

popupOpen.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
  nameInput.value = '';
  jobInput.value = '';
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


