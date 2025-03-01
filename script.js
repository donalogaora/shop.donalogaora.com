// Phone Stand Image Fade (existing)
const imageElement = document.getElementById('toggle-image');
const images = [
    '../assets/shop/black_3d_printed_phone_stand_preview.png',
    '../assets/shop/white_3d_printed_phone_stand_preview.png',
    '../assets/shop/space_grey_3d_printed_phone_stand_preview.png',
    '../assets/shop/blue_3d_printed_phone_stand_preview.png',
    '../assets/shop/red_3d_printed_phone_stand_preview.png',
    '../assets/shop/orange_3d_printed_phone_stand_preview.png'
];
let currentIndex = 0;
let carouselInterval; // Store the interval for the image carousel
let isCarouselActive = true; // Track if the carousel is active

// Function to start the carousel (for phone stand)
function startCarousel() {
    if (isCarouselActive) {
        carouselInterval = setInterval(() => {
            imageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            imageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Start the carousel initially
startCarousel();

// SOAP Image Carousel
const soapImageElement = document.getElementById('soap-toggle-image');
const soapImages = [
    '../assets/shop/soap_black_3d_printed_phone_stand_preview.png',
    '../assets/shop/soap_white_3d_printed_phone_stand_preview.png',
    '../assets/shop/soap_space_grey_3d_printed_phone_stand_preview.png',
    '../assets/shop/soap_blue_3d_printed_phone_stand_preview.png',
    '../assets/shop/soap_red_3d_printed_phone_stand_preview.png',
    '../assets/shop/soap_orange_3d_printed_phone_stand_preview.png'
];
let soapCurrentIndex = 0;
let soapCarouselInterval; // Store the interval for the soap image carousel
let isSoapCarouselActive = true; // Track if the soap carousel is active

// Function to start the soap carousel
function startSoapCarousel() {
    if (isSoapCarouselActive) {
        soapCarouselInterval = setInterval(() => {
            soapImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            soapImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                soapCurrentIndex = (soapCurrentIndex + 1) % soapImages.length;
                soapImageElement.src = soapImages[soapCurrentIndex];
                soapImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Start the soap carousel initially
startSoapCarousel();

// Color selection logic for Soap and Phone Stand
let selectedColor = ''; // Store the selected color for phone stand
let selectedSoapColor = ''; // Store the selected color for soap

// Select the color circles for phone stand and soap
const colorCircles = document.querySelectorAll('.circle');
const soapColorCircles = document.querySelectorAll('.soap-circle');
const toggleImage = document.getElementById('toggle-image');
const soapToggleImage = document.getElementById('soap-toggle-image');

// Loop through each color circle and add a click event listener for phone stand
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedColor = circle.getAttribute('data-color');
        
        // Update the image source based on the color selected for phone stand
        toggleImage.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.jpg`;
        
        // Stop the image carousel once a color is selected
        clearInterval(carouselInterval);  
        isCarouselActive = false;
        imageElement.style.opacity = 1;

        // Update the selected circle styling
        colorCircles.forEach(c => c.classList.remove('selected')); 
        circle.classList.add('selected');
    });
});

// Loop through each soap color circle and add a click event listener
soapColorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedSoapColor = circle.getAttribute('data-color');
        
        // Update the image source based on the soap color selected
        soapToggleImage.src = `/assets/shop/soap_${selectedSoapColor}_3d_printed_phone_stand_preview.jpg`;
        
        // Stop the image carousel once a soap color is selected
        clearInterval(soapCarouselInterval);  
        isSoapCarouselActive = false;
        soapImageElement.style.opacity = 1;

        // Update the selected circle styling
        soapColorCircles.forEach(c => c.classList.remove('selected')); 
        circle.classList.add('selected');
    });
});

// Add click event listener to all order buttons (for phone stand)
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        const colorFromButton = orderButton.getAttribute('data-color');
        const color = colorFromButton || selectedColor;

        if (color) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery ? paymentLinks[color].delivery : paymentLinks[color].inperson;
            window.location.href = link;
        } else {
            alert('Please select a color first!');
        }
    });
});

// Add click event listener to all order buttons (for soap)
const soapOrderButtons = document.querySelectorAll('.soap-shop-order-button');
soapOrderButtons.forEach(soapOrderButton => {
    soapOrderButton.addEventListener('click', function() {
        const soapColorFromButton = soapOrderButton.getAttribute('data-color');
        const soapColor = soapColorFromButton || selectedSoapColor;

        if (soapColor) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery ? soapPaymentLinks[soapColor].delivery : soapPaymentLinks[soapColor].inperson;
            window.location.href = link;
        } else {
            alert('Please select a soap color first!');
        }
    });
});

// Define delivery and in-person links for each soap color
const soapPaymentLinks = {
    soap_black: {
        delivery: "https://www.paypal.com/ncp/payment/ACWBJUEK4S8SW",
        inperson: "https://www.paypal.com/ncp/payment/37WRLULFKHZWA"
    },
    soap_white: {
        delivery: "https://www.paypal.com/ncp/payment/N2NPTQVLY3HZN",
        inperson: "https://www.paypal.com/ncp/payment/JYNDV3SQPJBXQ"
    },
    soap_space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/GS2L84FKRDM9G",
        inperson: "https://www.paypal.com/ncp/payment/UZMTHDNWZR2V6"
    },
    soap_blue: {
        delivery: "https://www.paypal.com/ncp/payment/TXSHBCPD65PS6",
        inperson: "https://www.paypal.com/ncp/payment/4C7T3CVJZ4PCQ"
    },
    soap_red: {
        delivery: "https://www.paypal.com/ncp/payment/TS7T8QRH67L64",
        inperson: "https://www.paypal.com/ncp/payment/DZUVZQT96FFUA"
    },
    soap_orange: {
        delivery: "https://www.paypal.com/ncp/payment/ARL7F5GXSJNDN",
        inperson: "https://www.paypal.com/ncp/payment/E5ZZCW82CLQJN"
    }
};

// Function to scroll to specific product section
function scrollToProduct(productId) {
    const element = document.getElementById(productId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

