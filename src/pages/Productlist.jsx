
const productsArray = [
    {
        id: "1",
        title: "Peets",
        img: "https://www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002//www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002&w=900",
        price: 9.99
    },
    {
        id: "2",
        title: "Original Kenya",
        img: "https://img.freepik.com/free-photo/plastic-cup-coffee-bag_23-2147729442.jpg?size=626&ext=jpg",
        price: 7.99
    },
    {
        id: "3",
        title: "Lab Release Blend",
        img: "https://img.freepik.com/free-psd/coffee-bags-mockup-gravity-psd_15879-598.jpg?w=1480&t=st=1711725159~exp=1711725759~hmac=64ea8f1b1d8b198f11fba989d23bfed032f27127c48c2b7d55ebbbd01d7b2f25",
        price: 11.99
    },
    {
        id: "4",
        title: "Organic Beans",
        img: "https://img.freepik.com/free-vector/hand-drawn-coffee-label-packaging_23-2149730748.jpg?w=1480&t=st=1711725378~exp=1711725978~hmac=8112e7c26ac9d453f53ed2bc4adc24d109a6e3b785e6bda54f71f982c9fee40f",
        price: 8.99
    },
    {
        id: "5",
        title: "Brazil Roast",
        img: "https://img.freepik.com/premium-psd/mockup-coffee-cups-bag_23-2147758197.jpg?w=1480",
        price: 14.99
    },
    {
        id: "6",
        title: "Nero",
        img: "https://img.freepik.com/premium-psd/paper-coffee-bag-packaging-mockup_47987-4039.jpg?w=1380",
        price: 10.99
    },
    {
        id: "7",
        title: "Espresso Beans",
        img: "https://img.freepik.com/free-psd/colorful-product-packaging-sachet-mockup_53876-76388.jpg?w=1480&t=st=1711725646~exp=1711726246~hmac=b6afe706e63584c6ecc3a8ce08b9947a713d53b7ef6b65fe3ce7317de25cc8f4",
        price: 12.99
    },
    {
        id: "8",
        title: "Latte",
        img: "https://img.freepik.com/premium-psd/free-psd-coffee-packaging-mockup-template_1047433-40.jpg?w=1060",
        price: 9.99
    },
    {
        id: "9",
        title: "Italian Blend",
        img: "https://img.freepik.com/premium-psd/eco-packaging-coffee-paper-bag-mockup-premium-psd_311128-90.jpg?w=1480",
        price: 15.99
    },
    {
        id: "10",
        title: "Decaffeinated",
        img: "https://img.freepik.com/premium-psd/glossy-paper-coffee-bag-branding-mockup_47987-10010.jpg?w=826",
        price: 9.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };