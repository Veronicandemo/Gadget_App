'use strict'
const productsContainer = document.getElementById('items')
const getproducts =  () => {
  return  fetch('https://dummyjson.com/products/?limit=8&skip=3')
    .then( response => response.json())
    .then( data => data)
    .catch(error  =>error)
}

const displayProducts = async () => {
 const products = await getproducts();
 console.log(products)
products.products.map( item => {
    console.log(item)
    let div = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h2');
    let price = document.createElement('p');
    let button = document.createElement('button');
    button.textContent = 'ADD CART'
    button.className = 'add-button'

     image.src = item.images[1];
     image.className = 'img-prod';
     price.className = 'price'
     title.textContent = item.name;
     price.textContent = `Price $${item.price}`;
     div.appendChild(image);
     div.appendChild(title);
     div.appendChild(price);
     div.appendChild(button)
     div.setAttribute('key', item.id);
     div.setAttribute('class', 'products')
     productsContainer.appendChild(div);
    });
}
displayProducts()