import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// markup function
function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item"
      target="_self"
      rel="nofollow, noreferrer"
      title="Click to enlarge" 
      href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`;
    })
    .join('');
}

// lightbox
var lightbox = new SimpleLightbox('.gallery a', {
  //   options
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
});
