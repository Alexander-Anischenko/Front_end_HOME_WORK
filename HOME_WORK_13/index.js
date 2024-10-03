// Добавить новые элементы в начало и в конец списка

let newListItem1 = document.createElement("li");// Создание
newListItem1.textContent = "New element to the beginning"; // Контент
let ordList = document.querySelector("ol"); // Точка отссчета
ordList.prepend(newListItem1); // Добавили элемент в начало списка

let newListItem2 = document.createElement("li");
newListItem2.textContent = "New element to the end";
ordList.append(newListItem2) // Добавили элемент в конец списка

// Изменить текст второго элемента списка

let secondList = document.querySelector("#second");
secondList.textContent = "Modified element";

// Удалить третий элемент

let thirdList = document.querySelector("#third");
thirdList.remove();

// Изменить стили по своему усмотрению для четвертого элемента

let fourthList = document.querySelector("#fourth");
fourthList.style.color = "red";
