const taxRate = 0.18;
const shippingPrice = 15.00;

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    //* sessionStorage.setItem("taxRate", taxRate);
    //* sessionStorage.setItem("shippingPrice", shippingPrice);

});
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
    if (event.target.className == "minus") {
        console.log("minus button click");
    } else if (event.target.classList.contains("plus")) {
        console.log("plus button click");
    }
})