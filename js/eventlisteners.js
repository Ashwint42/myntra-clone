import { fetchProducts } from "./utils.js";
import { renderCardHMTL } from "./card.js";

function attachWindowListeners() {
    window.addEventListener('load', async () => {
        const products = await fetchProducts();
        renderCardHMTL(products);
    })
}

export { attachWindowListeners }