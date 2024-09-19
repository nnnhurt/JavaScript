// Задача 2
// 2. Кассовый аппарат
// Условие:
// Создайте класс Product, который будет представлять товар с характеристиками:
// name — название товара.
// price — цена товара.

// Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
// addProduct(product, quantity) — добавляет товар в корзину.
// removeProduct(product) — удаляет товар из корзины.
// getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
// checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.

// Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.

// Ожидаемый результат:
// Можно добавлять и удалять товары из корзины.
// Корзина корректно рассчитывает общую стоимость товаров.
// Метод checkout() выводит итоговый список покупок и очищает корзину.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function ShoppingCart() {
  this.product = []
}

ShoppingCart.prototype.addProduct = function(product, quantity) {
  for (let i = 0; i < quantity; i++) {
    this.product.push(product)
  }
}

ShoppingCart.prototype.removeProduct = function(product) {
  for (let j = 0; j < this.product.length; j++) {
    if (this.product[j] == product) {
      this.product.splice(j, 1)
      break
    }
  }
}

ShoppingCart.prototype.getTotalPrice = function() {
  let sum = 0
  for (let n of this.product) {
    sum += n.price
  }
  return sum
}

ShoppingCart.prototype.checkout = function() {
  for (let k of this.product) {
    console.log(k.name, k.price)
  }
  console.log(this.getTotalPrice())
  this.product = []
  return 'ваша корзина очищена'
}


const product1 = new Product('колбаска', 50)
const product2 = new Product('кокосовое молоко', 200)
const product3 = new Product('хлэб', 20)

const korzina = new ShoppingCart()


console.log(product1)
korzina.addProduct(product1, 1)
korzina.addProduct(product2, 1)
korzina.addProduct(product3, 1)
console.log(korzina)
korzina.removeProduct(product3)
console.log(korzina)
console.log(korzina.getTotalPrice())
console.log(korzina.checkout())
