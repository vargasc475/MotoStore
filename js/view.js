export default class View {

    //  Funcion para crear elementos HTML y mostrar los datos obtenidos del local storage
    displayLocalStorage(list) {

        const itemList = localStorage.getItem('itemList');
        const objectList = JSON.parse(itemList);

        if (objectList === '') {}
        else {
            objectList.forEach(element => {
                const li = document.createElement('li');
                li.setAttribute('class', 'active');
                const brand = document.createElement('p');
                brand.setAttribute('id', 'view-brand');
                const model = document.createElement('p');
                model.setAttribute('id', 'view-model');
                const year = document.createElement('p');
                year.setAttribute('id', 'view-year');
                const description = document.createElement('p');
                description.setAttribute('id', 'view-description');
                const amount = document.createElement('p');
                amount.setAttribute('id', 'view-amount');
                const price = document.createElement('p');
                price.setAttribute('id', 'view-price');
                const editButton = document.createElement('button');
                editButton.setAttribute('id', 'edit-button');
                editButton.setAttribute('class', `${element.id}`);
                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('id', 'clear');
                deleteButton.setAttribute('class', `${element.id}`);
                
                

                brand.textContent = element.brand;
                model.textContent = element.model;
                year.textContent = element.year;
                description.textContent = element.description;
                amount.textContent = element.amount;
                price.textContent = element.price;
                editButton.innerHTML = "<a href='update.html'>Edit</a>";
                deleteButton.textContent = "Delete";

                li.appendChild(brand);
                li.appendChild(model);
                li.appendChild(year);
                li.appendChild(description);
                li.appendChild(amount);
                li.appendChild(price);
                li.appendChild(deleteButton);
                li.appendChild(editButton);

                list.appendChild(li);


                // funcion que elimina los datos del local storage
                deleteButton.addEventListener('click', function() {
                    if (window.confirm('Estas seguro(a) de eliminar la moto?')) {
                        list.removeChild(li);
                        const id = deleteButton.className;
                        const index = objectList.findIndex(object => {return object.id === parseInt(id)});
                        objectList.splice(index, 1);
                        localStorage.setItem('itemList', JSON.stringify(objectList));
                    }
                    
                })

                // Funcion que peromite editar los datos en el local storage (NO TERMINADA)
                editButton.addEventListener('click', function() {
                   
                    const id = editButton.className;
                    const index = objectList.findIndex(object => {return object.id === parseInt(id)});
                    console.log("hola");
                    const form = document.getElementById('edit-form');
                    const brandField = form.elements['edit-brand'];
                    const modelField = form.elements['edit-model'];
                    const yearField = form.elements['edit-year'];
                    const descriptionField = form.elements['edit-description'];
                    const amountField = form.elements['edit-amount'];
                    const priceField = form.elements['edit-price'];
                    brandField.textContent = `${objectList[index]}`;

                })
            })
        }
    } 
}
