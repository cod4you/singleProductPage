

const defaultImg = document.querySelector('.container .gallary .defualt img');
const galleryThumbnails = document.querySelectorAll('.mult-gall img');

galleryThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        defaultImg.src = thumbnail.src;
    });
});

const allImgDiv = document.querySelectorAll('.mult-gall div');
allImgDiv.forEach(thumbnail =>{
    thumbnail.addEventListener('click',() =>{

        allImgDiv.forEach(div => div.style.border = "none")
      thumbnail.style.border = "3px solid  #ff8822";
    })
})






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



