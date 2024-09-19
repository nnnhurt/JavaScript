// 5. Иерархия домашних животных
// Условие:
// Создайте абстрактный класс Pet, который будет представлять домашнее животное с методами:
// eat() — выводит сообщение "Животное ест".
// makeSound() — метод, который должен быть переопределен в классах-наследниках.
// Создайте классы Dog и Cat, которые наследуют Pet.

// Переопределите метод makeSound() для каждого класса:
// Для Dog — выводит "Собака лает".
// Для Cat — выводит "Кошка мяукает".
// Добавьте метод sleep() для каждого питомца, который выводит сообщение о том, что питомец спит.

// Создайте объекты для каждого класса и вызовите методы eat(), makeSound() и sleep().

// Ожидаемый результат:
// Объекты классов Dog и Cat корректно переопределяют метод makeSound().
// Методы eat() и sleep() работают для каждого питомца.


class AbstractClass {
    constructor() {
        if (new.target === AbstractClass) {
            throw new Error("Нельзя создавать экземпляры абстрактного класса");
        }
    }

    abstractMethod() {
        throw new Error("Метод 'abstractMethod' должен быть реализован");
    }
}

class Pet {
    constructor() {
        if (new.target === Pet) {
            throw new Error("");
        }
    }

    eat() {
        console.log('животное ест')
    }
    makeSound() {
        throw new Error("Метод 'makeSound' должен быть реализован");
    }
}

class Dog extends Pet {
    makeSound() {
        console.log('собака лает')
    }
    sleep() {
        console.log('пэс спит.....')
    }
}

class Cat extends Pet {
    makeSound() {
        console.log('кошка мяукает')
    }
    sleep() {
        console.log('кошка спит.....')
    }
}

const sobaka = new Dog()
const cat = new Cat()
sobaka.eat()
sobaka.makeSound()
sobaka.sleep()
cat.eat()
cat.makeSound()
cat.sleep()
