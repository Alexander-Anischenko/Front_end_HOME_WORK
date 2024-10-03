/* Самостоятельное задание:
Сверстать страницу по дизайну: ссылка на дизайн
Когда загружается приложение, видна только форма
Когда пользователь вводит данные во все инпуты и нажимает на кнопку "Создать", появляется карточка с данными пользователя, которые он ввел в форме (см. дизайн)
Если пользователь не ввел данные хотя бы в одном инпуте, то карточка не показывается 
(если карточка была показана ранее, то она должна скрыться)  и должен появляться alert с сообщением с информацией о незаполненных полях */

// Элементы ввода
const mainBox = document.querySelector(".main-container");
const buttonCreate = document.querySelector("#create-button");
const employeeForm = document.querySelector("#form-employee");
/*  */

// элементы вывода
let resultForm = document.querySelector("#form-result");



// Функция для обработки события (Вывода данных)
const clickIteration = (event) => {
    event.preventDefault();
    const blankFields = [];
    let name = employeeForm.name.value.trim();
    let surname = employeeForm.surname.value.trim();
    let age = employeeForm.age.value.trim();
    let jobPosition = employeeForm.job_position.value.trim();

    if (!name) {blankFields.push(" Name")};
    if (!surname) {blankFields.push(" Surname")};
    if (!age) {blankFields.push(" Age")};
    if (!jobPosition) {blankFields.push(" Job Position")};

    if (blankFields.length != 0) {
        resultForm.classList.add("hide");
        alert(`Please fill next fields and submit again: \n ${blankFields}`);
    }

    else{
        resultForm.classList.remove("hide");
        resultForm.children[0].children[1].textContent = name;
        resultForm.children[1].children[1].textContent = surname;
        resultForm.children[2].children[1].textContent = age;
        resultForm.children[3].children[1].textContent = jobPosition;
        employeeForm.reset();
    }

}

employeeForm.addEventListener("submit", clickIteration);
mainBox.addEventListener("click", () => resultForm.classList.add("hide"));
