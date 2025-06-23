let productList = document.getElementById("productList")

const products = [
    { label: "Gift ideas", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2025/GWs/01_JAN/MII_UK_BUBBLE_GiftIdeas_200x200._CB538335051_.jpg" },
    { label: "Cucina e cantina", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Kitchen-Feb_200x200._CB586093164_.jpg" },
    { label: "Abiti e accessori", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Apparel-Feb_200x200._CB586093164_.jpg" },
    { label: "Casa e arredo", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Home-Feb_200x200._CB586093164_.jpg" },
    { label: "Bellezza e benessere", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Beauty-Feb_200x200._CB586093164_.jpg" },
    { label: "Artigianato italiano", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Beauty-Feb_200x200._CB586093164_.jpg" },
    { label: "Tavola e cucina", img: "https://images-eu.ssl-images-amazon.com/images/G/29/ACS/Made_in_Italy/2024/Gateways/01_January/MII_IT_BUBBLE_Beauty-Feb_200x200._CB586093164_.jpg" },
];


products.map((items) => {
    console.log(items)

    let productDiv = document.createElement("div")
    let productLabel = document.createElement("h5")
    let productImg = document.createElement("img")
    productList.append(productDiv)
    productDiv.append(productImg, productLabel)
    productImg.src = items.img
    productDiv.id = "productDiv"
    productDiv.style = "margin:5px;width:20vw;height:80%;"

})

