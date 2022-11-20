// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    galleryContainer: document.querySelector(".gallery"),
}

const galleryMarkup = galleryItems
    .map(({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}" 
                alt="${description}"
            />
        </a>`)
    .join("");


refs.galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});