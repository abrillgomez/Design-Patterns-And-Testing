// No alteramos el producto inicialmente, lo dejamos como está, y ahí empezamos a ir descendiendo en diferentes tipos de productos.

class Product {
  constructor() {
    this.price = price
  }

  getPrice(){
    return this.price
  }
}

class ProductDiscounts extends Product {
  constructor(price, discount) {
    super(price)
    this.discount = discount
  }

  getPrice(){
    return this.discount * this.price
  }
}
