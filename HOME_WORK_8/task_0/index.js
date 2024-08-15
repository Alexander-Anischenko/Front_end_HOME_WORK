//1. Преобразование строки в число (Явное)
//javascript
//Копировать код
//let str = "42"; //Строчные данные преобразуются в числовое значение и выводятся в консоль String data is converted to a numeric value and output to the console
//let num = Number(str);
//console.log(num); 

// 2. Преобразование строки в число (Неявное)
// javascript
// Копировать код
//let str = "42"; // То-же самое только неявно, через+ Same thing, but implicitly, via+
//let num = +str;
//console.log(num); 

// 3. Преобразование числа в строку (Явное)
// javascript
// Копировать код
//let num = 123;
//let str = String(num);
//console.log(str); 

// 4. Преобразование числа в строку (Неявное)
// javascript
// Копировать код
// let num = 123;
// let str = num + "";
// console.log(str); 

// 5. Преобразование логического значения в строку (Явное)
// javascript
// Копировать код
// let isTrue = true;
// let str = String(isTrue);
// console.log(str); 

// 6. Преобразование логического значения в строку (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let str = isTrue + "";
// console.log(str); 

// 7. Преобразование массива в строку (Явное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = String(arr);
// console.log(str); 

// 8. Преобразование массива в строку (Неявное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = arr + "";
// console.log(str); 

// 9. Преобразование undefined в строку (Явное)
// javascript
// Копировать код
//let value;
//let str = String(value);
//console.log(str); // undefined

// 10. Преобразование undefined в строку (Неявное)
// javascript
// Копировать код
// let value;
// let str = value + "";
// console.log(str); 

// 11. Преобразование объекта в строку (Явное)
// javascript
// Копировать код
//let obj = { a: 1 };
//let str = String(obj);
//console.log(typeof str); // "[object Object]"

// 12. Преобразование объекта в строку (Неявное)
// javascript
// Копировать код
//let obj = { a: 1 };
//let str = obj + "";
//console.log(typeof str); 

// 13. Преобразование логического значения в число (Явное)
// javascript
// Копировать код
//let isTrue = true;
//let num = Number(isTrue);
//console.log(num); //1

// 14. Преобразование логического значения в число (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let num = +isTrue;
// console.log(num); 

// 15. Преобразование числа в логическое значение (Явное)
// javascript
// Копировать код
//let num = 1;
//let isTrue = Boolean(num);
//console.log(isTrue); //true(0-false)

// 16. Преобразование числа в логическое значение (Неявное)
// javascript
// Копировать код
//let num = 1;
//let isTrue = !!num;
//console.log(isTrue); //!! знак неявного преобразование в логическое значение

// 17. Преобразование null в строку (Явное)
// javascript
// Копировать код
//let value = null;
//let str = String(value);
//console.log(str); //"null"

// 18. Преобразование null в строку (Неявное)
// javascript
// Копировать код
// let value = null;
// let str = value + "";
// console.log(str);  //"null"

// 19. Преобразование NaN в строку (Явное)
// javascript
// Копировать код
//let value = NaN;
//let str = String(value);
//console.log(str); //"NaN"

// 20. Преобразование NaN в строку (Неявное)
// javascript
// Копировать код
// let value = NaN;
// let str = value + "";
// console.log(str);  //"NaN"