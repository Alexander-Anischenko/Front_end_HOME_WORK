// Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
const stringArr = ["Hello", "to", "all", "the", "sane", "people", "of", "the", "world"];
console.log("Array length=> " + stringArr.length);
console.log(stringArr[0], stringArr[8]);

// Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
let numArr = [1, 2, 3, 4, 5, 6];

let evenNumArr = [];

for (let i = 0; i < numArr.length; i++) {
    if(numArr[i] % 2 == 0) {
        evenNumArr.push(numArr[i])
    }
}
console.log(evenNumArr);

// Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль. ! Не используя математические методы max и min, только циклы

let numArr1 = [3, 7, 2, 9, 4];

let numMax = numArr1[0];
for (let i = 0; i < numArr1.length; i++) {
    if(numArr1[i] > numMax) {
        numMax = numArr1[i]
    }
    
}
console.log(numMax);

let numMin = numArr1[0];
for (let i = 0; i < numArr1.length; i++) {
    if(numArr1[i] < numMin) {
        numMax = numArr1[i]
    }
    
}

console.log(numMin);
