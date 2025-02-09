// Define the sections data (importing from data.json)
const sectionsData = {
    "home": {
        "title": "Welcome to Rayu Fine Foods",
        "image": "assets/images/home-image.jpg",
        "content": "Explore the finest quality cakes, catering, gifts, and more. We bring delight to your special occasions!"
    },
    "about": {
        "title": "About Us",
        "content": "Rayu Fine Foods has been serving premium quality cakes and catering for over 20 years. We believe in quality, freshness, and customer satisfaction.",
        "image": "assets/images/about-us-image.jpg"
    },
    "cakes": {
        "title": "Cakes and Bakery",
        "image": "assets/images/cakes-image.jpg",
        "content": "Delicious and freshly baked cakes for every occasion. Our bakery offers a wide variety of cakes, pastries, and other treats.",
        "button": "cakes.html"
    },
    "catering": {
        "title": "Catering",
        "image": "assets/images/catering-image.jpg",
        "content": "We provide top-notch catering services for corporate events, weddings, and private parties. Let us handle the food so you can enjoy your event.",
        "button": "catering.html"
    },
    "gifts": {
        "title": "Gifts and Hampers",
        "image": "assets/images/gifts-image.jpg",
        "content": "Unique gift hampers for every occasion. Whether it's a birthday, anniversary, or corporate gift, we have something special for you.",
        "button": "gifts.html"
    },
    "contact": {
        "title": "Contact Us",
        "image": "assets/images/contact-image.jpg",
        "content": "Get in touch with us for any queries, orders, or feedback. We are here to assist you in every way possible.",
        "button": "contact.html"
    },
    "media": {
        "title": "Media & Press",
        "image": "assets/images/media-image.jpg",
        "content": "Learn more about our latest media appearances, press releases, and the story of Rayu Fine Foods.",
        "button": "media.html"
    }
};

// Function to load all sections initially
function loadSections() {
    const container = document.getElementById("content-container");
    Object.keys(sectionsData).forEach((sectionKey, index) => {
        const section = sectionsData[sectionKey];
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section-content');
        sectionDiv.setAttribute('id', sectionKey);

        const img = document.createElement('img');
        img.src = section.image;
        img.alt = section.title;

        const textDiv = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = section.title;
        const content = document.createElement('p');
        content.textContent = section.content;

        textDiv.appendChild(title);
        textDiv.appendChild(content);

        // Add button for sections except home and about
        if (sectionKey !== "home" && sectionKey !== "about") {
            const button = document.createElement('a');
            button.href = section.button;
            button.classList.add('btn', 'btn-primary');
            button.textContent = 'View More';
            textDiv.appendChild(button);
        }

        // Add alternating classes for layout
        if (index % 2 === 0) {
            sectionDiv.classList.add('image-left');
        } else {
            sectionDiv.classList.add('image-right');
        }

        sectionDiv.appendChild(img);
        sectionDiv.appendChild(textDiv);
        container.appendChild(sectionDiv);
    });
}

// Function to show a specific section
function showSection(sectionKey) {
    const container = document.getElementById("content-container");
    const selectedSection = sectionsData[sectionKey];
    
    // Clear previous content
    container.innerHTML = '';

    // Create section div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('section-content');
    contentDiv.setAttribute('id', sectionKey); // Assign ID for scrolling

    // Create image
    const img = document.createElement('img');
    img.src = selectedSection.image;
    img.alt = selectedSection.title;

    // Create text content
    const textDiv = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = selectedSection.title;
    const content = document.createElement('p');
    content.textContent = selectedSection.content;

    textDiv.appendChild(title);
    textDiv.appendChild(content);

    // Add button for sections except home and about
    if (sectionKey !== "home" && sectionKey !== "about") {
        const button = document.createElement('a');
        button.href = selectedSection.button;
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'View More';
        textDiv.appendChild(button);
    }

    // Append elements
    contentDiv.appendChild(img);
    contentDiv.appendChild(textDiv);
    container.appendChild(contentDiv);

    // Scroll to the section smoothly
    contentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event listener for section clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const sectionKey = e.target.getAttribute('data-section');
        showSection(sectionKey);
    });
});

// Load all sections initially
loadSections();
