import { fetchProducts, sortProducts } from "./utils.js";
import { renderCardHMTL } from "./card.js";

function attachWindowListeners() {
    window.addEventListener('load', async () => {
        const products = await fetchProducts();
        renderCardHMTL(products);
    })
}

async function attachSortMenuListeners() {
    const sortMenuContainer = document.querySelector('.card-sort-container-wrapper');
    const sortCriteriaListContainer = document.querySelector('.sort-criteria-list');
    const sortCriteriaText = document.querySelector('.sort-criteria-text');

    const products = await fetchProducts();
    let sortedProducts;

    sortMenuContainer.addEventListener('click', () => {
        sortCriteriaListContainer.style.display = "block";
        const criteriaElements = sortCriteriaListContainer.children;

        Array.from(criteriaElements).forEach(element => {
            element.addEventListener('click', (e) => {
                e.stopPropagation();

                const currentCriteria = e.target.getAttribute('id');
                sortCriteriaText.innerHTML = e.target.innerHTML;

                switch (currentCriteria) {
                    case "price-lh": sortedProducts = sortProducts(products, "price", -1);
                        break;
                    case "price-hl": sortedProducts = sortProducts(products, "price", 1);
                        break;
                    case "rating-lh": sortedProducts = sortProducts(products, "rating", -1);
                    default:
                        sortedProducts = products;
                }
                renderCardHMTL(sortedProducts);
                e.target.closest('ul').style.display = "none"
            })
        })
    })
}

export { attachWindowListeners, attachSortMenuListeners }