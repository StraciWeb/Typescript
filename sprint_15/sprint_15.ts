// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров. 
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).

// тут реализуйте IGoods
interface IGoods {
    title : string,
    amount : number,
    color ?: string
}

//  Создайте объект реализующий данный интерфейс. Проверьте работу и закомментируйте код проверки.
// const obj1 : IGoods = {
//     title : "Title",
//     amount : 23,
//     color : "Red"
// }

// console.log(obj1);


// Task 02
// Давайте реализуем интерфейс из реального примера. Опишем интерфейс IUser, который содержит id - число, readonly, username, password, hash - строки. Свойство created - число.

// тут реализуйте IUser
interface IUser {
    readonly id : number,
    username : string,
    password : string,
    hash : string,
    created : number
}

// реализуйте объект на основе интерфейса IUser и выведите в консоль. Проверьте работу и закомментируйте код проверки.
// const obj2 : IUser = {
//     id : 25,
//     username : "User1",
//     password :"1234ds",
//     hash : "dsds",
//     created : 33

// }

// console.log(obj2);


// Task 03
// Созданы два объекта obj_31, obj_32 - напишите интерфейс ІTelegram который они реализуют. Обычно свойства с id реализуются через readonly.

interface ITelegram {
    readonly message_id : number,
    readonly user_id : number,
    username : string,
    time : string,
    body : string
}

const obj_31 : ITelegram = {
    message_id : 32546,
    user_id : 25654,
    username : 'Скринька Пандори',
    time: '2024-01-31 17:45:25',
    body : 'Країни ЄС цього року нададуть...'
}

const obj_32 : ITelegram = {
    message_id : 3876214,
    user_id : 657412,
    username : 'ITGid - info',
    time: '2024-01-29 08:25:15',
    body : 'Небольшой анонс на сегодня...'
}

// Task 04
// Создан интерфейс и объект на его основе.

interface IClock {
    h : number,
    m : number,
    s : number
}

const clock = {} as IClock; // не изменяйте данную строку.

// тут заполните объект сlock, установите 21 час, 31 минута и 59 секунд.
clock.h = 21;
clock.m = 31;
clock.s = 59;

// console.log(clock);

// Task 05
// Создайте интерфейс IStore, который описывает товар магазина. Опишите свойство title - string, amount - number, size - массив чисел. 

// Тут создайте интерфейс IStore
interface IStore {
    title : string,
    amount : number,
    size : number[]
}

// реализуйте объект на основе интерфейса IStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.
const product : IStore = {
    title : "product 1",
    amount : 23,
    size : [23, 34]
}
// console.log(product);

// Task 06
// Давайте расширим интерфейс IStore, и создадим интерфейс IBigStore, который будет расширять IStore и добавлять свойство color - массив цветов (string).

// Тут создайте интерфейс IBigStore
interface IBigStore extends IStore {
    color : string[];
}

// реализуйте объект на основе интерфейса IBigStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.
const product1 : IBigStore = {
    title : "Product 2",
    amount : 34,
    size : [23, 45],
    color : ["red", "black"]
}
// console.log(product1);

// Task 07
// Не забывайте - интерфейс это просто соглашение о структуре... И может содержать не только свойства, но и методы (без реализации). Создайте интерфейс ICart, который описывает методы addToCart и возвращает id товара (number), и метод clearCart - процедура. 

// Тут создайте интерфейс ICart
interface ICart {
    addToCart () : number,
    clearCart () : void
}

// реализуйте объект на основе интерфейса ICart, методы пропишите условно. Проверьте работу и закомментируйте код проверки.
// const cart : ICart = {
//     addToCart() {
//         return 23
//     },
//     clearCart() {
//         console.log("cart")
//     },
// }

// console.log(cart.addToCart());
// cart.clearCart();

// Task 08
// Создадим интерфейс IRect описывающий геометрическую фигуру - прямоугольник. Опишите стороны прямоугольника a, b - числа и метод area - который возвращает площадь фигуры. Задача довольно простая и вы легко с ней справитесь.

// Тут создайте интерфейс IRect
interface IRect {
    a : number,
    b : number,
    area () : number
}

// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.

// const rect_01 : IRect = {
//     a : 10,
//     b :  12,
//     area () : number {
//         return this.a * this.b;
//     }
// };

// console.log(rect_01.area());


// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a, b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число. 
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.

// Тут создайте абстрактный класс
abstract class ARect {
    abstract a : number;
    abstract b : number;
    area () : number {
        return this.a * this.b
    }
}

// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular. Добавьте конструктор, который принимает два числа и заполняет свойства a, b. Создайте на базе класса объект со сторонами 0.5 и 20 и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.

// Тут создайте абстрактный класс Rectangular
class Rectangular extends ARect {
    a : number;
    b : number;


    constructor (a : number, b : number) {
        super();
        this.a = a;
        this.b = b;
    }
    area(): number {
        return this.a * this.b;
    }
}


// Task 11
// Надеюсь вы заметили разницу между абстрактным классом и интерфейсом. Интерфейс описывает структуру и не содержит реализации. Абстрактный же класс может содержать или не содержать реализации. Однако вернемся к интерфейсам. До текущего момента, мы на базе интерфейсов создавали сразу объекты. Давайте создадим класс Paragraph (implements) на базе интерфейса IElement.

interface IElement {
    tag: string;
    paired : boolean,
    text : string
    getWidth (): number;
  }

// Тут создайте класс Paragraph c имплементацией свойств и методов интерфейса IElement. Пусть для проверки getWidth возвращает 0.
class Paragraph implements IElement {
    tag = "Tag 1";
    paired = true;
    text = "Test";
    getWidth(): number {
        return 0;
    }
}

// console.log(new Paragraph().getWidth())

// Task 12
// Класс может реализовывать два интерфейса. Напишите интерфейс IFigureA, интерфейс описывает фигуру квадрат - сторона a (число), и метод getSquare, который возвращает число. 
interface IFigureA {
    a : number,
    getSquare () : number
}

// Task 13
// Напишите интерфейс IFigureB, интерфейс описывает фигуру квадрат - сторона b (число), и метод getPerimeter, который возвращает число.
interface IFigureB {
    b : number,
    getPerimeter () : number
}

// Task 14
// Создайте класс Rect, который имплементирует интерфейсы IFigureA, IFigureB и реализует методы getSquare, getPerimeter. 
class Rect implements IFigureA, IFigureB {
    public a : number;
    public b : number;
    constructor (a : number, b : number) {
        this.a = a;
        this.b = b;
    }

    getSquare(): number {
        return this.a * this.b
    }

    getPerimeter(): number {
        return (this.a + this.b) * 2;
    }
}


// Для проверки, на базе класса создайте объект obj_14, со сторонами 5 и 4 и выведите его площадь и периметр. 
// const obj_14 = new Rect (5, 4);
// console.log(obj_14.getSquare());
// console.log(obj_14.getPerimeter());

// Task 15
// Создан Абстрактный класс AExample. Напишите интерфейс IExample, который соответствует его структуре.

abstract class AExample {
    public src : string = '';
    public format : string;
    public alt : string = '';
    public title : string = '';
    public width : number = 100;
    public widthUnits : string = '%';
    public render () {
        const img = document.createElement('img');
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.style.width = this.width + this.widthUnits;
        return img;
    }
}

// Тут напишите IExample

interface IExample {
    src : string,
    format : string,
    alt : string,
    title : string,
    width : number,
    widthUnits : string,
    render () : void
}