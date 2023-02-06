
// Variables Formulario HTML
const inputBrand = document.querySelector('.input-brand');
const inputModel = document.querySelector('.input-model');
const inputYear = document.querySelector('.input-year');
const inputImage = document.querySelector('.input-image');
const btnCreator = document.querySelector('.btn-creator');


// Variables Area Card
const containerCards = document.querySelector('.container-cards')
const inputSearch = document.querySelector('.input-search');
const btnSearch = document.querySelector('.btn-search');

var listOfCards = [];


function Builder(image, brand, model, year, counter){
    this.imagen = image
    this.marca = brand
    this.modelo = model
    this.año = year
    this.contador = counter
}



btnCreator.addEventListener('click' , actionCard);


let contador = 0;

function actionCard() {

contador++;

containerCards.innerHTML = '';

let newData = new Builder(inputImage.value , inputBrand.value , inputModel.value , inputYear.value, contador);

listOfCards.push(newData);


for (element of listOfCards){    

    const card = document.createElement('div');
    card.classList.add('body-card');

    const img = document.createElement('img');
    img.classList.add('image-vehicle');
    img.setAttribute('src' , element.imagen );

    const textArea = document.createElement('div');
    textArea.classList.add('text-area');

    const brandName = document.createElement('h3');
    brandName.classList.add('brand-name');
    brandName.innerText = element.marca;

    const modelName = document.createElement('h4');
    modelName.classList.add('model-name');
    modelName.innerText = element.modelo;

    const numberYear = document.createElement('h4');
    numberYear.classList.add('number-year');
    numberYear.innerText = element.año;

    containerCards.appendChild(card);
    card.appendChild(img);
    card.appendChild(textArea);
    textArea.appendChild(brandName);
    textArea.appendChild(modelName);
    textArea.appendChild(numberYear);   
}


}




inputSearch.addEventListener('click', finder);

function finder(){
    var newList = listOfCards.find((a)=> a === a.inputSearch);
    containerCards.innerHTML = '';
}