const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products');

document.addEventListener('DOMContentLoaded', () => {
  
  fetchCategories();
  fetchProducts();
});

function fetchCategories() {
  fetch('https://api.escuelajs.co/api/v1/categories')
    
    .then((response) => response.json())
    
    .then((data) =>
      data.slice(0, 4).forEach((category) => {
        
        const categoryDiv = document.createElement('div');
        
        categoryDiv.classList.add('category');
       
        categoryDiv.innerHTML = `
           <img src="${category.image}"/>
           <span>${category.name}</span>
        `;
        
        categoryList.appendChild(categoryDiv);
      })
    )
    .catch((err) => console.log(err));
}

function fetchProducts() {
  
  fetch('https://api.escuelajs.co/api/v1/products') 
    
    .then((res) => res.json())
   
    .then((data) =>
      data.slice(0, 25).forEach((product) => {
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
      
        productDiv.innerHTML = `
          <img src="${product.images[0]}" />
            <p class="product-title">${product.title}</p>
            <p class="product-category">${product.category.name}</p>
            <div class="product-action">
              <p>${product.price} $</p>
              <button>Sepete Ekle</button>
            </div>
          </div>
        `;
        
        productList.appendChild(productDiv);
      })
    )
    
    .catch();
}
