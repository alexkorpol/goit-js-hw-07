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

  document.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close();
      console.log("press Escape");
    };
    document.removeEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close();
      console.log("unpress Escape");
    }
  }, false)
  }, false);
  
}
// const pressEsc = (event) => {
//   if (event.code === "Escape") {
//     instance.close();
//     console.log("press Escape");
//     document.removeEventListener("keydown", pressEsc);
//   }
// }


// function pressEsc(event) {
//   if (event.code === "Escape") {
//     return this.instance.close()
//   }
//   }
//   };
  
gallery.addEventListener("click", clickOnGallery);
console.log(galleryItems);

