// Phone Stand Image Fade (existing)
const imageElement = document.getElementById('toggle-image');
const images = [
    '/assets/shop/black_3d_printed_phone_stand_preview.png',
    '/assets/shop/white_3d_printed_phone_stand_preview.png',
    '/assets/shop/space_grey_3d_printed_phone_stand_preview.png',
    '/assets/shop/blue_3d_printed_phone_stand_preview.png',
    '/assets/shop/red_3d_printed_phone_stand_preview.png',
    '/assets/shop/orange_3d_printed_phone_stand_preview.png'
];

let currentIndex = 0;

// Function to start the carousel (for phone stand)
function startCarousel() {
    setInterval(() => {
        imageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
        imageElement.style.opacity = 0;

        // After fade-out, change the image source and fade back in
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
        }, 500);  // Wait 500ms to allow for the fade-out effect
    }, 3000);  // Change image every 3 seconds
}

// Ensure the script runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (imageElement) {
        startCarousel();
    } else {
        console.error('Image element not found!');
    }
});
