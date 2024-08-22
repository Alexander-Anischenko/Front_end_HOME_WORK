//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

let randomNumbers1 = [];
for(let i = 0; i < 10; i++) {
    randomNumbers1.push(Math.floor(Math.random() * 75) + 1);
}

let maxNumber1 = Math.max(...randomNumbers1);
let minNumber1 = Math.min(...randomNumbers1);

console.log(randomNumbers1);
console.log(maxNumber1);
console.log(minNumber1);
console.log(maxNumber1 + minNumber1);



