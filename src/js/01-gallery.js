import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const gallery = makeGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", gallery);
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

function makeGallery(galleryData) {
  return galleryData
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

console.log(galleryItems);
