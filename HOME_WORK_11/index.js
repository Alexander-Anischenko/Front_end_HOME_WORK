//У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом) и вывода результата в консоль.
// Вызовите функцию для демонстрации результата

let numArr = [2, 4, 6, 8, 10];
function doublingArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}

doublingArr(numArr);
console.log("<============================================>");


// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки.
// Для отображения результа работы функции, вызовите её три раза с различными параметрами, 
//результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

function returnFirsCharQuantity(str, n) {
    let firstChar = str.slice(0, n);
    return firstChar;
    
}
let  hello = returnFirsCharQuantity("Hello world!", 8);
console.log(hello);

let happy = returnFirsCharQuantity("i am happy!", 10);
console.log(happy);

let life = returnFirsCharQuantity("Life is wonderful!", 5);
console.log(life);
console.log("<============================================>");

// У вас есть массив чисел [10, 15, 20, 25, 30]. 
// Напишите функцию для вычисления среднего значения элементов массива (массив нужно передать аргументом) и вывода результата в консоль. 
// Вызовите функцию для демонстрации результата

let arrNum = [10, 15, 20, 25, 30];
console.log(arrNum);


function calcAverage (arr) {
    let averageValue = 0
    for (let i = 0; i < arr.length; i++) {
        averageValue +=arr[i] / arr.length;
    }
    console.log('Average value: ' + averageValue);
}

calcAverage(arrNum);


