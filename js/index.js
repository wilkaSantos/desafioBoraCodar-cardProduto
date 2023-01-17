
const rotateButton = document.querySelector('.rotationButton');
const closeButton = document.querySelector('.closeButton');
const showcaseItem = document.querySelector('.product');

rotateButton.addEventListener('click', changeImageClose);
closeButton.addEventListener('click', changeImageRotate);

function changeImageClose(){
    closeButton.classList.remove('disable');
    rotateButton.classList.add('disable');
    showcaseItem.src="../image/sofaRotation.gif";
}

function changeImageRotate(){
    rotateButton.classList.remove('disable');
    closeButton.classList.add('disable');
    showcaseItem.src="../image/image 2.png";
}

