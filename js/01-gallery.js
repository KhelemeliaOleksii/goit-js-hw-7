import { galleryItems } from './gallery-items.js';
// Change code below this line

// creating and rendering of gallary
const gallaryContainer = document.querySelector('.gallery');

// create markup for gallary
const markupGallary = [];
// requesite classes
const classLink = "gallery__link";
const classImg = "gallery__image";
const classDiv = "gallery__item";
// add gallary items to array
for (let i = 0; i < galleryItems.length; i+=1) {
    // create one item: 
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
    //add link into div
    div.append(link);
    //add item to array markupGallary
    markupGallary.push(div);        
}
// insert gallary content to HTML
gallaryContainer.append(...markupGallary);
// declare gallery event Listener
gallaryContainer.addEventListener("click", gallaryContainerListener);
// realize gallery event Listener 
function gallaryContainerListener(event) {
   const {target} = event;
   const isTargetImage = target.classList.contains(classImg);
      
   if(isTargetImage) {
      event.preventDefault();

      let isModalOpen = false;
      // create modal with basicLightbox
      // add option {onClose: ()=>document.removeEventListener('keyup', closeModal)}
      const instance = basicLightbox.create(`
         <img src="${event.target.dataset.source}" width="800" height="600">
      `, {onClose: ()=>document.removeEventListener('keyup', closeModal)});

      isModalOpen = instance.show();
      // create a gallaryListener if modal is open
      if (isModalOpen) {
         document.addEventListener('keyup', closeModal);
      } 
      // add functionality: close on click 'escape' button
      function closeModal (event) {
         if (event.key === 'Escape') {
            instance.close();
         }  
         //console.log(event.key);       
      }
   };
}

