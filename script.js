// Phone Stand Image Fade
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

// Function to start the carousel
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

// AquaDry Soap Cradle Image Fade
const soapImageElement = document.getElementById('toggle-soap-image');
const soapImages = [
    '/assets/shop/black_aquadry_soap_cradle.png',
    '/assets/shop/white_aquadry_soap_cradle.png',
    '/assets/shop/space_grey_aquadry_soap_cradle.png',
    '/assets/shop/blue_aquadry_soap_cradle.png',
    '/assets/shop/red_aquadry_soap_cradle.png',
    '/assets/shop/orange_aquadry_soap_cradle.png'
];
let soapIndex = 0;
let soapCarouselInterval; // Store the interval for the soap carousel
let isSoapCarouselActive = true; // Track if the soap carousel is active

// Function to start the soap carousel
function startSoapCarousel() {
    if (isSoapCarouselActive) {
        soapCarouselInterval = setInterval(() => {
            soapImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            soapImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                soapIndex = (soapIndex + 1) % soapImages.length;
                soapImageElement.src = soapImages[soapIndex];
                soapImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Start the soap carousel initially
startSoapCarousel();

// Define delivery and in-person links for each color
const paymentLinks = {
    black: {
        delivery: "https://www.paypal.com/ncp/payment/G3UNG7URVGTSY",
        inperson: "https://www.paypal.com/ncp/payment/VHL6BB6NFB5R8"
    },
    white: {
        delivery: "https://www.paypal.com/ncp/payment/YDUY83NNRPYZE",
        inperson: "https://www.paypal.com/ncp/payment/6XWV77VL9NZXC"
    },
    space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/JG62G4S9BN9F6",
        inperson: "https://www.paypal.com/ncp/payment/A7J7T4JGBRKT6"
    },
    blue: {
        delivery: "https://www.paypal.com/ncp/payment/TDQ26KXWKTNU8",
        inperson: "https://www.paypal.com/ncp/payment/433RBJJS2VRQL"
    },
    red: {
        delivery: "https://www.paypal.com/ncp/payment/FX2CVP3MKK78S",
        inperson: "https://www.paypal.com/ncp/payment/NNH76WM8W9YLU"
    },
    orange: {
        delivery: "https://www.paypal.com/ncp/payment/NZ83GKRKY2XLY",
        inperson: "https://www.paypal.com/ncp/payment/QXZD8DFPEL6ME"
    },
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

// Color selection logic for phone stand
let selectedPhoneColor = ''; // Store the selected phone stand color
let selectedSoapColor = ''; // Store the selected soap cradle color

// Select the color circles for phone and soap
const colorCircles = document.querySelectorAll('.circle');
const phoneImageElement = document.getElementById('toggle-image');
const soapImageElement = document.getElementById('toggle-soap-image');

// Loop through each color circle and add a click event listener
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        const selectedColor = circle.getAttribute('data-color');
        if (circle.getAttribute('data-product') === 'phone') {
            selectedPhoneColor = selectedColor;
            phoneImageElement.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.png`; // Update phone image
            clearInterval(carouselInterval); // Stop carousel for phone
            isCarouselActive = false;
            phoneImageElement.style.opacity = 1; // Ensure the image is fully visible immediately
        } else if (circle.getAttribute('data-product') === 'soap') {
            selectedSoapColor = selectedColor;
            soapImageElement.src = `/assets/shop/${selectedColor}_aquadry_soap_cradle.png`; // Update soap image
            clearInterval(soapCarouselInterval); // Stop carousel for soap
            isSoapCarouselActive = false;
            soapImageElement.style.opacity = 1; // Ensure the image is fully visible immediately
        }
        colorCircles.forEach(c => c.classList.remove('selected')); // Remove "selected" class from all circles
        circle.classList.add('selected'); // Add "selected" class to the clicked circle
    });
});

// Add click event listener to all order buttons
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        const colorFromButton = orderButton.getAttribute('data-color');
        const product = orderButton.getAttribute('data-product');
        const color = colorFromButton || (product === 'phone' ? selectedPhoneColor : selectedSoapColor);

        if (color && paymentLinks[color]) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery ? paymentLinks[color].delivery : paymentLinks[color].inperson;
            window.location.href = link;
        } else {
            alert('Please select a valid color first!');
        }
    });
});

// Function to scroll to specific product section
function scrollToProduct(productId) {
    const element = document.getElementById(productId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
