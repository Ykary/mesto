//получаем контейнер списка мест
const contentList = document.querySelector(".elements__content");
//получаем содержимое шаблона
const placeTemplate = document.querySelector(".place-template").content;

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach(function (element) {
  const placeElement = placeTemplate.cloneNode(true);
  placeElement.querySelector(".elements__photo").src = element.link;
  placeElement.querySelector(".elements__title").textContent = element.name;
  contentList.append(placeElement);
});

let profileContainer = document.querySelector(".profile");
let userName = profileContainer.querySelector(".profile__username");
let userInfo = profileContainer.querySelector(".profile__userinfo");

let popup = document.querySelector(".popup");
let popupEditBtnOpen = document.querySelector(".profile__edit-button"); //кнопка вызова окна профайла
let popupEditProfile = document.querySelector(".popup__type_edit-profile"); //окно профайла
let popupAddContentBtnOpen = document.querySelector(".profile__add-button"); //кнопка добавления контента
let popupAddContent = document.querySelector(".popup__type_add-place");//окно добавления контента
let popupCloseEditBtn = document.querySelector(".popup__close_edit-profile"); //кнопка закрытия окна профайла
let popupCloseAddBtn = document.querySelector(".popup__close_add-place"); //кнопка закрытия окна контента
let formElementProfile = document.querySelector(".popup__form_profile"); //форма попапа профайла
let addNewCardBtn = document.querySelector(".popup__save_content_btn");//кнопка сохранения контента

let nameInput = formElementProfile.querySelector(".popup__input_user_name");//поле формы - имя
let jobInput = formElementProfile.querySelector(".popup__input_user_info"); //поле формы - о себе

//открываем попап
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
}
//слушатель кнопки и заполнение полей формы профайла
popupEditBtnOpen.addEventListener("click", function () {
  nameInput.value = userName.textContent;
  jobInput.value = userInfo.textContent;
  openPopup(popupEditProfile);
});
//слушатель кнопки добавления контента
popupAddContentBtnOpen.addEventListener("click", function () {
  openPopup(popupAddContent);
});
//закрытие попапа
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}
//слушатель кнопки закрытия профайла
popupCloseEditBtn.addEventListener("click", function () {
  closePopup(popupEditProfile);
  nameInput.value = "";
  jobInput.value = "";
});
//слушатель кнопки закрытия контента 
popupCloseAddBtn.addEventListener("click", function () {
  closePopup(popupAddContent);
});



//создаем новую карточку
function createCard(){
//инпуты формы контента
const newPhoto = document.querySelector(".popup__input_new_photo");
const newPlace = document.querySelector(".popup__input_new_place");
  //переменные для функции контента
const newPlaceElement = placeTemplate.cloneNode(true);
newPlaceElement.querySelector(".elements__photo").src = newPhoto.value;
newPlaceElement.querySelector(".elements__title").textContent = 
    newPlace.value;

return newPlaceElement;
};
 ///Не работает добавление карточки
function addCard() {
createCard;
contentList.prepend(newPlaceElement);
};

addNewCard.addEventListener("click", function () {
  addCard(newPhoto, newPlace);
});

// Обработчик «отправки» формы, хотя пока

// она никуда отправляться не будет

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  userName.textContent = nameInput.value; //после того, как появилось два попапа, перестала сохраняться информация в полях профайла

  userInfo.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

// Прикрепляем обработчик к форме:

// он будет следить за событием “submit” - «отправка»

formElementProfile.addEventListener("submit", formSubmitHandler);
