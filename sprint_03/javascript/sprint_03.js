"use strict";
// Task 01
// По нажатию кнопки .b-1 запускается функция f01. Функция должна присвоить переменной s_1 введенный в input.i-1 текст. Тип переменной s_1 задайте самостоятельно. Для проверки выведите s_1 в консоль.
// тут объявляете s_1
let s_1;
function f01() {
    s_1 = document.querySelector(".i-1").value;
    console.log(s_1);
}
document.querySelector('.b-1').addEventListener('click', f01);
// Task 02 
// По нажатию кнопки .b-2 запускается функция f02. Функция должна присвоить переменной res_2  ЧИСЛО введенное в input.i-2. Тип переменной res_2 задайте самостоятельно. Для проверки выведите res_2 в консоль.
// тут объявляете res_2
let res_2;
function f02() {
    res_2 = +document.querySelector(".i-2").value;
    console.log(res_2);
}
document.querySelector('.b-2').addEventListener('click', f02);
// Task 03
// Созданы две переменные n_31 и n_31. Напишите функцию f03, которая присваивает в переменную max_3 большее из данных двух переменных значение. Для проверки выведите max в консоль.
let n_31 = 22;
let n_32 = 44;
// тут объявляем max_3
let max_3;
function f03() {
    if (n_31 > n_32)
        max_3 = n_31;
    else
        max_3 = n_32;
    console.log(max_3);
}
document.querySelector('.b-3').addEventListener('click', f03);
// Task 04
// Напишите функцию, f04, которая получает два ЧИСЛА из input.i-41 и input.i-41 и меньшее присваивает в переменную min_4. Тип данных min_4 определите самостоятельно. Для проверки выведите min_4 в консоль.
// тут объявляем min_4
let min_4;
let n_41 = +document.querySelector(".i-41").value;
let n_42 = Number(document.querySelector(".i-42").value);
function f04() {
    n_41 < n_42 ? min_4 = n_41 : min_4 = n_42;
    console.log(min_4);
}
document.querySelector('.b-4').addEventListener('click', f04);
// Task 05
// Напишите функцию, f05, которая проверяет что в input.i-51 и input.i-52 введены числа и при положительном результате проверки в переменную sum_5 кладет результат - сумму данных чисел, при отрицательном результате в переменную error_5 (начальное значение всегда false) кладется значение true. Типы данных определите самостоятельно. Выведите переменные в консоль. 
// тут объявляем sum_5
let sum_5;
// тут объявляем error_5
let error_5 = false;
let n_51 = document.querySelector(".i-51");
let n_52 = document.querySelector(".i-52");
function f05() {
    if (!isNaN(+n_51.value) && !isNaN(+n_52.value)) {
        sum_5 = Number(n_51.value) + Number(n_52.value);
        console.log(sum_5);
    }
    else {
        error_5 = true;
        console.log(error_5);
    }
}
document.querySelector('.b-5').addEventListener('click', f05);
// Task 06
// Напишите функцию, f06, что проверяет что в input.i-61 и input.i-62 введены строки, которые можно привести к числам. При положительном результате проверки в переменную sum_6 кладет результат - сумму данных чисел, а в переменную error_6 кладем false, при отрицательном результате в переменную error_6 кладется значение true, а в переменную sum_6 кладем 0. Типы данных определите самостоятельно. Переменную sum_6 выведите в .out-6. Переменную error_6 в консоль.
// тут объявляем sum_6
let sum_6;
// тут объявляем error_6
let error_6;
let n_61 = parseInt(document.querySelector(".i-61").value);
let n_62 = parseInt(document.querySelector(".i-62").value);
let r_61 = document.querySelector(".out-6");
function f06() {
    if (!isNaN(n_61) && !isNaN(n_62)) {
        sum_6 = n_61 + n_62;
        error_6 = false;
        r_61.textContent = String(sum_6);
        console.log(error_6);
    }
    else {
        sum_6 = 0;
        error_6 = true;
        r_61.textContent = String(sum_6);
        console.log(error_6);
    }
}
document.querySelector('.b-6').addEventListener('click', f06);
// Task 07
// Функция f07 получает строки из input.i-71 и input.i-72. В переменную max_7 функция должна записать большую из двух строк. Прямым сравнением. Тип переменной max_7 задайте самостоятельно. Выведите переменную max_7 в .out-7.
// тут объявляем max_7
let max_7 = document.querySelector(".out-7");
let n_71 = document.querySelector(".i-71").value;
let n_72 = document.querySelector(".i-72").value;
function f07() {
    if (n_71.length > n_72.length)
        max_7.textContent = n_71;
    else
        max_7.textContent = n_72;
}
document.querySelector('.b-7').addEventListener('click', f07);
// Task 08
// Функция f08 должна прочитать выбранное value из select.s-8 и записать значение в переменную val_8. Тип val_8 определите самостоятельно. Выведите val_8 в .out-8. 
// тут объявляем val_8
let val_8;
function f08() {
    let s_81 = document.querySelector(".s-8").value;
    let r_81 = document.querySelector(".out-8");
    switch (s_81) {
        case "one": {
            val_8 = 1;
            r_81.textContent = String(val_8);
            break;
        }
        case "two": {
            val_8 = 2;
            r_81.textContent = String(val_8);
            break;
        }
        case "three": {
            val_8 = 3;
            r_81.textContent = String(val_8);
            break;
        }
        default: r_81.textContent = "выберите ответ";
    }
}
document.querySelector('.b-8').addEventListener('click', f08);
// Task 09
// Создайте переменную val_9 и пропишите ей любое целое число от 2 до 6. Тип данных задайте самостоятельно. Напишите функцию f09, которая будучи запущена сделает option внутри select.s-9 с таким value selected. Значение val_9 выводите в .out-9.
// тут объявляем val_9
let val_9 = 4;
function f09() {
    document.querySelector(".s-9").value = String(val_9);
    document.querySelector(".out-9").textContent = String(val_9);
}
document.querySelector('.b-9').addEventListener('click', f09);
// //Task 10
// Создайте переменную res_10 тип boolean, значение false. При изменении состояния checkbox.ch-10 изменяйте содержимое переменной res_10. Если checkbox выбран записывайте true, если нет - false. Выводите res_10 в .out-10.
// тут объявляем res_10
let res_10 = false;
function f10() {
    let r_10 = document.querySelector(".ch-10");
    let r_11 = document.querySelector(".out-10");
    if (r_10.checked) {
        res_10 = true;
        r_11.textContent = String(res_10);
    }
    else {
        res_10 = false;
        r_11.textContent = String(res_10);
    }
}
document.querySelector('.ch-10').addEventListener('change', f10);
// // Task 11
// Создайте переменную res_11 тип number значение 0. При изменении состояния checkbox.ch-11 изменяйте содержимое переменной res_11. Если checkbox выбран записывайте в res_11 значение value, если нет - 0. Выводите res_11 в .out-11.
// тут объявляем res_11
let res_11 = 0;
function f11() {
    let r_12 = document.querySelector(".ch-11");
    let r_13 = document.querySelector(".out-11");
    if (r_12.checked) {
        res_11 = Number(r_12.value);
        r_13.textContent = String(res_11);
    }
    else {
        res_11 = 0;
        r_13.textContent = String(res_11);
    }
}
document.querySelector('.ch-11').addEventListener('change', f11);
// // Task 12
// Создайте переменную res_12 тип number значение 0. При нажатии кнопки .b-12 функция должна читать содержимое переменной res_12 и если она равна 1 то делать checkbox.ch-12 состояние checked, если равна нулю сбрасывать состояние checked. 
// тут объявляем res_12
let res_12 = 0;
function f12() {
    let r_14 = document.querySelector(".ch-12");
    if (res_12 === 1)
        r_14.checked = true;
    else
        r_14.checked = false;
}
document.querySelector('.b-12').addEventListener('click', f12);
// Task 13
// Функция f13 получает из input.i-13 число и выводит в .out-13 строку вида 43210 т.е. от введенного числа до нуля. Если ввели 5, то вывод должен быть 543210. 
function f13() {
    let r_15 = parseInt(document.querySelector(".i-13").value);
    let res_133 = document.querySelector(".out-13");
    let arr_1 = [];
    for (let i = 0; i <= r_15; i++) {
        arr_1.push(i);
    }
    let res_134 = String(arr_1);
    let res_135 = res_134.split(",").reverse().join("");
    res_133.textContent = res_135;
}
document.querySelector('.b-13').addEventListener('click', f13);
// Task 14
// Функция f14 получает из input.i-14 число и присваивает переменной res_14 true если введенное число является четным, false если не четным. Переменную res_14 выведите в .out-14.
// тут объявляем res_14
let res_14;
function f14() {
    let res_144 = parseInt(document.querySelector(".i-14").value);
    let res_145 = document.querySelector(".out-14");
    if (res_144 % 2 == 0) {
        res_14 = true;
        res_145.textContent = String(res_14);
    }
    else {
        res_14 = false;
        res_145.textContent = String(res_14);
    }
}
document.querySelector('.b-14').addEventListener('click', f14);
// Task 15
// Создайте переменную s_15 со значением'cdcdbdcsd'. И переменную res_15. Функция должна считать сколько в переменной s_15 символов 'c'. Количество присваивать в переменную res_15. Функция должна выводить s_15 в .out-151 и res_15 в .out-152.
// тут объявляем s_15
let s_15 = "cdcdbdcsd";
// тут объявляем res_15
let res_15 = [];
function f15() {
    let res_155 = document.querySelector(".out-151");
    let res_156 = document.querySelector(".out-152");
    for (let i = 0; i <= s_15.length; i++) {
        if (s_15[i] === "c") {
            res_15.push(s_15[i]);
        }
    }
    res_155.textContent = s_15;
    res_156.textContent = String(res_15.length);
}
document.querySelector('.b-15').addEventListener('click', f15);
// Task 16
// Создан элемент input.i-16. При вводе символов в него выводите количество введенных символов в переменную res_16. Выводите переменную res_16 в .out-16. 
// тут объявляем res_16
let res_16;
function f16() {
    let res_166 = document.querySelector(".i-16").value;
    res_16 = res_166.length;
    document.querySelector(".out-16").textContent = String(res_16);
}
document.querySelector('.i-16').addEventListener('input', f16);
// Task 17
// Создайте переменную res_17 тип boolean значение false. Создан элемент input.i-17. Функция при нажатии кнопки читает содержимое res_17 и если значение false то делает input.i-17 disabled. Если true - enabled.
// тут объявляем res_17
let res_17 = true;
function f17() {
    let res_177 = document.querySelector(".i-17");
    if (res_17 === true)
        res_177.disabled = true;
    else
        res_177.disabled = false;
}
document.querySelector('.b-17').addEventListener('click', f17);
// Task 18
// Создайте строку переменную s_18 равную '10000'. Создайте переменную count_18 равную 0.  При нажатии кнопки .b-18 запускается функция f18. Функция прибавляет единицу к count_18, а потом s_18[count_18] делает равной единице. Остальные символы строки 0. 
// Т.е. когда count = 0 строка выглядит '10000'
// Т.е. когда count = 1 строка выглядит '01000'
// Т.е. когда count = 2 строка выглядит '00100'
// Т.е. когда count = 3 строка выглядит '00010'
// Т.е. когда count = 4 строка выглядит '00001'
// Выведите count_18 в .out-181 и s_18 в .out-182
// тут объявляем 
let s_18 = "10000";
let count_18 = 5;
let arr_2 = [];
let res_188 = document.querySelector(".out-181");
let res_189 = document.querySelector(".out-182");
function f18() {
    for (let i = 0; i <= s_18.length; i++) {
        arr_2.push(0);
    }
    arr_2[count_18] = 1;
    res_188.textContent = String(count_18);
    res_189.textContent = String(arr_2).split(',').join('');
}
document.querySelector('.b-18').addEventListener('click', f18);
// Task 19
// Создайте с помощью цикла строку s_19 в которой идет ряд 5_x_3_x_1_x_. Т.е. пользователь вводит число, например 5, а функция генерирует строку от 5 до 0 и заменяет четные числа на x. Разделитель подчеркивание. Число функция берет из input.i-19. Выведите строку в .out-19.
// тут объявляем s_19
let s_19;
let n_19 = parseInt(document.querySelector(".i-19").value);
let res_19 = document.querySelector(".out-19");
let arr_3 = [];
function f19() {
    for (let i = 0; i <= n_19; i++) {
        if (i % 2 === 1) {
            arr_3.push(String(i) + "_" + "X_");
        }
    }
    res_19.textContent = (String((arr_3).reverse()).split(',').join(''));
}
document.querySelector('.b-19').addEventListener('click', f19);
// Тask 20
// Создайте переменную s_20 куда положите значение нуль. При нажатии кнопки запускается функция f20, которая получает число с .i-20 и считает сумму ряда чисел от введеного до нуля. Например введено 5, искомая сумма 5 + 4 + 3 + 2 + 1. Сумма присваивается в s_20. Выведите s_20 в .out-20.
// тут объявляем s_20
let s_20 = null;
function f20() {
    let res_20 = parseInt(document.querySelector(".i-20").value);
    let res_201 = document.querySelector(".out-20");
    let arr_4 = [];
    for (let i = 1; i <= res_20; i++) {
        arr_4.push(i);
    }
    arr_4.forEach((element) => {
        s_20 += element;
    });
    res_201.textContent = String(s_20);
}
document.querySelector('.b-20').addEventListener('click', f20);
//# sourceMappingURL=sprint_03.js.map