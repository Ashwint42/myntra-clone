import { fetchProducts } from "./utils.js";
import { createCard } from "./card.js";

const cardsWrapper = document.querySelector('.cards-wrapper');

function attachWindowListeners() {
    window.addEventListener('load', async () => {
        let renderedHTML = ``;
        const products = await fetchProducts();

        products.forEach(product => {
            renderedHTML += createCard(product);
        })

        cardsWrapper.innerHTML = renderedHTML;
    })
}

export { attachWindowListeners }