const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl: "pillow",
      price: 9.99,
      description: "A soft pillow"
    },
    {
      title: "A Carpet",
      imageUrl: "carpet",
      price: 89.99,
      description: "a carpet for ya"
    }
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.classList = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}"/> 
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};
// hard to write reusable code with this structure, always have add manually, solution: use classes
productList.render();
