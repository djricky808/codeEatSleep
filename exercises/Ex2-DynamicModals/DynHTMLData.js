let card = document.getElementById('portfolio');
let modal = document.getElementById('modal');

let portfolioData = [
  { 
    id: 'web-1', 
    type: 'Web Development',
    project: 'Art Website',
    title: 'My Awesome Art Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'web-2',
    type: 'Web Development',
    project: 'Skate Website',
    title: 'My Awesome Skate Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'web-3',
    type: 'Web Development',
    project: 'Eating Website',
    title: 'My Awesome Eating Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'ui-1',
    type: 'UI Design',
    project: 'Cool Design',
    title: 'My Awesome Cool Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'app-1',
    type: 'App Development',
    project: 'Game App',
    title: 'My Awesome Game App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'app-2',
    type: 'App Development',
    project: 'Gambling App',
    title: 'My Awesome Gambling App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'app-3',
    type: 'App Development',
    project: 'Money App',
    title: 'My Awesome Money App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    id: 'ui-2',
    type: 'UI Design',
    project: 'Fantastic Design',
    title: 'My Awesome Fantastic Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

portfolioData.forEach((item) => {
  let portfolioCard = document.createElement('div');
  portfolioCard.className = "portfolio-card";
  portfolioCard.setAttribute('data-open', item.id);
  card.appendChild(portfolioCard);
  let cardBodyArr = document.querySelectorAll('.portfolio-card');
  //console.log(cardBodyArr);
  let cardBody = document.createElement('div');
  cardBody.className = "card-body";
  cardBodyArr[cardBodyArr.length - 1].appendChild(cardBody);
  let cardContent = document.querySelectorAll('.card-body');
  let cardImage = document.createElement('img');
  cardImage.src = "/assets/images/portfolio-1.jpg";
  let cardLink = document.createElement('a');
  cardLink.href= "#";
  cardLink.className = "card-popup-box";
  cardContent[cardContent.length-1].appendChild(cardImage);
  cardContent[cardContent.length-1].appendChild(cardLink);
  let popupBox = document. querySelectorAll ('.card-popup-box');
  let type = document.createElement('div');
  type.innerHTML = item.type;
  //console.log(item.type);
  let project = document.createElement ('h3');
  project.innerHTML = item.project;
  popupBox[popupBox.length-1].appendChild(type);
  popupBox[popupBox.length-1].appendChild(project);

  })

function createModal (item, i) {
  let fullModal = document.createElement('div');
  fullModal.id = item[i].id
  fullModal.className = "modal";
  fullModal.setAttribute('data-animation','slideInOutTop');
  modal.appendChild(fullModal);
  let dialog = document.createElement('div');
  dialog.className = 'modal-dialog';
  fullModal.appendChild(dialog);
  let modalHeader = document.createElement('header');
  modalHeader.className = 'modal-header';
  let modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  dialog.appendChild(modalHeader);
  dialog.appendChild(modalBody);
  let modalHeadTitle = document.createElement('h3');
  modalHeadTitle.innerHTML = item[i].type;
  let closeModal = document.createElement('i');
  closeModal.className = 'fas fa-times';
  closeModal.setAttribute('data-close', '');
  modalHeader.appendChild(modalHeadTitle);
  modalHeader.appendChild(closeModal);
  let modalImageWrapper = document.createElement ('div');
  modalImageWrapper.className = 'img-wrapper';
  let modalTextWrapper = document.createElement ('div');
  modalTextWrapper.className = 'text-wrapper';
  modalBody.appendChild(modalImageWrapper);
  modalBody.appendChild(modalTextWrapper);
  let modalImage = document.createElement('img');
  modalImage.src = "/assets/images/portfolio-1.jpg";
  modalImage.alt = 'portfolio image';
  modalImageWrapper.appendChild(modalImage);
  let modalTextHeader = document.createElement('p');
  modalTextWrapper.appendChild(modalTextHeader);
  let modalTextBold = document.createElement ('strong');
  modalTextBold.innerHTML = item[i].title;
  modalTextHeader.appendChild(modalTextBold);
  let modalDescription = document.createElement('p');
  modalDescription.innerHTML = item[i].description;
  modalTextWrapper.appendChild(modalDescription);
}

function removeModal(elm) {
  setTimeout(function(){
    elm.remove();
  },1000);
  
}


const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const openModal = document.querySelectorAll(modalOpen);



const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
    elm.classList.add(active);
}

for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        for(i=0; i<portfolioData.length; i++) {
          if (modalId == portfolioData[i].id){
            createModal(portfolioData, i);
          }
        }
        setTimeout(function()
        {document.getElementById(modalId).classList.add(isVisible);}
        ,100)
    }) 
}

document.addEventListener('click', function(e) {
  if (e.target === document.querySelector(modalClose)){
    let exitModal = document.querySelector(modalClose).parentElement.parentElement.parentElement;
    exitModal.classList.remove(isVisible);
    removeModal(exitModal);
  }
})


document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal.is-visible')){
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
        removeModal(e.target);
    }
})  

document.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.key === 'Escape'){
        let exitModal = document.querySelector('.modal.is-visible');
        exitModal.classList.remove(isVisible);
        removeModal(exitModal);
   }
})  
