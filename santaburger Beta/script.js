const products = [
    { id: 1, name: "CLÁSICA DOBLE", price: 10000, desc: "Cheddar, tomate, lechuga, aderezos" },
    { id: 2, name: "BACON DOBLE", price: 10000, desc: "Cheddar x2, Bacon, aderezos" },
    { id: 3, name: "ONION DOBLE", price: 10000, desc: "Cheddar x2, Cebolla caramelizada" },
    { id: 4, name: "PAPAS GRANDES", price: 9000, desc: "Porción familiar" }
];

let cart = [];

const container = document.getElementById('menu-container');
const totalDisplay = document.getElementById('total-price');

// Renderizar menú
products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="info">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <span class="price">$${p.price}</span>
        </div>
        <button onclick="addToCart('${p.name}', ${p.price})">Agregar</button>
    `;
    container.appendChild(card);
});

function addToCart(name, price) {
    cart.push({name, price});
    updateTotal();
}

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `$${total}`;
}

document.getElementById('send-order').onclick = () => {
    if(cart.length === 0) return alert("Agrega algo al carrito");
    
    let text = "¡Hola Santa Burger! Mi pedido es:%0A";
    cart.forEach(item => text += `- ${item.name} ($${item.price})%0A`);
    text += `%0ATotal: ${totalDisplay.innerText}`;
    
    // Aquí podrías usar el número de Matías o el del local
    window.open(`https://wa.me/2622502002?text=${text}`);
};