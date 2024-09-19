// 4. Задача: Система онлайн-заказов
// Условие:
// Создайте классы для системы онлайн-заказов:
// Customer — представляет покупателя с именем и email.
// Order — представляет заказ и содержит:
// Список товаров (объекты класса Product).
// Сумму заказа.
// Покупателя, оформившего заказ (объект класса Customer).

// Создайте класс Product, который имеет свойства:
// name — название товара.
// price — цена товара.

// Класс Order должен иметь методы:
// addProduct(product, quantity) — добавляет товар в заказ.
// calculateTotal() — рассчитывает итоговую сумму заказа.
// printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.
// Создайте несколько покупателей, товары, оформите несколько заказов 
//и выведите информацию о каждом заказе.

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Customer(name, email) {
    this.name = name;
    this.email = email;
  }
  
  function Order() {
    this.orders = [];
    this.sum_price = 0;
    
  }
  
  
  Order.prototype.addProduct = function(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.orders.push(product)
      this.sum_price += product.price
    }
  }
  
  Order.prototype.calculateTotal = function() {
    return this.sum_price
  }
  
  Order.prototype.printOrder = function() {
    console.log(this)
  }
  
const product1 = new Product('телевизор', 2000)
const product2 = new Product('ноутбук', 3900)
const order = new Order()

order.addProduct(product1, 1)
console.log(order)
order.addProduct(product2, 2)
console.log(order)
console.log('ваша общая цена:', order.calculateTotal())
order.printOrder()
