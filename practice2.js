

class Robot {
    constructor(name) {
        this.name = name;
    }

    performTask() {
        throw new Error("Метод performTask должен быть переопределен в подклассе.");
    }
}


class CleaningRobot extends Robot {
    constructor(name) {
        super(name);
        this.sensors = ['пылесос', 'влажная уборка', 'найти грязь'];
    }

    performTask() {
        console.log(`${this.name} выполняет задачу: Уборка с помощью датчиков: ${this.sensors}`);
    }
}


class GuardRobot extends Robot {
    constructor(name) {
        super(name);
        this.sensors = ['камера', 'датчик движения', 'звуковой сигнал'];
    }

    performTask() {
        console.log(`${this.name} выполняет задачу: Охрана с помощью датчиков: ${this.sensors}`);
    }
}


class AssistantRobot extends Robot {
    constructor(name) {
        super(name);
        this.sensors = ['распознавание лиц', 'голосовой помощник', 'датчик температуры'];
    }

    performTask() {
        console.log(`${this.name} выполняет задачу: Помощь людям с помощью датчиков: ${this.sensors}`);
    }
}


function mergeObjects(obj1, obj2) {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        const merged = Array.isArray(obj1) || Array.isArray(obj2) ? [] : {};

        for (const key in obj1) {
            if (obj1.hasOwnProperty(key)) {
                merged[key] = mergeObjects(obj1[key], obj2[key]);
            }
        }

        for (const key in obj2) {
            if (obj2.hasOwnProperty(key) && !(key in merged)) {
                merged[key] = obj2[key];
            }
        }
        return merged;
    } else if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return [...obj1, ...obj2];
    } else if (Array.isArray(obj1)) {
        return [...obj1, obj2];
    } else if (Array.isArray(obj2)) {
        return [obj1, ...obj2];
    } else {
        return [obj1, obj2];
    }
}


console.log(mergeObjects(10, "dog"));
console.log(mergeObjects([1, 2], [3, 4]));
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({ a: { b: 3 } }, { a: { c: 4 }, d: 5 }));
console.log(mergeObjects("String", [1, 2]));


const cleaningBot = new CleaningRobot('уборщик');
cleaningBot.performTask();

const guardBot = new GuardRobot('охранник 55');
guardBot.performTask();

const assistantBot = new AssistantRobot('ассистент 5');
assistantBot.performTask();



