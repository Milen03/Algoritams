const orders = [
  { id: 1, product: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, product: "Mouse", category: "Electronics", price: 50 },
  { id: 3, product: "Shirt", category: "Clothing", price: 40 },
  { id: 4, product: "Jeans", category: "Clothing", price: 60 },
  { id: 5, product: "Chair", category: "Furniture", price: 150 }
];


function groupOrders(orders){
let result = {}

for (const order of orders) {
    let category = order.category

    if(!result[category]){
        result[category]={
            items: [],
            price: 0
        }
    }

    result[category].items.push(order.product)
    result[category].price += order.price
}

return result
}

console.log(groupOrders(orders));


