// Obtener las funciones de las demas clases
import LocalStorage from "./localStorage.js"
import View from "./view.js"

// Clase para ejecutar las funciones de view
export default class Controller {
    constructor() {
        // crear instancias de las diferentes clases
        this.lsInstance = new LocalStorage();
        this.viewInstance = new View();
        this.itemList = [];
    } 

    // Funcion para ejecutar el form en la pagina de index.html
    async testList(baseList = localStorage.getItem('itemList')) {

        // Obtener los elementos del form para crear el local storage
        const date = new Date();
        const id = date.getMilliseconds();
        const form = document.getElementById('moto-form');
        const brandField = form.elements['brand'];
        const modelField = form.elements['model'];
        const yearField = form.elements['year'];
        const descriptionField = form.elements['description'];
        const amountField = form.elements['amount'];
        const priceField = form.elements['price'];
        const motoBrand = brandField.value;
        const motoModel = modelField.value;
        const motoYear = yearField.value;
        const motoDescription = descriptionField.value;
        const motoAmount = amountField.value;
        const motoPrice = priceField.value;
        const submitButton = document.getElementById('submit-button');
        const list = document.getElementById('list-details');
        
        // De existir el local storage se ejecutara la funciona para mostrar los datos guardados
        if (baseList) {
            this.itemList = JSON.parse(baseList);
            this.viewInstance.displayLocalStorage(list, this.itemList);
        }

             
        // De no existir el local storage, el if statement no se ejecuatara 
        this.lsInstance.addNewItem(id, motoBrand, motoModel, motoYear, motoDescription, motoAmount, motoPrice, this.itemList, submitButton);
    }
    
}
