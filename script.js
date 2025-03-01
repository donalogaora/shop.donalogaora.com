// Color selection logic for Phone Stand
let selectedPhoneStandColor = null; // Initially no color is selected
const phoneStandColorCircles = document.querySelectorAll('.circle');
const phoneStandImageElement = document.getElementById('toggle-image');

const phoneStandImages = {
    black: '../assets/shop/black_3d_printed_phone_stand_preview.png',
    white: '../assets/shop/white_3d_printed_phone_stand_preview.png',
    space_grey: '../assets/shop/space_grey_3d_printed_phone_stand_preview.png',
    blue: '../assets/shop/blue_3d_printed_phone_stand_preview.png',
    red: '../assets/shop/red_3d_printed_phone_stand_preview.png',
    orange: '../assets/shop/orange_3d_printed_phone_stand_preview.png'
};

let phoneStandCurrentIndex = 0;
let phoneStandCarouselInterval;
let phoneStandIsCarouselActive = true;

// Color selection event for Phone Stand
phoneStandColorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedPhoneStandColor = circle.getAttribute('data-color');
        phoneStandImageElement.src = phoneStandImages[selectedPhoneStandColor]; // Change the image based on selected color
        
        // Stop the carousel
        clearInterval(phoneStandCarouselInterval);
        phoneStandIsCarouselActive = false;
        
        // Ensure the image is visible immediately
        phoneStandImageElement.style.opacity = 1;

        // Update the selected color circle
        phoneStandColorCircles.forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});

// Start the phone stand carousel
function startPhoneStandCarousel() {
    if (phoneStandIsCarouselActive) {
        phoneStandCarouselInterval = setInterval(() => {
            phoneStandImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            phoneStandImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                phoneStandCurrentIndex = (phoneStandCurrentIndex + 1) % Object.keys(phoneStandImages).length;
                phoneStandImageElement.src = phoneStandImages[Object.keys(phoneStandImages)[phoneStandCurrentIndex]];
                phoneStandImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Color selection logic for Soap Cradle
let selectedSoapCradleColor = null; // Initially no color is selected
const soapCradleColorCircles = document.querySelectorAll('.soap-circle');
const soapCradleImageElement = document.getElementById('soap-toggle-image');

const soapCradleImages = {
    black: '../assets/shop/black_aquadry_soap_cradle.png',
    white: '../assets/shop/white_aquadry_soap_cradle.png',
    space_grey: '../assets/shop/space_grey_aquadry_soap_cradle.png',
    blue: '../assets/shop/blue_aquadry_soap_cradle.png',
    red: '../assets/shop/red_aquadry_soap_cradle.png',
    orange: '../assets/shop/orange_aquadry_soap_cradle.png'
};

let soapCradleCurrentIndex = 0;
let soapCradleCarouselInterval;
let soapCradleIsCarouselActive = true;

// Color selection event for Soap Cradle
soapCradleColorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedSoapCradleColor = circle.getAttribute('data-color');
        soapCradleImageElement.src = soapCradleImages[selectedSoapCradleColor]; // Change the image based on selected color

        // Stop the carousel
        clearInterval(soapCradleCarouselInterval);
        soapCradleIsCarouselActive = false;

        // Ensure the image is visible immediately
        soapCradleImageElement.style.opacity = 1;

        // Update the selected color circle
        soapCradleColorCircles.forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});

// Start the soap cradle carousel
function startSoapCradleCarousel() {
    if (soapCradleIsCarouselActive) {
        soapCradleCarouselInterval = setInterval(() => {
            soapCradleImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            soapCradleImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                soapCradleCurrentIndex = (soapCradleCurrentIndex + 1) % Object.keys(soapCradleImages).length;
                soapCradleImageElement.src = soapCradleImages[Object.keys(soapCradleImages)[soapCradleCurrentIndex]];
                soapCradleImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Start both carousels initially
startPhoneStandCarousel();
startSoapCradleCarousel();

// Order button logic for both products
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        let color;
        if (orderButton.id === "shop-order-button" && selectedPhoneStandColor) {
            color = selectedPhoneStandColor;
        } else if (orderButton.id === "soap-order-button" && selectedSoapCradleColor) {
            color = selectedSoapCradleColor;
        }

        if (color) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery
                ? paymentLinks[color].delivery
                : paymentLinks[color].inperson;

            window.location.href = link;
        } else {
            alert('Please select a color first!');
        }
    });
});

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
    // Adjusting these links to be for the Phone Stand (as indicated)
    meili_black: {
        delivery: "https://www.paypal.com/ncp/payment/CQX94FPFZKPPJ",
        inperson: "https://www.paypal.com/ncp/payment/CAQPPNUFQ52VE"
    },
    meili_white: {
        delivery: "https://www.paypal.com/ncp/payment/2UH2UQQZLL4UQ",
        inperson: "https://www.paypal.com/ncp/payment/4FAX3LYRKRQGU"
    },
    meili_space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/DRAWCJUAVMQL4",
        inperson: "https://www.paypal.com/ncp/payment/3UPT8XM9XURXC"
    },
    meili_blue: {
        delivery: "https://www.paypal.com/ncp/payment/3MFR5SLXXCTHJ",
        inperson: "https://www.paypal.com/ncp/payment/Y7F698E9N487S"
    },
    meili_red: {
        delivery: "https://www.paypal.com/ncp/payment/VYH6PSMP3KWSL",
        inperson: "https://www.paypal.com/ncp/payment/YPCWVBLY7PVQ2"
    },
    meili_orange: {
        delivery: "https://www.paypal.com/ncp/payment/MYVK7KLVW5EMQ",
        inperson: "https://www.paypal.com/ncp/payment/BTGY96QNA4TF8"
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
   
