// 6. Математические выражения
// Условие:
// Создайте класс Expression, представляющий математическое выражение
// с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
// evaluate() — возвращает результат выражения.
// toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".

// Создайте подклассы для различных математических операций:
// Addition для сложения.
// Subtraction для вычитания.
// Multiplication для умножения.
// Division для деления (с проверкой деления на ноль).
// Создайте несколько объектов выражений и выведите результаты их вычислений.

// Ожидаемый результат:
// Каждый объект правильно вычисляет математическое выражение.
// Метод toString() корректно выводит информацию в формате "a op b = result".


  

function Expression(a, b) {
    this.a = a;
    this.b = b;
  }
  
  Expression.prototype.evaluate = function() {
    throw new Error("метод evaluate нужно реализовать");
  };
  

  Expression.prototype.toString = function() {
    return `${this.a} ? ${this.b} = ?`;
  };
  
  function Addition(a, b) {
    Expression.call(this, a, b);
  }
  
  Addition.prototype = Object.create(Expression.prototype);
  Addition.prototype.constructor = Addition;
  
  Addition.prototype.evaluate = function() {
    return this.a + this.b;
  };
  

  Addition.prototype.toString = function() {
    return `${this.a} + ${this.b} = ${this.evaluate()}`;
  };
  

  function Subtraction(a, b) {
    Expression.call(this, a, b);
  }
  

  Subtraction.prototype = Object.create(Expression.prototype);
  Subtraction.prototype.constructor = Subtraction;
  

  Subtraction.prototype.evaluate = function() {
    return this.a - this.b;
  };
  

  Subtraction.prototype.toString = function() {
    return `${this.a} - ${this.b} = ${this.evaluate()}`;
  };
  

  function Multiplication(a, b) {
    Expression.call(this, a, b);
  }

  Multiplication.prototype = Object.create(Expression.prototype);
  Multiplication.prototype.constructor = Multiplication;
  

  Multiplication.prototype.evaluate = function() {
    return this.a * this.b;
  };
  

  Multiplication.prototype.toString = function() {
    return `${this.a} * ${this.b} = ${this.evaluate()}`;
  };
  

  function Division(a, b) {
    Expression.call(this, a, b);
  }

  Division.prototype = Object.create(Expression.prototype);
  Division.prototype.constructor = Division;
  
  Division.prototype.evaluate = function() {
    if (this.b === 0) {
      throw new Error("Ошибка: Деление на ноль.");
    }
    return this.a / this.b;
  };
  
  Division.prototype.toString = function() {
    return `${this.a} / ${this.b} = ${this.evaluate()}`;
  };
  
 
  const addition = new Addition(2, 8);
  const subtraction = new Subtraction(30, 25);
  const multiplication = new Multiplication(8, 8);
  const division = new Division(100, 2);
  
  console.log(addition.toString());
  console.log(subtraction.toString());
  console.log(multiplication.toString());
  console.log(division.toString());
  
  const divisionByZero = new Division(5, 0);

  try {
    console.log(divisionByZero.toString());
  } catch (error) {
    console.error(error.message);
  }
  


