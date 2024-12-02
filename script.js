const cartButtons = document.querySelectorAll(".add-to-cart");

const cart = []; // Lista para armazenar os itens do carrinho

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const pizzaName = button.closest(".box").querySelector("h3").textContent;
    const pizzaPrice = button
      .closest(".box")
      .querySelector(".price").textContent; // Pegar o preço da pizza
    cart.push({ name: pizzaName, price: pizzaPrice });
    alert(`Você adicionou ${pizzaName} ao carrinho!`);
  });
});
