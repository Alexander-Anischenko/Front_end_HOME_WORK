const a = 17;
const b = 5;
console.log(a > b); // true
console.log(a <= b); //false
console.log(a == b); //false
console.log(a != b); // true

console.log('a' < 'b'); //true потому-что в Unicode a < b: true because in Unicode a < b
console.log('ab' > 'a'); // true a равны, b > чем отсутствие символа; true a is equal, b > than no symbol


console.log('17' > 1); //true при сравнении строки с числом строка автоматически приводится к числовому значению перед сравнением.
// Оператор строгого равенства === проверяет равенство без приведения типов.
console.log(17 === 1); //false 
console.log(17 === 17); //true
console.log(17 === '17'); //false
console.log(17 === true); //false
console.log('0' === ''); //false
console.log(true === false); //false
console.log(true === true); //true
console.log(null === undefined); //false
console.log(false === 0); //false
//При сравнении значений разных типов JavaScript приводит каждое из них к числу.
console.log(17 == '17'); //true
console.log('0' == ''); //false Пустая строка и строка '0' как строки различны
console.log(0 == ''); //true
console.log(null == undefined); //true При нестрогом равенстве ==
//Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
console.log(false == 0); //true
// Значения null и undefined равны == друг другу и не равны любому другому значению.
console.log(undefined == null); //true
console.log(undefined == 0); //false
console.log(null == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false
