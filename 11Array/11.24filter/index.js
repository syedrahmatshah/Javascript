/** @format */

// 11.24 filter()
/*The JavaScript array filter() method filter and extract the element 
of an array that satisfying the provided condition. It doesn't change the original array.
*/

let marks = [50, 40, 45, 37, 20];
let result = marks.filter((value) => {
  return value >= 30;
});
console.log(result);

const test = (element, index, array) => element >= 25;
console.log([21, 32, 21, 43].filter(test));

// Sample data: Array of product objects
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    stock: 5,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 700,
    category: "Electronics",
    stock: 0,
  },
  {
    id: 3,
    name: "Shoes",
    price: 150,
    category: "Fashion",
    stock: 10,
  },
  {
    id: 4,
    name: "Watch",
    price: 300,
    category: "Fashion",
    stock: 3,
  },
  {
    id: 5,
    name: "Book",
    price: 20,
    category: "Books",
    stock: 50,
  },
];

// Configuration for discount by category
const discountByCategory = {
  Electronics: 0.1, // 10% discount
  Fashion: 0.15, // 15% discount
  Books: 0.05, // 5% discount
};

// Function to calculate discounted price
function applyDiscount(price, discount) {
  return price - price * discount;
}

// Using map to create a new array with transformed product data
const updatedProducts = products.map((product) => {
  const discount = discountByCategory[product.category] || 0;
  const discountedPrice = applyDiscount(product.price, discount);

  return {
    id: product.id,
    name: product.name,
    originalPrice: product.price,
    discountedPrice: discountedPrice.toFixed(2), // Format to two decimal places
    category: product.category,
    available: product.stock > 0 ? "In stock" : "Out of stock",
    stock: product.stock,
  };
});

// Displaying the updated product list
console.log("Updated Product List:");
updatedProducts.forEach((product) => {
  console.log(`- ${product.name} [${product.category}]`);
  console.log(`  Original Price: $${product.originalPrice}`);
  console.log(`  Discounted Price: $${product.discountedPrice}`);
  console.log(`  Availability: ${product.available}`);
  console.log("--------------------------------");
});
