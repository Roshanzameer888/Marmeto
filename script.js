// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // Image switching on thumbnail click
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    // Quantity increment and decrement
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const quantityInput = document.querySelector('.quantity-selector input');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 99) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Optional: Add to cart button functionality
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const selectedQuantity = quantityInput.value;
        const selectedSize = document.querySelector('input[name="size"]:checked').value;
        const selectedColor = getComputedStyle(document.querySelector('.color-box[style*="background-color"]')).backgroundColor;

        // For demo purposes, log the selected options to the console
        console.log(`Added to cart: ${selectedQuantity} x ${selectedSize} size, color ${selectedColor}`);
    });

});
