let cart = [];
let total = 0;
let orders = [];

function addToCart(item, price) {
    cart.push({item, price});
    total += price;
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(c => {
        let li = document.createElement("li");
        li.textContent = c.item + " - ₹" + c.price;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function showCheckout() {
    document.getElementById("checkout").style.display = "block";
}

function placeOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    if(name === "" || address === "") {
        alert("Please fill details");
        return;
    }

    let order = {
        name,
        address,
        cart,
        total
    };

    orders.push(order);

    document.getElementById("confirmation").style.display = "block";
    document.getElementById("orderDetails").textContent =
        `Thank you ${name}! Your order of ₹${total} is placed.`;

    cart = [];
    total = 0;
    displayCart();
}

function showOrders() {
    let list = document.getElementById("ordersList");
    list.innerHTML = "";

    orders.forEach((o, index) => {
        let li = document.createElement("li");
        li.textContent =
            `Order ${index+1}: ${o.name}, ₹${o.total}, ${o.address}`;
        list.appendChild(li);
    });
}