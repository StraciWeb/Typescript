"use strict";
// Task 01
// Перепишите функцию t01 на дженериках, так, чтобы работа функции со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t01(arg) {
    return arg;
}
document.querySelector('.b-1').addEventListener('click', function () {
    console.log(t01(5));
    console.log(t01('hello'));
    console.log(t01(true));
});
// Task 02
// Перепишите функцию t02 на дженериках, так, чтобы работа функции со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t02(arg1, arg2) {
    return (arg1 > arg2) ? arg1 : arg2;
}
document.querySelector('.b-2').addEventListener('click', function () {
    console.log(t02(5, 6));
    console.log(t02('hello', 'zilo'));
});
// Task 03
// Перепишите функцию t03 на дженериках, так, чтобы работа функции со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t03(arg1, arg2) {
    return (arg1 && arg2);
}
document.querySelector('.b-3').addEventListener('click', function () {
    console.log(t03(1, 0));
    console.log(t03(true, true));
});
// Task 04
// Перепишите функцию t04 на дженериках, так, чтобы работа функции со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t04(arg) {
    return [arg];
}
document.querySelector('.b-4').addEventListener('click', function () {
    console.log(t04(1));
    console.log(t04(true));
});
// Task 05
// Перепишите функцию t05 на дженериках, так, чтобы работа функции со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t05(arg) {
    return arg;
}
document.querySelector('.b-5').addEventListener('click', function () {
    console.log(t05(1));
    console.log(t05(true));
    console.log(t05([4, 5, 6]));
    console.log(t05('jojoba'));
});
// Task 06
// Перепишите функцию t06 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t06(arg) {
    return arg.reduce((accum, item) => item > accum ? item : accum);
}
document.querySelector('.b-6').addEventListener('click', function () {
    console.log(t06([3, -1, 5, 7, 1, 12, -4, 6, 2]));
    console.log(t06(['test', 'la', 'caputchi', 'udel', 'boro']));
    console.log(t06([true, false, true, false]));
});
// Task 07
// Перепишите функцию t07 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t07(id, name) {
    return (typeof (id) + ", " + typeof (name));
}
document.querySelector('.b-7').addEventListener('click', function () {
    console.log(t07(3, 'Rodjer D'));
    console.log(t07('Fortuna Major', 57));
});
// Task 08
// Перепишите функцию t08 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t08(data) {
    return data.join('_');
}
document.querySelector('.b-8').addEventListener('click', function () {
    console.log(t08([3, 14, 15]));
    console.log(t08([true, true, false, true]));
});
// Task 09
// Перепишите функцию t09 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t09(data_1, data_2) {
    return [...data_1, ...data_2];
}
document.querySelector('.b-9').addEventListener('click', function () {
    console.log(t09([3, 14, 15], [92, 6]));
    console.log(t09(['mea', 'culpa'], ['mala', 'fides']));
});
// Task 10
// Перепишите функцию t10 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны. Any должен быть заменен типом.
function t10(data_1, data_2) {
    return [...data_1, ...data_2];
}
document.querySelector('.b-10').addEventListener('click', function () {
    console.log(t10([3, 14, 15], ['mala', 'fides']));
    console.log(t10(['mea', 'culpa'], [92, 6]));
});
// Task 11
// Перепишите функцию t11 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t11(data) {
    return data;
}
document.querySelector('.b-11').addEventListener('click', function () {
    let result;
    result = t11(5);
    console.log(result);
    console.log(typeof result);
    result = t11('5');
    console.log(result);
    console.log(typeof result);
    result = t11('5b');
    console.log(result);
    console.log(typeof result);
});
// Task 12
// Перепишите функцию t12 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t12(data) {
    return data.toString().split('').reverse().join('');
}
document.querySelector('.b-12').addEventListener('click', function () {
    console.log(t12('hello'));
    console.log(t12(543));
});
// Task 13
// Перепишите функцию t13 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t13(data) {
    console.log(data);
    return data.toString() === t12(data);
}
document.querySelector('.b-13').addEventListener('click', function () {
    console.log(t13('helloolleh'));
    console.log(t13(543));
    console.log(t13(1771));
});
// Task 14
// Перепишите функцию t14 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t14(data) {
    return (data.length !== 0) ? data[0] : null;
}
document.querySelector('.b-14').addEventListener('click', function () {
    console.log(t14([2, 3, 4]));
    console.log(t14([]));
    console.log(t14(['a', 'b', 'c']));
    console.log(t14([55, 'b', 'c']));
});
// Task 15
// Перепишите функцию t15 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t15(data) {
    const t = [];
    data.forEach(item => t.push(item));
    return t;
}
document.querySelector('.b-15').addEventListener('click', function () {
    console.log(t15([22, 33, , , , , , 55]));
    const arr = [];
    arr[0] = 'hello';
    arr[1000] = 'halo';
    console.log(t15(arr));
});
// Task 16
// Перепишите функцию t16 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t16(data_1, data_2) {
    return (data_1.toString() === data_2.toString());
}
document.querySelector('.b-16').addEventListener('click', function () {
    console.log(t16([22, 33], [22, 33]));
    console.log(t16([22, 33, [44, 55]], [22, 33, [44, 55]]));
    console.log(t16([22, 33, [44, 55]], [22, 33, [44, 5]]));
    console.log(t16(['non', 'vi'], ['non', 'vi']));
    console.log(t16(['vi', 'non'], ['non', 'vi']));
});
// Task 17
// Напишите функцию t17, которая реализует механизм indexOf для типов массивов number[], string[], boolean[]. Примените механизм дженериков. 
function t17(arr, elem) {
    // сотрите return 1 и напишите код
    return arr.indexOf(elem);
}
document.querySelector('.b-17').addEventListener('click', function () {
    console.log(t17([22, 55, 44, 33], 33));
    console.log(t17(['este', 'nu este', 'null'], 'este'));
    console.log(t17([true, false, true, false], false));
});
// Task 18
// Перепишите функцию t18 на дженериках, так, чтобы запуски со всеми типами данных указанных в запуске по нажатию кнопки были корректны.
function t18(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
document.querySelector('.b-18').addEventListener('click', function () {
    console.log(t18([22, 55, 44, 33]));
    console.log(t18(['per', 'aspera', 'ad', 'astra']));
});
// Task 19
// Напишите функцию t19, которая реализует механизм проверки массива на наличие пропущенных индексов. Примените механизм дженериков.
function t19(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined)
            return true;
    }
    return false;
}
document.querySelector('.b-19').addEventListener('click', function () {
    console.log(t19([22, 55, 44, 33]));
    const arr = [];
    arr[0] = 'per';
    arr[1000] = 'lovem';
    console.log(t19(arr));
});
// Task 20
// Напишите функцию t20, которая реализует механизм стека. Если второй аргумент функции существует, то значение добавляется в конец массива и возвращается массив. Если не передано - возвращается последний элемент массива. Примените механизм дженериков.
function t20(arr, data) {
    // сотрите return 0 и напишите код
    if (data) {
        arr.push(data);
        return arr;
    }
    return arr[arr.length - 1];
}
document.querySelector('.b-20').addEventListener('click', function () {
    console.log(t20([22, 55, 44, 33]));
    console.log(t20(['primum', 'non', 'nocere'], 'primo'));
});
//# sourceMappingURL=sprint_16.js.map