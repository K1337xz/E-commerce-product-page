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
		for (let u = 0; u < thumbnailItemsFull.length; u++) {
			thumbnailItemsFull[u].classList.remove("active");
		}
		thumbnailItemsFull[z].classList.add("active");
		let src = thumbnailItemsFull[z].src.replace("-thumbnail", "");
		mainimageGalleryFull.src = `${src}`;
	});
}
mainimageGallery.addEventListener("click", () => {
	let windowWidth = window.innerWidth;
	if (windowWidth <= 700) {
		openFull.style.display = `none`;
	} else {
		openFull.style.display = `block`;
		openFull.style.left = `0`;
		mainimageGalleryFull.src = mainimageGallery.src;
		let replaceFull = mainimageGalleryFull.src.replace(
			".jpg",
			"-thumbnail.jpg"
		);
		for (let c = 0; c < thumbnailItemsFull.length; c++) {
			thumbnailItemsFull[c].classList.remove("active");
			if (replaceFull === thumbnailItemsFull[c].src) {
				thumbnailItemsFull[c].classList.add("active");
			}
		}
	}
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
	let replaceTriggersRight = mainimageGalleryFull.src.replace(
		".jpg",
		"-thumbnail.jpg"
	);
	for (let v = 0; v < thumbnailItemsFull.length; v++) {
		thumbnailItemsFull[v].classList.remove("active");
		if (replaceTriggersRight === thumbnailItemsFull[v].src) {
			thumbnailItemsFull[v].classList.add("active");
		}
	}
});
leftTrigger.addEventListener("click", () => {
	click--;
	if (click < 1) {
		click = 4;
	}
	mainimageGalleryFull.src = `images/image-product-${click}.jpg`;
	let replaceTriggersRight = mainimageGalleryFull.src.replace(
		".jpg",
		"-thumbnail.jpg"
	);
	for (let b = 0; b < thumbnailItemsFull.length; b++) {
		thumbnailItemsFull[b].classList.remove("active");
		if (replaceTriggersRight === thumbnailItemsFull[b].src) {
			thumbnailItemsFull[b].classList.add("active");
		}
	}
});
//close fullscreen

closeFullscreen.addEventListener("click", () => {
	openFull.style.display = `none`;
});

//close fullscreen by escape key
window.addEventListener("keydown", (e) => {
	if (e.key === `Escape`) {
		openFull.style.display = `none`;
	} else return;
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
//close shopcart
const conta = document.querySelector(".container");
conta.addEventListener("click", () => {
	if (dropDown.classList.contains("show")) {
		console.log("chuj");
		dropDown.classList.remove("show");
		dropDown.style.display = `none`;
	} else return;
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

//mobile gallery arrows
const arrowRightMobile = document.querySelector(".arrowRightMobile");
const arrowLeftMobile = document.querySelector(".arrowLeftMobile");
let arrowClick = 1;
arrowRightMobile.addEventListener("click", () => {
	arrowClick++;
	if (arrowClick > 4) {
		arrowClick = 1;
	}
	mainimageGallery.src = `images/image-product-${arrowClick}.jpg`;
});

arrowLeftMobile.addEventListener("click", () => {
	arrowClick--;
	if (arrowClick < 1) {
		arrowClick = 4;
	}
	mainimageGallery.src = `images/image-product-${arrowClick}.jpg`;
});
//close open mobile nav

const closeMobile = document.querySelector(".closeMenuMobile");
const openMobile = document.querySelector(".navMenu");
const mainNav = document.querySelector(".mainNav");

openMobile.addEventListener("click", () => {
	mainNav.classList.add("activeMobile");
});

closeMobile.addEventListener("click", () => {
	mainNav.classList.remove("activeMobile");
});

//swipe left/right
let startPositionX;
let endPosisitonX;
let swipe = 1;
function startPosition(ev) {
	startPositionX = ev.touches[0].clientX;
	/* console.log(startPositionX); */
}
function endPosisiton(ev) {
	endPosisitonX = ev.changedTouches[0].clientX;
	let swipeSide = startPositionX - endPosisitonX;
	if (swipeSide > 0 && swipeSide > 50) {
		swipe++;
		if (swipe > 4) {
			swipe = 1;
		}
		mainimageGallery.src = `images/image-product-${swipe}.jpg`;
		console.log("left", swipe);
	} else if (swipeSide < 0 && swipeSide < -50) {
		console.log("right");
	}
	console.log(swipeSide);
}
mainimageGallery.addEventListener("touchstart", startPosition);
mainimageGallery.addEventListener("touchend", endPosisiton);
