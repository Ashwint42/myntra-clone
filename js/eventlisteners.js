import { fetchProducts, sortProducts } from "./utils.js";
import { renderCardHMTL } from "./card.js";

let previousElement = document.querySelector('#price-lh');

async function attachWindowListeners() {
    const products = await fetchProducts();
    window.addEventListener('load', async () => {
        renderCardHMTL(products);
    })

    window.addEventListener("resize", async () => {
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


async function attachSortMenuListenerMobile() {
    const sortMenu = document.querySelector('.mb-bottom-nav-left');
    const sortMenuOverlayer = document.querySelector('.mb-sort-menu-overlayer');
    const sortMenuCriteriaButtons = document.querySelectorAll('.mb-sort-criteria-button');

    const products = await fetchProducts();
    let sortedProducts;

    sortMenuOverlayer.addEventListener('click', () => {
        sortMenuOverlayer.style.display = "none";
    })

    sortMenu.addEventListener('click', (e) => {
        console.log(e.target);
        sortMenuOverlayer.style.display = "block"
    })

    sortMenuCriteriaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentButton = e.target.id;
            switch (currentButton) {
                case "mb-price-lh": sortedProducts = sortProducts(products, "price", -1);
                    break;
                case "mb-price-hl": sortedProducts = sortProducts(products, "price", 1);
                    break;
                case "mb-customer-rating": sortedProducts = sortProducts(products, "rating", 1);
                    break;
            }

            previousElement.classList.remove('active-sort-criteria')
            e.target.classList.add('active-sort-criteria')
            previousElement = e.target;
            renderCardHMTL(sortedProducts);
        })
    })
}

export { attachWindowListeners, attachSortMenuListeners, attachSortMenuListenerMobile }