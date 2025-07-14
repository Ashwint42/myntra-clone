import { fetchProducts } from "./utils.js";
import { attachWindowListeners, attachSortMenuListeners, attachSortMenuListenerMobile } from "./eventlisteners.js";

async function main() {
    attachWindowListeners();
    attachSortMenuListeners();
    attachSortMenuListenerMobile();
}

main();