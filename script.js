
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


// Evento click
btnCreator.addEventListener('click', creationCard);

function creatorLoop(){}

function creationCard(){

//Constructor de Objeto
function dataBuilder(image,brand,model,year){
    this.imagen = image
    this.marca = brand
    this.modelo = model
    this.año = year
}

var newData = new dataBuilder(inputImage.value, inputBrand.value,inputModel.value,inputYear.value);


// Empujador de Objeto creado a Lista de Card
listOfCards.push(newData);


function creatorLoop(listOfCards){

for (var element of listOfCards){

    //Elementos Dinamicos
    const bodyCard = document.createElement('div');
    bodyCard.classList.add('body-card');   

    const img = document.createElement('img');
    img.classList.add('---');   
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

return;

}

    



inputSearch.addEventListener('entry', finderCard);

function finderCard(){
   var newSearch = listOfCards.find( (e)=> e === e.inputSearch.value);
   return creatorLoop(newSearch);  

}












