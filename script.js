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
