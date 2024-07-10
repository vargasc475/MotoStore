export default class LocalStorage {

    //  Funcion para crear y/o guardar informacion en el local storage
    addNewItem(id, brand, model, year, description, amount, price, list, button) {
        console.log(brand)
        button.addEventListener( 'click', function() {
            console.log(brand)
            if (brand == '' || model == '' || year == '' || description == '' || amount == '' || price == '') {
                console.log("Nothing in to save :(")
            } else {   
                console.log(brand)
                const items = {};
                items['id'] = id;
                items['brand'] = brand;
                items['model'] = model;
                items['year'] = year;
                items['description'] = description;
                items['amount'] = amount;
                items['price'] = price;
                list.push(items);
                localStorage.setItem('itemList', JSON.stringify(list));
                return false;
        }

        })

        
    }
}