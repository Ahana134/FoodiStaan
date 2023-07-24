const foodItem = [
    {
        id: 1,
        name: 'Ambur Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 13,
        img: 'images/biryani/Ambur-Chicken-Biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 2,
        name: 'Hyderabadi Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 15,
        img: 'images/biryani/Chicken-Biryani-hyd.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 3,
        name: 'Egg Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 18,
        img: 'images/biryani/egg-biryani.jpeg',
        quantity: 1,
        selected:false
    },
    {
        id: 4,
        name: 'Goan Fish Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 15,
        img: 'images/biryani/goan-fish-biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 5,
        name: 'Mutton Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 10,
        img: 'images/biryani/hyd-Mutton-Biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 6,
        name: 'Kamrupi Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 12,
        img: 'images/biryani/kamrupi-biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 7,
        name: 'Kashmiri Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 13,
        img: 'images/biryani/kashmiri.pulao.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 8,
        name: 'Memoni Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 20,
        img: 'images/biryani/memonibiryani.png',
        quantity: 1,
        selected:false
    },
    {
        id: 9,
        name: 'Mughlai Biryani',
        category : 'biryani',
        rating : 4.3,
        price: 15,
        img: 'images/biryani/mughlai-biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 10,
        name: 'Tandoori Chicken',
        category : 'chicken',
        rating : 4.3,
        price: 11,
        img: 'images/chicken/Chicken_roast.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 11,
        name: 'Chicken Curry',
        category : 'chicken',
        rating : 4.3,
        price: 10,
        img: 'images/chicken/Chicken-Curry.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 12,
        name: 'Chicken Do Pyaza',
        category : 'chicken',
        rating : 4.3,
        price: 14,
        img: 'images/chicken/Chicken-do-Pyaza.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 13,
        name: 'Chicken Masala',
        category : 'chicken',
        rating : 4.3,
        price: 12,
        img: 'images/chicken/Chicken-Masala.jpeg',
        quantity: 1,
        selected:false
    },
    {
        id: 14,
        name: 'Handi Chicken',
        category : 'chicken',
        rating : 4.3,
        price: 17,
        img: 'images/chicken/Handi-chicken.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 15,
        name: 'Murgh Musallam',
        category : 'chicken',
        rating : 4.3,
        price: 20,
        img: 'images/chicken/Murgh-Musallam.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 16,
        name: 'Matar Paneer',
        category : 'paneer',
        rating : 4.3,
        price: 15,
        img: 'images/paneer/Matar-Paneer.jpg',
        quantity: 1,
        selected:false   
    },
    {
        id: 17,
        name: 'Palak Paneer',
        category : 'paneer',
        rating : 4.3,
        price: 10,
        img: 'images/paneer/palak-paneer.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 18,
        name: 'Paneer Butter Masala',
        category : 'paneer',
        rating : 4.3,
        price: 15,
        img: 'images/paneer/paneer-butter-masala.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 19,
        name: 'Paneer Do Pyaza',
        category : 'paneer',
        rating : 4.3,
        price: 12,
        img: 'images/paneer/Paneer-Do-Pyaza.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 20,
        name: 'Hyderabadi Paneer',
        category : 'paneer',
        rating : 4.3,
        price: 8,
        img: 'images/paneer/Paneer-Hyderabadi.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 21,
        name: 'Paneer Lababdar',
        category : 'paneer',
        rating : 4.3,
        price: 7,
        img: 'images/paneer/paneer-lababdar.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 22,
        name: 'Shahi Paneer',
        age: '32',
        category : 'paneer',
        rating : 4.3,
        price: 5,
        img: 'images/paneer/shahi-paneer.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 23,
        name: 'Navratan Korma',
        category : 'vegetable',
        rating : 4.3,
        price: 8,
        img: 'images/vegetable/navratan-korma_-vegetable.png',
        quantity: 1,
        selected:false
    },
    {
        id: 24,
        name: 'Veg Jalfrezi',
        category : 'vegetable',
        rating : 4.3,
        price: 7,
        img: 'images/vegetable/VEG-JALFREZI.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 25,
        name: 'Veg Biryani',
        category : 'vegetable',
        rating : 4.3,
        price: 5,
        img: 'images/vegetable/vegetable-biryani.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 26,
        name: 'Veg Curry',
        category : 'vegetable',
        rating : 4.3,
        price: 7,
        img: 'images/vegetable/vegetable-curry.jpeg',
        quantity: 1,
        selected:false
    },
    {
        id: 27,
        name: 'Veg Kolhapur',
        category : 'vegetable',
        rating : 4.3,
        price: 10,
        img: 'images/vegetable/vegetable-kolhapuri.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 28,
        name: 'Veg Masala',
        category : 'vegetable',
        rating : 4.3,
        price: 4,
        img: 'images/vegetable/vegetable-masala.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 29,
        name: 'Veg Pakora',
        category : 'vegetable',
        rating : 4.3,
        price: 4,
        img: 'images/vegetable/vegetable-pakora.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 30,
        name: 'Momos',
        category : 'chinese',
        rating : 4.3,
        price: 8,
        img: 'images/chinese/cabbage-momos-.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 31,
        name: 'Chicken Manchurian',
        category : 'chinese',
        rating : 4.3,
        price: 7,
        img: 'images/chinese/ChickenManchurian.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 32,
        name: 'Chili Chicken',
        category : 'chinese',
        rating : 4.3,
        price: 5,
        img: 'images/chinese/Chili-Chicken.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 33,
        name: 'Chowmein',
        category : 'chinese',
        rating : 4.3,
        price: 16,
        img: 'images/chinese/chowmin.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 34,
        name: 'Spring Roll',
        category : 'chinese',
        rating : 4.3,
        price: 14,
        img: 'images/chinese/spring-rolls.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 35,
        name: 'Szechuan Chicken',
        category : 'chinese',
        rating : 4.3,
        price: 10,
        img: 'images/chinese/szechuan-chicken.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 36,
        name: 'Fried Rice',
        category : 'chinese',
        rating : 4.3,
        price: 8,
        img: 'images/chinese/veg-fried-rice.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 37,
        name: 'Butter Masala Dosa',
        category : 'south indian',
        rating : 4.3,
        price: 18,
        img: 'images/south indian/Butter-Masala-Dosa.png',
        quantity: 1,
        selected:false
    },
    {
        id: 38,
        name: 'Idli',
        category : 'south indian',
        rating : 4.3,
        price: 20,
        img: 'images/south indian/idli-with-rice-flour.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 39,
        name: 'Masala Dosa',
        category : 'south indian',
        rating : 4.3,
        price: 12,
        img: 'images/south indian/masala-dosa.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 40,
        name: 'Mysore Bonda',
        category : 'south indian',
        rating : 4.3,
        price: 10,
        img: 'images/south indian/mysore-bonda.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 41,
        name: 'Onion Uttapam',
        category : 'south indian',
        rating : 4.3,
        price: 15,
        img: 'images/south indian/onion-uttapam.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 42,
        name: 'Plain Dosa',
        category : 'south indian',
        rating : 4.3,
        price: 40,
        img: 'images/south indian/plain-dosa.jpeg',
        quantity: 1,
        selected:false
    },
    {
        id: 43,
        name: 'Rava Uttapam',
        category : 'south indian',
        rating : 4.3,
        price: 25,
        img: 'images/south indian/Rava-Uttapam.jpg',
        quantity: 1,
        selected:false
    },
    {
        id: 44,
        name: 'Sambhar Vada',
        category : 'south indian',
        rating : 4.3,
        price: 34,
        img: 'images/south indian/sambhar-vada.jpg',
        quantity: 1,
        selected:false
    },
    {
        id:45,
        name:'Chicken Biryani',
        category:'biryani',
        rating: 4.6,
        price:25,
        img:'images/biryani/Chicken-Biryani-Recipe.jpg',
        quantity:1,
        selected:false
    },
    {
        id:46,
        name:'Paneer Biryani',
        category:'biryani',
        rating: 4.3,
        price:20,
        img:'images/biryani/paneer-biryani.jpg',
        quantity:1,
        selected:false
    },
    {
        id:47,
        name:'Afghani Chicken',
        category:'chicken',
        rating: 4.3,
        price:20,
        img:'images/chicken/afghani-chicken.jpg',
        quantity:1,
        selected:false
    },
    {
        id:48,
        name:'Chicken Seekh Kebab',
        category:'chicken',
        rating: 4.2,
        price:15,
        img:'images/chicken/Chicken-Seekh-Kebab.jpg',
        quantity:1,
        selected:false
    },
    {
        id:49,
        name:'Chicken Haleem',
        category:'chicken',
        rating: 4.3,
        price:25,
        img:'images/chicken/chicken-haleem.jpg',
        quantity:1,
        selected:false
    },
    {
        id:50,
        name:'Chicken Korma',
        category:'chicken',
        rating: 4.4,
        price:20,
        img:'images/chicken/Chicken-Korma.jpg',
        quantity:1,
        selected:false
    },
    {
        id:51,
        name:'Chicken Bharta',
        category:'chicken',
        rating: 4.3,
        price:12,
        img:'images/chicken/chicken-bharta.jpg',
        quantity:1,
        selected:false
    },
    {
        id:52,
        name:'Honey Prawns',
        category:'chinese',
        rating: 4.3,
        price:10,
        img:'images/chinese/Chinese-Honey-Prawns.jpg',
        quantity:1,
        selected:false
    },
    {
        id:53,
        name:'Honey Chilli Potato',
        category:'chinese',
        rating: 4.3,
        price:5,
        img:'images/chinese/Honey-Chilli-Potato.jpg',
        quantity:1,
        selected:false
    },
    {
        id:54,
        name:'Rajma Pulao',
        category:'vegetable',
        rating: 4.0,
        price:8,
        img:'images/vegetable/rajma-pulao.jpg',
        quantity:1,
        selected:false
    },
    {
        id:55,
        name:'Rajma Masala',
        category:'vegetable',
        rating: 4.1,
        price:5,
        img:'images/vegetable/rajma-masala.jpg',
        quantity:1,
        selected:false
    },
    {
        id:56,
        name:'Soya Keema',
        category:'vegetable',
        rating: 4.0,
        price:6,
        img:'images/vegetable/Soya-Keema-Masala.jpg',
        quantity:1,
        selected:false
    }
  ];
  
  let searchPerformed = false;

  function searchItems() {
    const categoryInput = document.getElementById('categoryInput').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results
  
    const itemsInCategory = foodItem.filter(item => item.category.toLowerCase() === categoryInput);
  
    if (searchPerformed && itemsInCategory.length === 0) {
      resultContainer.innerHTML = '<p>No items found for this category.</p>';
    } 
    else {
        searchPerformed = true;

      const resultList = document.createElement('div');
      itemsInCategory.forEach(item => {
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = item.selected; // Set the initial checkbox state based on 'selected' property
        checkbox.classList.add('custom-checkbox'); // Add the class 'custom-checkbox' to the checkbox
        checkbox.addEventListener('change', function () {
          item.selected = this.checked; // Update 'selected' property when checkbox is clicked
          updateCartCounter();
        });
        cardTop.appendChild(star);
        //cardTop.appendChild(heart);
        cardTop.appendChild(checkbox);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        resultList.appendChild(itemCard);
      });
      resultContainer.appendChild(resultList);
    }
  }

  var selectedItems=[];
  function updateCartCounter() {
    const cartCount = document.getElementById('cart-count');
    selectedItems = foodItem.filter(item => item.selected);
    cartCount.innerText = selectedItems.length + ' Items';
  

    cartCount.addEventListener('click', function () {
    // Redirect the user to the view-cart.html page when the cart icon is clicked
    
    cartItems();
  });
  }
  function cartItems(){
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

  // Redirect to the new food item page
    redirectToFoodItemsPage();
}

function redirectToFoodItemsPage() {
    
    // Create a URL for the new page
    var url = 'view-cart.html';
  
    // Redirect to the new food item page
    window.location.href = url;
    

}
document.addEventListener('DOMContentLoaded', () => {
    searchItems();
  });

