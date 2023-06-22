let card = document.getElementById('portfolio');

let portfolioData = [
  { 
    type: 'Web Development',
    project: 'Art Website',
  },
  { 
    type: 'Web Development',
    project: 'Skate Website'
  },
  { 
    type: 'Web Development',
    project: 'Eating Website'
  },
  { 
    type: 'UI Design',
    project: 'Cool Design'
  },
  { 
    type: 'App Development',
    project: 'Game App'
  },
  { 
    type: 'App Development',
    project: 'Gambling App'
  },
  { 
    type: 'App Development',
    project: 'Money App'
  },
  { 
    type: 'UI Design',
    project: 'Fantastic Design'
  },
]

portfolioData.forEach((item) => {
  let portfolioCard = document.createElement('div');
  portfolioCard.className = "portfolio-card";
  card.appendChild(portfolioCard);
  let cardBodyArr = document.querySelectorAll('.portfolio-card');
  console.log(cardBodyArr);
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
  console.log(item.type);
  let project = document.createElement ('h3');
  project.innerHTML = item.project;
  appendLastChild(popupBox, type);
  appendLastChild(popupBox, project);

  })

function appendLastChild (docArray, content) {
  docArray[docArray.length-1].appendChild(content);
}