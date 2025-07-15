async function fetchProducts() {
    try {
        const response = await fetch("../products.json");
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log("Error Loading json file: ", error);
    }
}

function generateRatingCount() {
    const ratingCount = Math.random() * 5000;
    return ratingCount >= 1000 ? (ratingCount / 1000).toFixed(1) + "k" : Math.floor(ratingCount);
}

function calculateDiscountPercentage(price, originalPrice) {
    const priceDifference = originalPrice - price;
    return Math.floor((priceDifference / originalPrice) * 100);
}


function sortProducts(products, criteria, order) {

    if (criteria === 'rating')
        return products.sort((a, b) => b.rating.stars - a.rating.stars);

    return order < 0 ? products.sort((a, b) => a[criteria] - b[criteria])
        : products.sort((a, b) => b[criteria] - a[criteria]);
}

async function sortByCriteria(criteria) {
    const products = await fetchProducts();
    let sortedProducts;
    switch (criteria) {
        case "price-lh": sortedProducts = sortProducts(products, "price", -1);
            break;
        case "price-hl": sortedProducts = sortProducts(products, "price", 1);
            break;
        case "rating-lh": sortedProducts = sortProducts(products, "rating", -1);
        default:
            sortedProducts = products;
    }

    return sortedProducts
}

export {
    generateRatingCount,
    fetchProducts,
    calculateDiscountPercentage,
    sortProducts,
    sortByCriteria
}