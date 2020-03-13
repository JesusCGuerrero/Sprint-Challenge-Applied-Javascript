/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselParent = document.querySelector('.carousel-container')

carouselParent.append(carouselMaker());

function carouselMaker() {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const rightButton = document.createElement('div')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  rightButton.textContent = '>'
  leftButton.textContent = '<'

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  carousel.append(leftButton);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(rightButton);

  return carousel
};

// Event Stuff

let grabCarouselImgs = document.querySelectorAll('.carousel img');
let grabLeftButton = document.querySelector('.left-button');
let grabRightButton = document.querySelector('.right-button');
let currentIndex = 0;

// images
let images = Array.from(grabCarouselImgs);
const reset = () =>{
    for(let i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
}

// Show first Img
const firstImg = () => {
    reset();
    images[currentIndex].style.display = 'block';
}

firstImg();

// Left Button
const moveLeft = () => {
  reset();
  currentIndex--
  images[currentIndex].style.display = 'block';
}

grabLeftButton.addEventListener('click', () => {
  if (currentIndex === 0){
    currentIndex = images.length;
  }
  moveLeft();
})

// Right Button
const moveRight = () => {
    reset();
    currentIndex++
    images[currentIndex].style.display = 'block';
}

grabRightButton.addEventListener('click', () => {

    if(currentIndex === images.length - 1){
      currentIndex = 0;
    }
    moveRight();
});