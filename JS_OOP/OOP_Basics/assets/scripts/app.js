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
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
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
    return prodEl;
  }
}

const productList = new ProductList();
productList.render();
