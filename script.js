// Define delivery and in-person links for each color
const paymentLinks = {
    // Phone Stand
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

    // Meili
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

    // Soap
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

// Image Carousel (Phone Stand)
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
let carouselInterval; 

function startCarousel() {
    carouselInterval = setInterval(() => {
        imageElement.style.transition = "opacity 0.5s";
        imageElement.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
        }, 500);
    }, 1500);
}

startCarousel();

// Image Carousel (Soap)
const soapImageElement = document.getElementById('soap-toggle-image');
const soapImages = [
    '../assets/shop/black_aquadry_soap_cradle.png',
    '../assets/shop/white_aquadry_soap_cradle.png',
    '../assets/shop/space_grey_aquadry_soap_cradle.png',
    '../assets/shop/blue_aquadry_soap_cradle.png',
    '../assets/shop/red_aquadry_soap_cradle.png',
    '../assets/shop/orange_aquadry_soap_cradle.png'
];
let soapCurrentIndex = 0;
let soapCarouselInterval;

function startSoapCarousel() {
    soapCarouselInterval = setInterval(() => {
        soapImageElement.style.transition = "opacity 0.5s";
        soapImageElement.style.opacity = 0;
        setTimeout(() => {
            soapCurrentIndex = (soapCurrentIndex + 1) % soapImages.length;
            soapImageElement.src = soapImages[soapCurrentIndex];
            soapImageElement.style.opacity = 1;
        }, 500);
    }, 1500);
}

startSoapCarousel();

// Color Selection for Phone Stand and Soap
let selectedColor = '';
let selectedSoapColor = '';

const colorCircles = document.querySelectorAll('.circle');
const soapColorCircles = document.querySelectorAll('.soap-circle');

colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedColor = circle.getAttribute('data-color');
        imageElement.src = `../assets/shop/${selectedColor}_3d_printed_phone_stand_preview.png`;
        clearInterval(carouselInterval);  
        imageElement.style.opacity = 1;
        colorCircles.forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});

soapColorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        selectedSoapColor = circle.getAttribute('data-color');
        soapImageElement.src = `../assets/shop/${selectedSoapColor}_aquadry_soap_cradle.png`;
        clearInterval(soapCarouselInterval);  
        soapImageElement.style.opacity = 1;
        soapColorCircles.forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});

// Order Button Logic for Phone Stand
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        const color = orderButton.getAttribute('data-color') || selectedColor;
        if (color) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery ? paymentLinks[color].delivery : paymentLinks[color].inperson;
            window.location.href = link;
        } else {
            alert('Please select a color first!');
        }
    });
});

// Order Button Logic for Soap
const soapOrderButtons = document.querySelectorAll('.soap-shop-order-button');
soapOrderButtons.forEach(soapOrderButton => {
    soapOrderButton.addEventListener('click', function() {
        const soapColor = soapOrderButton.getAttribute('data-color') || selectedSoapColor;
        if (soapColor) {
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");
            const link = isDelivery ? paymentLinks[soapColor].delivery : paymentLinks[soapColor].inperson;
            window.location.href = link;
        } else
