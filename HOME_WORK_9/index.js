//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. Вывести в консоль.

let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.round(Math.random() * 100));
}

let maxNumber = Math.max(...randomNumbers);
let minNumber = Math.min(...randomNumbers)

console.log(randomNumbers);
console.log(maxNumber);
console.log(minNumber);

//Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.

let js_arr = [5, "aple", -20, [872, "Hallo"], 24, 357, "Карапуз", 675, -54];

let firsElement = js_arr.shift();
let toEnd = js_arr.push(firsElement);
console.log(js_arr);

//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

let randomNumbers1 = [];
for(let i = 0; i < 10; i++) {
    randomNumbers1.push(Math.round(Math.random() * 75));
}

let maxNumber1 = Math.max(...randomNumbers1);
let minNumber1 = Math.min(...randomNumbers1);

console.log(randomNumbers1);
console.log(maxNumber1);
console.log(minNumber1);
console.log(maxNumber1 + minNumber1);

// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль
let randomNumbers2 = [];
for (let i = 0; i < 10; i++) {
    randomNumbers2.push(Math.floor(Math.random() * 50) + 1);
    
}
console.log(randomNumbers2);

    let sum = randomNumbers2.reduce(function(total, number) {
        return total + number;
    }, 0)
console.log(sum);

//Разбить строку

// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
// Copy
// на слова и вывести в консоль по одному слову в строке.

let sentence = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";

let words = sentence.split(" ");
console.log(words);
for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
