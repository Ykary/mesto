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
function likeCard(evt) {
  evt.target.classList.toggle("elements__like_active");
};

function deleteCard(evt) {
  evt.target.parentElement.remove();
};

//начальные карточки

initialCards.forEach(function (element) {
  const placeElement = placeTemplate.cloneNode(true);
  placeElement.querySelector(".elements__photo").src = element.link;
  placeElement.querySelector(".elements__title").textContent = element.name;
  placeElement
    .querySelector(".elements__like")
    .addEventListener("click", likeCard);
  placeElement
    .querySelector(".elements__trash")
    .addEventListener("click", deleteCard);
  placeElement
    .querySelector(".elements__photo")
    .addEventListener("click", function () {
      imageOpened.src = element.link;
      imageCaption.textContent = element.name;
      openPopup(popupImage);
    });

  contentList.append(placeElement);
});

const profileContainer = document.querySelector(".profile");
const userName = profileContainer.querySelector(".profile__username");
const userInfo = profileContainer.querySelector(".profile__userinfo");
const popup = document.querySelector(".popup");
const popupEditBtnOpen = document.querySelector(".profile__edit-button"); //кнопка вызова окна профайла
const popupEditProfile = document.querySelector(".popup-edit-profile"); //окно профайла
const popupAddContentBtnOpen = document.querySelector(".profile__add-button"); //кнопка добавления контента
const popupAddContent = document.querySelector(".popup-add-place"); //окно добавления контента
const popupCloseEditBtn = document.querySelector(".popup__close_edit-profile"); //кнопка закрытия окна профайла
const popupCloseAddBtn = document.querySelector(".popup__close_add-place"); //кнопка закрытия окна контента
const popupCloseImgBtn = document.querySelector(".popup__close_img"); //кнопка закрытия окна картинки
const formElementProfile = document.querySelector(".popup__form_profile"); //форма попапа профайла
const formElementPlace = document.querySelector(".popup__form_new_place"); //форма попапа контента
const addNewCardBtn = document.querySelector(".popup__save_content_btn"); //кнопка сохранения контента
const popupImage = document.querySelector(".popup-open-image"); //окно картинки
const imageOpened = popupImage.querySelector(".popup__image"); //картинка
const imageCaption = popupImage.querySelector(".popup__image-name"); //подпись
const nameInput = formElementProfile.querySelector(".popup__input_user_name"); //поле формы - имя
const jobInput = formElementProfile.querySelector(".popup__input_user_info"); //поле формы - о себе

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
  formElementPlace.querySelector(".popup__input_new_place").value = "";
  formElementPlace.querySelector(".popup__input_new_photo").value = "";
  closePopup(popupAddContent);
});
//слушатель кнопки закрытия картинки
popupCloseImgBtn.addEventListener("click", function () {
  closePopup(popupImage);
});

// Обработчик формы профайла
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  userName.textContent = nameInput.value;

  userInfo.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElementProfile.addEventListener("submit", formSubmitHandler);

//создаем новую карточку
function createCard(newPhoto, newPlace) {
  //параметры
  //переменные для функции контента
  const newPlaceElement = placeTemplate.cloneNode(true);
  newPlaceElement.querySelector(".elements__photo").src = newPhoto.value;
  newPlaceElement.querySelector(".elements__title").textContent =
    newPlace.value;
    //слушатель кнопки лайк для новых карточек
  newPlaceElement
    .querySelector(".elements__like")
    .addEventListener("click", likeCard);
    //удаление новых карточек
  newPlaceElement
    .querySelector(".elements__trash")
    .addEventListener("click", deleteCard);
    //открытие попапа картинки для новых карточек
  newPlaceElement
    .querySelector(".elements__photo")
    .addEventListener("click", function () {
      imageOpened.src = newPhoto.value;
      imageCaption.textContent = newPlace.value;
      openPopup(popupImage);
    });

  return newPlaceElement;
};
//добавляем новую карточку
function addCard(newPhoto, newPlace) {
  const newPlaceElement = createCard(newPhoto, newPlace);
  contentList.prepend(newPlaceElement);
};
//обработчик формы контента
function formPlaceSubmitHandler(evt) {
  evt.preventDefault();
  const newPhoto = document.querySelector(".popup__input_new_photo");
  const newPlace = document.querySelector(".popup__input_new_place");

  addCard(newPhoto, newPlace);
  closePopup(popupAddContent);
};
//слушатель кнопки создания контента
formElementPlace.addEventListener("submit", formPlaceSubmitHandler);
