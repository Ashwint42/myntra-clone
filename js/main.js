import { fetchProducts } from "./utils.js";
import { attachWindowListeners, attachSortMenuListeners } from "./eventlisteners.js";

async function main() {
    attachWindowListeners();
    attachSortMenuListeners();
}

main();