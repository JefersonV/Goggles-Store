let image = document.querySelector('.product-image');
console.log(image);
let link = document.querySelector('.link-product-add-cart')
console.log(link)

function showBtn() {
    link.classList.toggle('cart-active')
}

//image.addEventListener("click", showBtn);