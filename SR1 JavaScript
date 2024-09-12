
// Задание 1. Работа с функциями
// Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, 
//если число простое, и false в противном случае.
// Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.


export function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= 20; i++) {
    console.log(`Is ${i} prime? ${isPrime(i)}`);
}


// Задание 2. Работа с массивами
// Создайте массив из 10 случайных чисел.
// Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя
//  свойствами: min — минимальное значение в массиве, max — максимальное.
// Вызовите функцию для созданного массива и выведите результат в консоль.


export function generateRandomArray(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 10));
    }
    return randomArray;
}

function findMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}


const randomNumbers = generateRandomArray(10);
console.log("Random Numbers:", randomNumbers);


const minMax = findMinMax(randomNumbers);
console.log("Min:", minMax.min, "Max:", minMax.max);

// Задание 3. Работа с объектами
// Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя и 
//выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet, который выводит приветственное сообщение, 
//например: "Привет, {name}!".
// Вызовите метод для созданного объекта.


let user = {
    name: "Sobaka",
    age: 100,
    email: 'sobaka@mail.ru',
    greet() {
        return `Привет, ${this.name}!`
    }
}

export function displayUserInfo(user) {
return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
};

console.log(displayUserInfo(user));
console.log(user.greet());

// Задание 4. Циклы и массивы
// Создайте массив строк, представляющих имена студентов: 
//["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого студента: 
//"Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя
// в массиве студентов и возвращает его.


let names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (let i=0; i<names.length; i++) {
    console.log(`Студент ${names[i]}, ваш порядковый номер: ${i}`)
}
export function findLongestName(names) {
    let ans = names[0]
    for (let name of names) {
        if (name.length > ans.length) {
            ans = name
        }
    }
    return ans
}
console.log(findLongestName(names))


// Задание 5. Работа с датой и временем
// Напишите функцию formatDate, которая принимает объект Date 
//и возвращает строку в формате DD.MM.YYYY HH:MM. 
//Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.

export function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  
  function dayDiff(date1, date2) {
    return Math.floor((date1 - date2) / (1000 * 3600 * 24));
  }
  
  console.log(formatDate(new Date()));
  console.log(dayDiff(new Date(0), new Date('1995-12-17T03:24:00')));


// Дополнительное задание
// Создайте функцию reverseString, которая принимает строку 
//и возвращает ее в перевернутом виде.
// Напишите функцию, которая принимает строку и возвращает ее, удалив все гласные буквы.

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

const originalString = "sobaka";
const reversed = reverseString(originalString);
const withoutVowels = removeVowels(originalString);

console.log("Перевернутая строка:", reversed);
console.log("Строка без гласных:", withoutVowels);
