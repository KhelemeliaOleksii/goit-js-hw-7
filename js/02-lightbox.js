import { galleryItems } from './gallery-items.js';
// Change code below this line

//create markup of the gallary
const classImg = 'gallery__image';
const classLink = 'gallery__item';
const markupGallary = galleryItems
        .map(({preview:previewImg, original:originalImg, description:alt}) => 
            `
                <a class="${classLink}" href="${originalImg}">
                    <img class="${classImg}" src="${previewImg}" alt="${alt}"/>
                </a>
            `)
        .join('');
// /////////////////////////////////        
// // Думав що, зі стандартною розміткою не піде, тому зробив цей код 
// // Виявилася гарна практика
// // Щоб перевірити його роботу, необхідно 
// // розкоментувати цю частину
// // і закоментувати рядок (55) після цього коментаря 
// /////////////////////////////////
// // Оскільки для підключення бібліотеки SimpleLightbox потрібна розмітка, типу
// /* <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>
//  */
// // а у нашому HTML замість div розміщена ul
// /* <!-- Add gallery items to this list -->
//     <ul class="gallery"></ul>
//  */
// //перейдемо до необхідної розмітки: ul -> div 
// const gallaryContainerUl = document.querySelector(".gallery");
// const gallaryContainer = replaceTag(gallaryContainerUl, 'div');
// /* function replaceTag:
//      in: element - old HTML element, 
//          newTag - new tag of new HTML element
//      do: copy attributes and context from old HTML element "element"
//             to HTML element with new tag "newTag"
//          insert new HTML element instead of old one
//      out: link on new HTML element
// */
// function replaceTag (element, newTag) {
//     const newElement = document.createElement(newTag);
//     // copy attributes
//     for (const propes of [...element.attributes]) {
//         newElement.setAttribute(propes.name, propes.value);
//     }
//     // copy context
//     newElement.innerHTML = element.innerHTML;
//     element.parentNode.insertBefore( newElement, element );
//     element.parentNode.removeChild( element );
//     return newElement;
// }
const gallaryContainer = document.querySelector(".gallery");

// insert the gallery into HTML
gallaryContainer.innerHTML = markupGallary;

const gallery = new SimpleLightbox('.gallery a',{captionType:"attr", captionsData:'alt', captionDelay:250});
gallery.on('show.simplelightbox');