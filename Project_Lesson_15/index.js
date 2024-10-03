/* Самостоятельное задание:
Сверстать страницу по дизайну: ссылка на дизайн
Когда загружается приложение, видна только форма
Когда пользователь вводит данные во все инпуты и нажимает на кнопку "Создать", появляется карточка с данными пользователя, которые он ввел в форме (см. дизайн)
Если пользователь не ввел данные хотя бы в одном инпуте, то карточка не показывается 
(если карточка была показана ранее, то она должна скрыться)  и должен появляться alert с сообщением с информацией о незаполненных полях */

// Элементы ввода
let buttonCreate = document.querySelector("#create-button"); // Кнопка "Create"
let employeeForm = document.querySelector("#form-employee"); // Форма
let mainBox = document.querySelector(".main-container"); // Основной контейнер

// элементы вывода
let resultForm = document.querySelector("#form-result");
let employeeNameOut = document.querySelector('#employee-name-output');
let employeeSurnameOut = document.querySelector('#employee-surname-output');
let employeeAgeOut = document.querySelector('#employee-age-output');
let employeeJobPositionOut = document.querySelector('#employee-position-output');

// Функция для обработки события (Вывода данных)

let showResultForm = (event) => {
event.preventDefault(); // Предотвращаем отправку формы по умолчанию
// Массив для хранения незаполненных полей
let blankFields = [];
// Получаем значения полей формы и убираем лишние пробелы с помощью метода trim()
let name = employeeForm.name.value.trim();
let surname = employeeForm.surname.value.trim();
let age = employeeForm.age.value.trim();
let jobPosition = employeeForm.job_position.value.trim();

// Проверяем, какие поля не заполнены, и добавляем их в массив blankFields
if(! name) {blankFields.push(" Name")};
if(! surname) {blankFields.push(" Surname")};
if(! age) {blankFields.push(" Age")};
if(! jobPosition) {blankFields.push(" Job position")};

// Если есть незаполненные поля, скрываем результат и выводим alert
if(blankFields.length != 0) {
    resultForm.classList.add("hide"); // Скрываем блок результата
    // Выводим предупреждение с незаполненными полями
    alert(` Please fill next fields and submit again \n${blankFields}`);
} else {
    // Если все поля заполнены, показываем блок результата и заполняем его данными
    resultForm.classList.remove("hide")
    // Заполняем блок результата значениями из формы
    // Самый тяжело читаемый вариант
    /* resultForm.children[0].children[1].textContent = name;
    resultForm.children[1].children[1].textContent = surname;
    resultForm.children[2].children[1].textContent = age;
    resultForm.children[3].children[1].textContent = jobPosition; */

    // Более читаемая форма
    employeeNameOut.textContent = name;
    employeeSurnameOut.textContent = surname;
    employeeAgeOut.textContent = age;
    employeeJobPositionOut.textContent = jobPosition;

    // Тоже читаемая форма, но без создания переменных
    /* document.querySelector('#employee-name-output').textContent = name;
    document.querySelector('#employee-surname-output').textContent = surname;
    document.querySelector('#employee-age-output').textContent = age;
    document.querySelector('#employee-position-output').textContent = jobPosition; */

     // Очищаем форму
    employeeForm.reset();
}
}

// Добавляем обработчик события на форму (вызывается при отправке формы)
employeeForm.addEventListener("submit", showResultForm);
// Добавляем обработчик события на основной контейнер (скрытие блока результата при клике)
mainBox.addEventListener("click", () => resultForm.classList.add("hide"))
