import { galleryItems } from './gallery-items.js';
// Change code below this line

// creating and rendering of gallary
const gallaryContainer = document.querySelector('.gallery');

const markupGallary = [];
const classLink = "gallery__link";
const classImg = "gallery__image";
const classDiv = "gallery__item";
for (let i = 0; i < galleryItems.length; i+=1) {
    // create item: 
    //create div 
    const div =  document.createElement('div');
    div.classList.add(classDiv);
    //create link
    const link = document.createElement('a');
    link.classList.add(classLink);
    link.href = galleryItems[i].original;
    // create images
    const img = document.createElement('img');
    img.src = galleryItems[i].preview;
    img.classList.add(classImg);
    img.dataset.source = galleryItems[i].original;
    img.alt = galleryItems[i].description;
    //add img into link
    link.append(img);
    //console.log( link.nodeName);
    //add link into div
    div.append(link);
    //add item to array markupGallary
    markupGallary.push(div);        
}
gallaryContainer.append(...markupGallary);

gallaryContainer.addEventListener("click", gallaryContainerListener);

function gallaryContainerListener(event) {
        const {target} = event;
        // const {currentTarget} = event;
        // console.log(currentTarget);
        const isTargetImage = target.classList.contains(classImg);
     if(isTargetImage) {
        event.preventDefault();
        event.target.src = event.target.dataset.source;
        console.log(event.target.src);
     };

}
//import * as basicLightbox from 'basiclightbox'

// console.log(instance);
// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" alt="I'm here" width="800" height="600">
// `)

// instance.show()
