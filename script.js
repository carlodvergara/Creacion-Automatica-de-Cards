
// Variables Formulario HTML
const inputBrand = document.querySelector('input-brand');
const inputModel = document.querySelector('input-model');
const inputYear = document.querySelector('input-year');
const inputImage = document.querySelector('input-image');
const btnCreator = document.querySelector('btn-creator');


// Variables Area Card
const containerCards = document.querySelector('container-cards')
const inputSearch = document.querySelector('input-search');


const listOfCards=[]



btnCreator.addEventListener('click', creationCard);


function creationCard(){

   

for (var element of listOfCards){

    const bodyCard = document.createElement('div');
    bodyCard.classList.add('body-card');   

    const img = document.createElement('img');
    img.classList.add('image-vehicle');   
    img.setAttribute('src' , element.imagen);

    const textArea = document.createElement('div');
    textArea.classList.add('text-area'); 

    const brandName = document.createElement('h3');
    brandName.classList.add('brand-name');
    brandName.innerText = element.marca;

    const modelName = document.createElement('h4');
    modelName.classList.add('model-name'); 
    modelName.innerText = element.modelo;

    const yearNumber = document.createElement('h4');
    yearNumber.classList.add('year-number'); 
    yearNumber.innerText = element.año;

    //Insercion de elementos
    containerCards.appendChild(bodyCard);
    bodyCard.appendChild(img);
    bodyCard.appendChild(textArea);
    textArea.appendChild(brandName);
    textArea.appendChild(modelName);
    textArea.appendChild(yearNumber);
}



}












