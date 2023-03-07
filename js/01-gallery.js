import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const allImages = buildGallery(galleryItems);
console.log("allImages", allImages);
gallery.insertAdjacentHTML("beforeend", allImages);


function buildGallery(arrGalary) {
    return galleryItems.map(({ preview, original, description }    
        ) => {
           return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        }).join('');
};

const clickOnGallery = (e) => {
    e.preventDefault();
}
    gallery.addEventListener("click", clickOnGallery);
    
