// const defultImg = document.querySelector('.container .gallary .defualt img');
// const firstImg = document.querySelector('.container .gallary .mult-gall .one img');
// const seconttImg = document.querySelector('.container .gallary .mult-gall .two img');
// const thirdImg = document.querySelector('.container .gallary .mult-gall .three img');
// const forthImg = document.querySelector('.container .gallary .mult-gall .four img');

// const firstImgPath = "./img/product1/img-1.png";
// const seconttImgPath = "./img/product1/img-2.png";
// const thirdImgPath = "./img/product1/img-3.png";
// const forthImgPath = "./img/product1/img-4.png";

// firstImg.addEventListener("click", () => {
//     defultImg.src = firstImgPath;

// })
// seconttImg.addEventListener("click", () => {
//     defultImg.src = seconttImgPath;


// })
// thirdImg.addEventListener("click", () => {
//     defultImg.src = thirdImgPath;

// })
// forthImg.addEventListener("click", () => {
//     defultImg.src = forthImgPath;


// })


const defaultImg = document.querySelector('.container .gallary .defualt img');
const galleryThumbnails = document.querySelectorAll('.mult-gall img');

galleryThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        defaultImg.src = thumbnail.src;
    });
});


// for counter
// Select elements
const counterValue = document.querySelector('.counter span');
const incrementBtn = document.querySelector('.counter button:nth-child(3)');
const decrementBtn = document.querySelector('.counter button:nth-child(1)');

// Initialize counter
let count = 1;

// Increment the counter
incrementBtn.addEventListener("click", () => {
    if (count < 10)
    count++;
    updateCounter();
});

// Decrement the counter (but ensure it doesn't go below 0)
decrementBtn.addEventListener("click", () => {
    if (count > 1) {
        count--;
        updateCounter();
    }
});

// Update the displayed value
function updateCounter() {
    counterValue.textContent = count;
}



