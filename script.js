//number imput
const numberinputButtons = document.querySelectorAll(".toCart button");
const valueofcartInput = document.querySelector("#amountCart");
let count = 0;
for (let i = 0; i < numberinputButtons.length; i++) {
	numberinputButtons[i].addEventListener("click", (e) => {
		let id = numberinputButtons[i].id;
		if (id === `increment`) {
			count++;
			valueofcartInput.value = count;
			e.preventDefault();
		} else if (id === `decrement`) {
			count--;
			valueofcartInput.value = count;
			e.preventDefault();
		}
	});
}
//gallery
const mainimageGallery = document.querySelector("#firstImg");
const thumbnailItems = document.querySelectorAll(".thumbnails img");

for (let j = 0; j < thumbnailItems.length; j++) {
	thumbnailItems[j].addEventListener("click", () => {
		for (let x = 0; x < thumbnailItems.length; x++) {
			thumbnailItems[x].classList.remove("active");
		}
		thumbnailItems[j].classList.add("active");
		let src = thumbnailItems[j].src.replace("-thumbnail", "");
		mainimageGallery.src = `${src}`;
	});
}
//fullscreen gallery
const mainimageGalleryFull = document.querySelector("#fistImgFullscreen");
const thumbnailItemsFull = document.querySelectorAll(".thumbnailsFull img");
for (let z = 0; z < thumbnailItemsFull.length; z++) {
	thumbnailItemsFull[z].addEventListener("click", () => {
		let src = thumbnailItemsFull[z].src.replace("-thumbnail", "");
		mainimageGalleryFull.src = `${src}`;
	});
}
mainimageGallery.addEventListener("click", () => {
	openFull.style.display = `block`;
	openFull.style.left = `0`;
	mainimageGalleryFull.src = mainimageGallery.src;
});
//arrow change image
const leftTrigger = document.querySelector(".leftArrow");
const rightTrigger = document.querySelector(".rightArrow");
const closeFullscreen = document.querySelector(".closeGallery");
const openFull = document.querySelector(".gallery-fullscren");
let click = 1;

rightTrigger.addEventListener("click", () => {
	click++;
	if (click > 4) {
		click = 1;
	}
	mainimageGalleryFull.src = `images/image-product-${click}.jpg`;
});
leftTrigger.addEventListener("click", () => {
	click--;
	if (click < 1) {
		click = 4;
	}
	mainimageGalleryFull.src = `images/image-product-${click}.jpg`;
});

closeFullscreen.addEventListener("click", () => {
	openFull.style.display = `none`;
});
//open shop cart

const cartToggle = document.querySelector(".dropdowncart");
const dropDown = document.querySelector(".dropdown");
cartToggle.addEventListener("click", () => {
	if (dropDown.classList.contains("show")) {
		dropDown.classList.remove("show");
		dropDown.style.display = `none`;
	} else {
		dropDown.style.display = `flex`;
		dropDown.classList.add("show");
	}
});

//add to cart
const addtoCartButton = document.querySelector(".buttonCart");
const shopcart = document.querySelector(".shopcartNumber");
const emptyCart = document.querySelector(".empty");
const totalPrice = document.querySelector(".price");
const valuecart = document.querySelector(".valueCart");
const showItemcart = document.querySelector(".selecteditemimage");
const checkoutWrapp = document.querySelector(".checkout");
const chcekBtn = document.querySelector(".checkoutBtn");
let shopcartValue = document.querySelector(".shopcartNumber sub");

function addtoCart(e) {
	if (valueofcartInput.value > 0) {
		shopcart.style.display = `flex`;
		showItemcart.style.display = `flex`;
		emptyCart.style.display = `none`;
		shopcartValue.innerHTML = `${valueofcartInput.value}`;
		valuecart.innerHTML = `${valueofcartInput.value}`;
		//total price
		let totalCost = 125 * valueofcartInput.value;
		totalPrice.innerHTML = `$${totalCost}.00`;
		checkoutWrapp.style.display = `flex`;
	} else {
		alert("You need to have 1 item in cart");
	}
	e.preventDefault();
}

addtoCartButton.addEventListener("click", addtoCart);

//delete items in cart
const deleteItems = document.querySelector(".deleteItems");
deleteItems.addEventListener("click", () => {
	shopcart.style.display = `none`;
	showItemcart.style.display = `none`;
	checkoutWrapp.style.display = `none`;
	emptyCart.style.display = `flex`;
});

//complite order
chcekBtn.addEventListener("click", (e) => {
	window.location.reload();
});
