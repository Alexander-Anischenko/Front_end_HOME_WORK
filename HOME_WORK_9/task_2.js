//Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.

let js_arr = [5, "aple", -20, [872, "Hallo"], 24, 357, "Карапуз", 675, -54];

let firsElement = js_arr.shift();
let toEnd = js_arr.push(firsElement);
console.log(js_arr);