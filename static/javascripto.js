// javascripto.js

let coffeeImages;

async function loadCoffeeImages() {
    try {
      const module = await import("./data.js");
      coffeeImages = module.coffeeImages;
      console.log("Successfully loaded coffee images from data.js");
    } catch (error) {
      console.error("Error loading coffee images from data.js:", error);
      console.log("Falling back to hardcoded URLs");
      // Fallback to using direct URLs if import fails
      coffeeImages = {
        'iced-coffee1': 'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-featureiced%20coffee-500x500.jpg',
        'iced-coffee2': 'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg',
        'iced-coffee3': 'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg',
        'iced-coffee4': 'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg',
        'iced-coffee5': 'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg',
        'iced-coffee6': 'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg',
        // Add fallback URLs for other sections here
      };
    }
  }

const drinkSections = [
  {
    id: 'iced-coffee',
    title: 'Iced Coffee!!',
    description: 'Cool your body off with a fresh breeze swimming in your tongue',
    items: [
      { image: 'iced-coffee1', description: 'Cold Brewed coffee <br>with whip cream' },
      { image: 'iced-coffee2', description: 'Cold Brewed coffee <br>with whip cream' },
      { image: 'iced-coffee3', description: 'Cold Brewed coffee <br>with whip cream' },
      { image: 'iced-coffee4', description: 'Cold Brewed coffee <br>with whip cream' },
      { image: 'iced-coffee5', description: 'Cold Brewed coffee <br>with whip cream' },
      { image: 'iced-coffee6', description: 'Cold Brewed coffee <br>with whip cream' },
    ]
  },
  {
    id: 'hot-coffee',
    title: 'Hot Coffee',
    description: 'Hot, energizing coffees to warm your soul...',
    items: [
      { image: 'hot-coffee1', description: 'Black Espresso Coffee <br>' },
      { image: 'hot-coffee2', description: 'Latte with artistic foam design' },
      { image: 'hot-coffee3', description: 'Freshly brewed coffee from commercial machine' },
      { image: 'hot-coffee4', description: 'Cappuccino with latte art' },
      { image: 'hot-coffee5', description: 'Irish coffee with cream topping' },
    ]
  },
  {
    id: 'tea',
    title: 'Tea',
    description: 'Relax with a variety of soothing tea',
    items: [
      { image: 'tea1', description: 'Refreshing iced tea' },
      { image: 'tea2', description: 'Aromatic green tea' },
      { image: 'tea3', description: 'Classic black tea' },
      { image: 'tea4', description: 'Herbal infusion' },
      { image: 'tea5', description: 'Chai latte' },
      { image: 'tea6', description: 'Fruit tea blend' },
    ]
  },
  {
    id: 'frappuccino',
    title: 'Frappuccino',
    description: 'Our creamy, blended drinks, available in a range of flavors...',
    items: [
      { image: 'frappuccino1', description: 'Caramel Frappuccino' },
      { image: 'frappuccino2', description: 'Mocha Frappuccino' },
      { image: 'frappuccino3', description: 'Vanilla Bean Frappuccino' },
      { image: 'frappuccino4', description: 'Strawberry Cream Frappuccino' },
      { image: 'frappuccino5', description: 'Java Chip Frappuccino' },
      { image: 'frappuccino6', description: 'Green Tea Frappuccino' },
    ]
  },
  {
    id: 'refreshers',
    title: 'Starbucks Refreshers',
    description: 'Light and refreshing beverages with a caffeine boost...',
    items: [
      { image: 'refresher1', description: 'Strawberry Açaí Refresher' },
      { image: 'refresher2', description: 'Mango Dragonfruit Refresher' },
      { image: 'refresher3', description: 'Pineapple Passionfruit Refresher' },
      { image: 'refresher4', description: 'Kiwi Starfruit Refresher' },
      { image: 'refresher5', description: 'Lemonade Refresher' },
      { image: 'refresher6', description: 'Berry Hibiscus Refresher' },
    ]
  }
];

window.showSection = function(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
      section.classList.remove('active');
    }
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    } else {
      console.error(`Section with id ${sectionId} not found`);
    }
  }

function populateContent() {
  drinkSections.forEach(section => {
    const sectionDiv = document.getElementById(section.id);
    if (sectionDiv) {
      // Clear existing content
      sectionDiv.innerHTML = '';

      // Add title
      const titleElement = document.createElement('h2');
      titleElement.textContent = section.title || section.id.replace('-', ' ').toUpperCase();
      sectionDiv.appendChild(titleElement);

      // Add description
      const descElement = document.createElement('p');
      descElement.id = "refreshing-options";
      descElement.textContent = section.description || '';
      sectionDiv.appendChild(descElement);

      // Add and populate container
      const container = document.createElement('div');
      container.className = 'iced-container';
      
      section.items.forEach(item => {
        const itemElement = document.createElement('p');
        
        // Create and set image
        const img = document.createElement('img');
        img.src = coffeeImages[item.image] || ''; // Use the coffeeImages object to get the URL
        img.alt = section.id;
        
        // Append the image and description
        itemElement.appendChild(img);
        itemElement.innerHTML += `<br>${item.description}`;
        
        container.appendChild(itemElement);
      });

      sectionDiv.appendChild(container);
    }
  });
}

// Call this function when the page loads
window.onload = async function() {
  await loadCoffeeImages();
  populateContent();
  showSection('iced-coffee'); // Show the first section by default
};