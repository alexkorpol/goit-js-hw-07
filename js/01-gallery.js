import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const allImages = buildGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", allImages);

function buildGallery(arrGalary) {
    return galleryItems.map(({ preview, original, description }) => {
           return ` <div class="gallery__item">
                      <a class="gallery__link" href="${original}">
                              <img class="gallery__image"
                              src="${preview}"
                              data-source="${original}"
                              alt="${description}"/>
                      </a>
                    </div>`
        }).join('');
};

const clickOnGallery = (event) => {
  event.preventDefault();
  
  const selectImg = event.target;
  selectImg.src = selectImg.dataset.source;
  const instance = basicLightbox.create(`
		<img width="1280" height="853" src=${selectImg.src}>
	`);
  instance.show();

document.addEventListener("keydown", event => {
  if (event.code === "Escape") {
    instance.close()
  }
});
};
  
gallery.addEventListener("click", clickOnGallery);