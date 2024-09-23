function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.classList.remove('active');
    }
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Show the first section by default
showSection('iced-coffee');

// Define your drink data
// Define your drink data
const drinkSections = [
{
id: 'iced-coffee',
title: 'Iced Coffee!!',
description: 'Cool your body off with a fresh breeze swimming in your tongue', // Fixed typo here
items: [
    {image:'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-feature-image-500x500.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
    {image:'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
    {image:'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
    {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
    {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
    {image:'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
]
},
{
id: 'hot-coffee',
title: 'Hot Coffee',
description: 'Hot, energizing coffees to warm your soul...',
items: [
     {image:'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-feature-image-500x500.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
]
},

{
id: 'tea',
title: 'tea',
description: 'Relax with a variety of soothing tea',
items: [
     {image:'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-feature-image-500x500.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
]
},
{
id: 'frappuccino',
title: 'Frappauccino',
description: 'Our creamy, blended drinks, available in a range of flavors...',
items: [
     {image:'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-feature-image-500x500.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
]
},
{
id: 'refreshers',
title: 'Starbucks Refreshers',
description: 'Our creamy, blended drinks, available in a range of flavors...',
items: [
     {image:'https://www.munatycooking.com/wp-content/uploads/2023/06/Creamy-Iced-Coffee-feature-image-500x500.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Caramel-Iced-Latte-5-of-6.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://onesweetappetite.com/wp-content/uploads/2020/08/Caramel-Iced-Coffee-5.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
     {image:'https://redcurrantbakery.com/wp-content/uploads/2022/04/20170328-IMG_3384-scaled.jpg', description: 'Cold Brewed coffee <br>with whip cream' },
]
}

// Add more sections...
];

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
    container.innerHTML = section.items.map(item => `
        <p>
            <img src="${item.image}" alt="${section.id}">
            <br>${item.description}
        </p>
    `).join('');
    sectionDiv.appendChild(container);
}
});
}

// Call this function when the page loads
window.onload = function() {
populateContent();
showSection('iced-coffee'); // Show the first section by default
};

function showSection(sectionId) {
// Hide all sections
const sections = document.getElementsByClassName('content-section');
for (let section of sections) {
section.classList.remove('active');
}

// Show the selected section
const selectedSection = document.getElementById(sectionId);
selectedSection.classList.add('active');
}