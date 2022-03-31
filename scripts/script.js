//получаем контейнер списка мест
const contentList = document.querySelector(".elements__content");
//получаем содержимое шаблона
const placeTemplate = document.querySelector(".place-template").content;


function likeCard(evt) {
  evt.target.classList.toggle("elements__like_active");
}

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

//начальные карточки

initialCards.forEach(function (element) {
  addCard(element.link, element.name);
    });

  
const profileContainer = document.querySelector(".profile");
const userName = profileContainer.querySelector(".profile__username");
const userInfo = profileContainer.querySelector(".profile__userinfo");
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
const newPhoto = document.querySelector(".popup__input_new_photo"); //поле формы - ссылка на картинку
const newPlace = document.querySelector(".popup__input_new_place"); //поле формы - новое место
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
  });
//слушатель кнопки закрытия контента
popupCloseAddBtn.addEventListener("click", function () {
  
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

//создаем карточку
function createCard(newPhoto, newPlace) {
  //параметры
  //переменные для функции контента
  const newPlaceElement = placeTemplate.cloneNode(true);
  newPlaceElement.querySelector(".elements__photo").src = newPhoto;
  newPlaceElement.querySelector(".elements__title").textContent =
    newPlace;
  newPlaceElement.querySelector(".elements__title").alt =
    newPlace;
  //слушатель кнопки лайк для карточек
  newPlaceElement
    .querySelector(".elements__like")
    .addEventListener("click", likeCard);
  //удаление карточек
  newPlaceElement
    .querySelector(".elements__trash")
    .addEventListener("click", deleteCard);
  //открытие попапа картинки для карточек
  newPlaceElement
    .querySelector(".elements__photo")
    .addEventListener("click", function () {
      imageOpened.src = newPhoto;
      imageCaption.textContent = newPlace;
      imageOpened.alt = newPlace;
      openPopup(popupImage);
    });

  return newPlaceElement;
}



//добавляем новую карточку
function addCard(newPhoto, newPlace) {
  const newPlaceElement = createCard(newPhoto, newPlace);
  contentList.prepend(newPlaceElement);
}
//обработчик формы контента
function formPlaceSubmitHandler(evt) {
  evt.preventDefault();
  
  addCard(newPhoto.value, newPlace.value);
  closePopup(popupAddContent);
  newPlace.value = "";
  newPhoto.value = "";
}
//слушатель кнопки создания контента
formElementPlace.addEventListener("submit", formPlaceSubmitHandler);
