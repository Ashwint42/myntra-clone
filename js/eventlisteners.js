import { fetchProducts, sortByCriteria } from "./utils.js";
import { renderCardHMTL } from "./card.js";

let previousElement = document.querySelector('#price-lh');

async function attachWindowListeners() {
    const products = await fetchProducts();

    window.addEventListener("resize", async () => {
        renderCardHMTL(products);
    })
}

async function attachSortMenuListeners() {
    const sortMenuContainer = document.querySelector('.card-sort-container-wrapper');
    const sortCriteriaListContainer = document.querySelector('.sort-criteria-list');
    const sortCriteriaText = document.querySelector('.sort-criteria-text');

    sortMenuContainer.addEventListener('click', () => {
        sortCriteriaListContainer.style.display = "block";
        const criteriaElements = sortCriteriaListContainer.children;

        Array.from(criteriaElements).forEach(element => {
            element.addEventListener('click', async (e) => {
                e.stopPropagation();

                const currentCriteria = e.target.getAttribute('id');
                sortCriteriaText.innerHTML = e.target.innerHTML;

                let sortedProducts = await sortByCriteria(currentCriteria)

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

    sortMenuOverlayer.addEventListener('click', () => {
        sortMenuOverlayer.style.display = "none";
    })

    sortMenu.addEventListener('click', () => {
        sortMenuOverlayer.style.display = "block"
    })

    sortMenuCriteriaButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const currentButton = e.target.id;
            let sortedProducts = await sortByCriteria(currentButton)

            previousElement.classList.remove('active-sort-criteria')
            e.target.classList.add('active-sort-criteria')
            previousElement = e.target;

            renderCardHMTL(sortedProducts);
        })
    })
}

export {
    attachWindowListeners,
    attachSortMenuListeners,
    attachSortMenuListenerMobile
}