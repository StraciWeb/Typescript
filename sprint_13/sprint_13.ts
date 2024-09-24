// Task 01
// Пример из реального фреймворка
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm (не применяйте конструктор), который реализует свойства и методы абстрактного класса. Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false, в остальных случаях - true. Значений свойств по умолчанию - пустые строки. 

abstract class SignupFormAbstract {
    public abstract username: string;
    public abstract email: string;
    public abstract password: string;

    public abstract validatePassword(password: string): boolean;
}

// Тут создаете класс SignupForm
class SignupForm extends SignupFormAbstract {
    public username: string = "";
    public email: string = "";
    public password: string = "";
    public validatePassword(password: string): boolean {
        password = password.trim();
        if(password.length < 8) return false;
        else return true;
    }
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// const person  = new SignupForm();
// console.log(person.validatePassword("kfkdsdssss"));
// console.log(new SignupForm().validatePassword("sds"));

// Task 02
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm_02, который реализуем свойства и методы абстрактного класса. Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false, в остальных случаях - true. Значений свойств по умолчанию - пустые строки. Реализуйте в классе конструктор, который задает значения username, email, password при создании объекта. 

// Тут создаете класс SignupForm_02
class SignupForm_02 extends SignupFormAbstract {
    public username: string = "";
    public email: string = "";
    public password: string = "";

    public validatePassword(password: string): boolean {
        password = password.trim();
        if(password.length < 8) return false;
        else return true;
    }

    constructor(userName: string, email: string, password : string) {
            super();
        this.username = userName;
        this.email = email;
        this.password = password;
    }
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// console.log(new SignupForm_02('abba', 'abba@email.ua', '234'));

// const user = new SignupForm_02('abba', 'abba@email.ua', '234');
// console.log(user.validatePassword(" 2323dsdsds "));

// Task 03
// Пример из реального фреймворка
// Создайте абстрактный класс CF. Класс содержит абстрактные поля name, email, subject, body, verifyCode все string, и абстрактный метод sendEmail, который принимает аргумент email, тип метода boolean. 

// Тут создаете класс CF
abstract class CF {
    public abstract name : string;
    public abstract email : string;
    public abstract subject : string;
    public abstract body : string;
    public abstract verifyCode : string;

    public abstract sendEmail (email : string) : boolean;
}


// Task 04
// Создайте класс ContactForm на основе класса CF. Свойства реализуйте как пустые строки, добавьте класс конструктор, который позволяет заполнить свойства name, email, subject, body, verifyCode при создании объекта. Метод sendEmail, реализуйте как функцию, возвращающую true.

// Тут создаете класс ContactForm
class ContactForm extends CF {
   public  name : string = "";
   public email : string = "";
   public subject : string = "";
   public body : string = "";
   public verifyCode: string = "";

   constructor (name : string, email: string, subject: string, body: string, verifyCode: string) {
    super();
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.body = body;
    this.verifyCode = verifyCode;
   }

   public sendEmail(email: string): boolean {
       return true;
   }
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// console.log(new ContactForm("andrei", "andrei@mail.com", "new mesage", "body message", "SSDSDSAA"));

// Task 05
// Пример из реального фреймворка
// Создайте абстрактный класс User, который содержит абстрактные свойства id - number, username - string, email - string, status - number. Напишите абстрактный метод findByUsername, который принимает имя пользователя - username, и возвращает id пользователя или false.

// Тут создаете класс User
abstract class User {
    abstract id : number;
    abstract username : string;
    abstract email : string;
    abstract status : number;

    abstract findByUsername (username : string) : number | boolean;

}

// Task 06
// Создайте на основе абстрактного класса User класс Client, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Метод должен возвращать 0. Не применяйте конструктор.

// Тут создаете класс Client
class Client extends User {
    id : number = 0;
    username : string = "";
    email : string = "";
    status : number = 0;

    findByUsername(username: string): number | boolean {
        return 0;
    }
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// console.log(new Client().findByUsername("Andrei"));

// Task 07
// Пример из реального фреймворка
// Реализуйте абстрактный класс ArticleInstance содержащий абстрактные свойства:
// number article_id
// number author_id
// string language
// number created
// number updated
// string published
// number hits_count
// string intro_text
// string full_text
// string title
// string meta_keywords
// string meta_description
// Добавьте два readonly свойства общие для всех классов наследников PUBLISHED_YES = 'Yes', PUBLISHED_NO = 'No';

// Тут создаете класс ArticleInstance
abstract class ArticleInstance {
    article_id : number;
    author_id : number;
    language : string;
    created : number;
    updated : number;
    published : string;
    hits_count : number;
    intro_text : string;
    full_text : string;
    title : string;
    meta_keywords : string;
    meta_description : string;
    readonly PUBLISHED_YES = 'Yes'
    readonly PUBLISHED_NO = 'No';
}

// Task 08
// Создайте на основе абстрактного класса ArticleInstance класс Article, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Не применяйте конструктор.

// Тут создаете класс Article
class Article extends ArticleInstance {
    article_id: number = 0;
    author_id: number = 0;
    language: string = "";
    created: number = 0;
    updated: number = 0;
    published: string = "";
    hits_count: number = 0;
    intro_text: string = "";
    full_text: string = "";
    title: string = "";
    meta_keywords: string = "";
    meta_description: string = "";
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// const article = new Article();
// console.log(article);

// Task 09
// Пример из реального фреймворка
// Создайте абстрактный класс BundleCSS, содержащий абстрактные свойства: 
// sourcePath - строка
// basePath - строка
// baseUrl - строка 
// depends - массив строк 
// сssOptions - массив строк
// Добавьте абстрактный метод init, void.
// Добавьте абстрактный метод publish, void.

// Тут создаете класс BundleCSS
abstract class BundleCSS {
    abstract sourcePath : string;
    abstract basePath : string;
    abstract baseUrl : string;
    abstract depends : string[];
    abstract cssOptions : string[];

    abstract init() : void;
    abstract publish() : void;
}

// Task 10
// Создайте на базе BundleCSS класс CssBundle, реализуйте свойства и методы. Задайте начальные значения для строк и массивов (пустые строки, пустые массивы). Не применяйте конструктор.

// Тут создаете класс CssBundle
class CssBundle extends BundleCSS {
    sourcePath: string = "";
    basePath: string = "";
    baseUrl: string = "";
    depends: string[] = [];
    cssOptions: string[] = [];

    init() : void {};
    publish(): void {};
}

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// console.log(new CssBundle());