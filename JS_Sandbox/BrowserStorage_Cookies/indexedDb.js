const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// indexedDb - in browser database, clunky syntax though, need helper functions, check idb.js library

let db;
const dbRequest = indexedDB.open("testDB", 1); // establish db connection

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  // when version changes
  db = event.target.result; // access db
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "first product",
      price: 4.44,
      tags: ["expensive", "luxury"]
    });
  };
};

dbRequest.onerror = function(event) {
  console.log("error");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({
    id: "p2",
    title: "2nd product",
    price: 14.44,
    tags: ["expensive", "luxury"]
  });
});

retrieveBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function() {
    console.log(request.result);
  };
});
