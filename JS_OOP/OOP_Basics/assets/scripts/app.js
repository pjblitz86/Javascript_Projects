class Product {
  title = "default"; // fields - "properties" of class
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product("A Pillow", "pillow", "soft pillow", 9.99), // now thats the way of code reuse on objects, we create instance of class
    new Product("A Carpet", "carpet", "a carpet for ya", 89.99)

    // {
    //   title: "A Carpet",
    //   imageUrl: "carpet",
    //   price: 89.99,
    //   description: "a carpet for ya"
    // } // hard to write reusable code with this structure, always have add manually, solution: use classes
  ];
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total amount: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total amount: \$${0.4}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.classList = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}"/> 
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    `;

    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  // use static method as a proxy
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

// call static method directly with class
App.init();
