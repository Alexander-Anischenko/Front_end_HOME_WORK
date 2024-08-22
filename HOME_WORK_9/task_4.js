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




