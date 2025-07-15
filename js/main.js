import { fetchProducts } from "./utils.js";
import { renderCardHMTL } from "./card.js";
import {
    attachWindowListeners,
    attachSortMenuListeners,
    attachSortMenuListenerMobile
} from "./eventlisteners.js";


window.addEventListener('load', async () => {
    const products = await fetchProducts();

    attachWindowListeners();
    attachSortMenuListeners();
    attachSortMenuListenerMobile();
    renderCardHMTL(products);

})