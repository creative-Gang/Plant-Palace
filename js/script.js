



    // fetch('outdoor.json')
    // .then(response2 => response2.json())
    // .then(jsonData2 => {
    //     data2 = jsonData2; 
    //     const griid = document.querySelector('.container2');

    //     data2.forEach((product, i) => {
    //         const productElement2 = document.createElement('div2');
    //         productElement2.className = 'card';

    //         productElement2.innerHTML = `
    //             <img src="${product.images}" alt="${product.name}">
    //             <p>Name:  <span>${product.name}</span></p>
    //             <p>Price: <span>${product.price}</span></p>
    //             <p>Country: <span>${product.country}</span></p>
    //             <button class="add-to-cart-btn" onclick='addtocart(${i})'>Add to Cart</button>
    //         `;
    //         griid.appendChild(productElement2);
    //     });
    // })
    // .catch(error => console.error('Error loading JSON:', error));


    

















let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 250) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (window.scrollY > 250) {
        scrollTop.style.display = 'initial';
    } else {
        scrollTop.style.display = 'none';
    }

}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

let countDate = new Date('Aug 8, 2023 00:00:00').getTime();

function countDown() {

    let now = new Date().getTime();

    gap = countDate - now;

    let second = -1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function () {
    countDown();
}, 1000)

// the add to cart function
const addToCartButtons = document.querySelectorAll('.box .btn');

let cartItems = [];

function show(){
    if(document.getElementById("containers").style.display=="none"){
     document.getElementById("containers").style.display="flex";
    }else{
     document.getElementById("containers").style.display="none";
    }
 }
 
 function addtocart(index) {
     console.log('Adding product to cart:', index);
     const selectedProduct = data[index];
     cart.push(selectedProduct);
     displaycart();
 }
 
 // Function to remove product from cart
 function delElement(index) {
     cart.splice(index, 1);
     displaycart();
 }
 
 // Function to display cart
 function displaycart() {
     console.log('Displaying cart...');
     let j = 0;
     let cartHTML = '';
 
     document.getElementById("count").innerHTML = cart.length;
 
     if (cart.length === 0) {
         document.getElementById('cartItem').innerHTML = "Your cart is empty";
         document.getElementById("total").innerHTML = "$ " + 0 + ".00";
     } else {
         total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0);
 
         cartHTML = cart.map((product, index) => `
             <div class='cart-item'>
                 <div class='row-img'>
                     <img class='rowimg' src=${product.images}>
                     <p>${product.name}</p>
                     <p>${product.price}.00</p>
                     <i class='fas fa-trash' onclick='delElement(${j++})'></i>
                 </div>
             </div>
         `).join('');
 
         document.getElementById('cartItem').innerHTML = cartHTML;
         document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
     }
 }
 
///.add-to-favorites

// const addToheartButtons = document.querySelectorAll('.box .btn');

// let heartItems = [];

// function addToheart(event) {
//     const clickedButton = event.target;
//     const box = clickedButton.closest('.box');
//     const imgSrc = box.querySelector('img').src;
//     const title = box.querySelector('h3').textContent;
//     const price = box.querySelector('.price').textContent;
    
//     const item = {
//         imgSrc,
//         title,
//         price
//     };

//     cartItems.push(item);
//     updateCartCounter();
// }


// function updateCartCounter() {
//     const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
// }
//     addToFavoritesButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             this.classList.toggle('active');
//         });
//     });
