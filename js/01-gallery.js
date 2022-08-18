import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

// markup function
function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" target="_self" title="Click to enlarge" rel="nofollow, noreferrer" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
  </div>
  `;
    })
    .join('');
}

// click event function
function onGalleryContainerClick(event) {
  const isGalerryImage = event.target.classList.contains('.gallery__image');
  const originalGalleryImageSource = event.target.dataset.source;
  console.dir(event.target);

  if (!isGalerryImage) {
    return;
  }

  return console.dir(event.target.dataset.source);
}

// add active class on item function
function addActiveClassOnItem(item) {
  item.classList.add('is-active');
}

// remove active class from item function
function removeActiveClassOnItem() {
  const currentActiveItem = document.querySelector('.gallery__item.is-active');

  if (currentActiveItem) {
    currentActiveItem.classList.remove('.is-active');
  }
}

//set bcg color function
function setBodyBcgColor(color) {
  document.body.style.backgroundColor = color;
}

setBodyBcgColor('beige');
