import { generateRatingCount, calculateDiscountPercentage } from "./utils.js";

function createCard(product) {
    let card = `
                <li class="card">
                <div class="card-ratings-container">
                    <span class="card-rating-count">${product.rating.stars}</span>
                    <span class="card-rating-star-icon"></span>
                    <div class="card-rating-count-container">
                        <span class="card-rating-count-separator">|</span>${generateRatingCount()}
                    </div>
                </div>
                <div class="card-wrapper">
                    <div class="card-image-container">
                        <div class="card-image-wrapper">
                            <picture>
                                <img src=${product.image}
                                    alt="product-image">
                            </picture>
                        </div>
                    </div>

                    <div class="card-details-container">
                        <p class="product-brand-text">${product.brand}</p>
                        <p class="product-description">${product.subtitle}</p>
                        <div class="card-product-price-container">
                            <span>
                                <span class="card-product-price">Rs. ${product.price}</span>
                                <span class="card-product-original-price">Rs. ${product.originalPrice}</span>
                            </span>
                            <span class="product-discount-price">(${calculateDiscountPercentage(product.price, product.originalPrice)}% OFF)</span>
                        </div>
                    </div>
                </div>
            </li>
            `

    return card;
}

export { createCard }