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


export { generateRatingCount, fetchProducts, calculateDiscountPercentage }