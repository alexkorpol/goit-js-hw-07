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
  
  if (!selectImg.src) return;

  const instance = basicLightbox.create(`
		<img width="800" height="600" src=${selectImg.src}>
	`);
  instance.show();

  document.addEventListener("keydown", controlPressEscape.bind(document), true);
  
function controlPressEscape(even) {
  if (even.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", controlPressEscape, true);
  }
  }  
  
};

  
gallery.addEventListener("click", clickOnGallery);
console.log(galleryItems);
