import { galleryItems } from './gallery-items.js';
// Change code below this line

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
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains('gallery__image');

  if (!isGalleryImage) {
    return;
  }

  ligthboxGallery();

  const openedImage = document.querySelector('.is-opened');
  openedImage.src = event.target.dataset.source;
  openedImage.alt = event.target.alt;
}

// lightbox function
function ligthboxGallery() {
  const ligthbox = basicLightbox.create(`
    <img class="is-opened" src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg" width="1280">
`);

  ligthbox.show();

  window.addEventListener('keydown', onEscapeKey);
  function onEscapeKey(event) {
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
      ligthbox.close();
    }
  }
}
