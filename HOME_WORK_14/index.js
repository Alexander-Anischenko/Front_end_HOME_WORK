/* Создать приложение "Сalc ideal weight", которое должно расчитывать идеальный вес в зависимости от пола и роста

Приложение включает в себя форму со следующими элементами:

Поле "Рост, см":
label - Рост, см*
placeholder - Введите свой рост
тип поля - number
обязательное поле
Селект "Выберете пол":
label - Выберете пол*
опции - Мужской, Женский
тип поля - select
обязательное поле
Кнопка "Рассчитать":
текст кнопки - Рассчитать
Общие требования:

Все лейблы находятся над полями
В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
Стилизуйте на своё усмотрения
формула расчета женского веса: рост - (100 + (рост - 100) : 10)
формула расчета мужского веса: рост - (100 + (рост - 100) : 20)
При клике на кнопку "Расчитать", под кнопкой показывается сообщение "Ваш идеальный вес: 'результат'" */
//Выбор элементов
let buttonResult = document.querySelector(".result-button");
let resultContainer = document.querySelector(".result");
let form = document.querySelector("#form")

//Создание функции для расчета идеального веса
let calculateIdealWeight = (e) => {
e.preventDefault();

let height = document.querySelector("#person-height").value;
let gender = document.querySelector("#person-gender").value
/* console.log(height,gender); */
/* console.log(typeof height); */
let heightNum = Number(height);

let idealWeight = 0;
if (gender === "female") {
    idealWeight = heightNum - (100 + (heightNum - 100) / 10);
    } else if (gender === "male") {
    idealWeight = heightNum - (100 + (heightNum - 100) / 20);
    }

    resultContainer.textContent = `Your ideal weight: ${Math.round(
        idealWeight
        )} kg`;



}

// привязка события к форме
form.addEventListener('submit', calculateIdealWeight)
