/* Необходимо создать функцию с названием arrayProcessor, которая будет принимать два параметра, первый параметр - массив, второй параметр - функция callback

Функция arrayProcessor должна выполнять 3 действия:
первое действие - преобразовать каждый элемент, в переданном массиве, в строку, результат должен сохраняться в новом массиве (то есть не мутировать входной массив)
вызывать функцию, которая была передана в параметрах (функция callback будет принимать в качестве параметра преобразованный на первом шаге массив)
возвращать то, что вернула функция callback после её вызова */

let arrayProcessor = (arr, callbackOperation) => {
    let stringArr = [];
    /* let res = 0; */
    for (let i = 0; i < arr.length; i++) {
        /* res = arr[i].toString(); */
        stringArr.push(arr[i].toString() /* res */);
    }
    return callbackOperation(stringArr);
}

/* Чтобы показать пример использования функции arrayProcessor вам нужно:
создать ещё две функции (требования к функциям см. в пункте 3)
вызвать arrayProcessor с каждой из функций по очереди
каждый из 2-х результатов вывести в консоль

Требования к функциям callback
первая функция должна преобразовывать каждый элемент массива в верхний регистр и возвращать новый массив с преобразованными элементами
вторая функция должна возвращать сумму длин всех строк
 */

// 1-я фунгкция

let convertEachToUpper = (arr) => {
    let res = 0;
    let newArr = [];
    for (const element of arr) {
        res = element.toUpperCase()
        newArr.push(res);
    }
    return newArr;
}

// 2-я функция

let getSumOfLengthsAllStr = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].length;
    }
    return res;
}

let exampleArr = [1, 2, 'a', -45, 'hello world!', ['Orange'], ' '];
console.log(exampleArr);

console.log(arrayProcessor(exampleArr, convertEachToUpper));
console.log(arrayProcessor(exampleArr, getSumOfLengthsAllStr));

console.log(exampleArr); //Изначальный массив не мутировал


