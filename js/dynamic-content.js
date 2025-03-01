document.addEventListener("DOMContentLoaded", function () {
    const page = window.location.pathname.split("/").pop().replace(".html", "");

    // Category data with descriptions & images
    const categories = {
        cakes: {
            title: "Cakes & Bakery",    
            description: "Explore our delicious selection of cakes, cupcakes, and baked goods.",
            image: "assets/cakes.jpg",
            items: {
                "Custom Cakes": { description: "Special cakes designed to your taste.", image: "assets/custom-cakes.jpg" },
                "Rayu Classic": { description: "Our signature cakes with premium ingredients.", image: "assets/classic.jpg" },
                "Ethnic Italian": { description: "Authentic Italian-style cakes and pastries.", image: "assets/italian.jpg" },
                "Wedding Cakes": { description: "Elegant wedding cakes for your special day.", image: "assets/wedding.jpg" },
                "Theme Cakes": { description: "Creative cakes customized for every occasion.", image: "assets/theme.jpg" },
                "Cupcakes": { description: "Delicious cupcakes with a variety of flavors.", image: "assets/cupcakes.jpg" },
                "Bakery": {
                    title: "Bakery",
                    description: "Freshly baked pastries and donuts.",
                    image: "assets/bakery.jpg",
                    items: {
                        "Puffs": {
                            title: "Puffs",
                            description: "Crispy and delicious puff pastries.",
                            image: "assets/puffs.jpg",
                            items: {
                                "Chicken": { description: "Spicy chicken-filled puffs.", image: "assets/chicken-puff.jpg" },
                                "Egg": { description: "Classic egg puffs with a flaky crust.", image: "assets/egg-puff.jpg" },
                                "Potato & Peas": { description: "Vegetarian puffs with a tasty filling.", image: "assets/veg-puff.jpg" },
                                "Cheese & Corn": { description: "Cheesy corn-filled puff pastries.", image: "assets/cheese-corn-puff.jpg" }
                            }
                        },
                        "Baked Donuts": {
                            title: "Baked Donuts",
                            description: "Soft, baked donuts available in different flavors.",
                            image: "assets/donuts.jpg",
                            items: {
                                "Egg": { description: "Baked donuts made with eggs.", image: "assets/egg-donut.jpg" },
                                "Eggless": { description: "Delicious egg-free baked donuts.", image: "assets/eggless-donut.jpg" }
                            }
                        }
                    }
                }
            }
        },
        catering: {
            title: "Catering Services",
            description: "We provide premium catering for all occasions.",
            image: "assets/catering.jpg",
            items: {
                "Indian (Authentic)": { description: "Traditional Indian dishes with rich flavors.", image: "assets/indian.jpg" },
                "Italian": { description: "Classic Italian cuisine made fresh.", image: "assets/italian-food.jpg" },
                "Asian": { description: "A variety of Asian-inspired dishes.", image: "assets/asian.jpg" },
                "100% Organic": { description: "Healthy and organic meal options.", image: "assets/organic.jpg" }
            }
        },
        gifts: {
            title: "Gifts & Hampers",
            description: "Perfect gift boxes for every occasion.",
            image: "assets/gifts.jpg",
            items: {
                "Cupcake Boxes": {
                    title: "Cupcake Boxes",
                    description: "Delicious cupcakes packed beautifully.",
                    image: "assets/cupcake-box.jpg",
                    items: {
                        "2": { description: "Box of 2 cupcakes.", image: "assets/box-2.jpg" },
                        "4": { description: "Box of 4 cupcakes.", image: "assets/box-4.jpg" },
                        "6": { description: "Box of 6 cupcakes.", image: "assets/box-6.jpg" },
                        "12": { description: "Box of 12 cupcakes.", image: "assets/box-12.jpg" },
                        "Custom": { description: "Customizable cupcake box.", image: "assets/custom-box.jpg" }
                    }
                },
                "Cookies": { description: "Delicious assorted cookies.", image: "assets/cookies.jpg" },
                "Tarts": { description: "Sweet and savory tarts.", image: "assets/tarts.jpg" },
                "Donut Hamper": { description: "A box full of delicious donuts.", image: "assets/donut-hamper.jpg" },
                "Sweet & Savory Hamper": { description: "A mix of sweet and savory treats.", image: "assets/sweet-savory.jpg" },
                "Custom Hamper": { description: "Customize your own gift hamper.", image: "assets/custom-hamper.jpg" }
            }
        }
    };

    function displayContent(container, breadcrumbContainer, data, path = []) {
        // Ensure title is always defined
        const title = data.title || "Category";

        // Update breadcrumb navigation
        breadcrumbContainer.innerHTML = createBreadcrumb(path, data);

        // Update main content
        container.innerHTML = `
            <h2>${title}</h2>
            <img src="${data.image || "assets/default.jpg"}" class="img-fluid mb-3" alt="${title}">
            <p>${data.description || "No description available."}</p>
            <div id="buttons-container" class="d-flex flex-wrap gap-2"></div>
        `;

        const buttonsContainer = document.getElementById("buttons-container");

        // If there are subcategories, create buttons
        if (data.items) {
            Object.keys(data.items).forEach(key => {
                const value = data.items[key];
                const button = document.createElement("button");
                button.className = "btn btn-primary";
                button.innerText = key;

                button.onclick = () => {
                    // Navigate deeper into the category
                    displayContent(container, breadcrumbContainer, {
                        title: value.title || key,
                        description: value.description || "No description available.",
                        image: value.image || "assets/default.jpg",
                        items: value.items || null
                    }, [...path, key]);
                };

                buttonsContainer.appendChild(button);
            });
        }
    }

    function createBreadcrumb(path, data) {
        let breadcrumbHTML = `<nav aria-label="breadcrumb">
            <ol class="breadcrumb">`;

        breadcrumbHTML += `<li class="breadcrumb-item"><a href="cakes.html">Home</a></li>`;

        if (path.length > 0) {
            path.forEach((item, index) => {
                if (index === path.length - 1) {
                    breadcrumbHTML += `<li class="breadcrumb-item active" aria-current="page">${item}</li>`;
                } else {
                    breadcrumbHTML += `<li class="breadcrumb-item">
                        <a href="#" onclick="navigateTo('${path.slice(0, index + 1).join("|")}')">${item}</a>
                    </li>`;
                }
            });
        }

        breadcrumbHTML += `</ol></nav>`;
        return breadcrumbHTML;
    }

    // Handle navigation from breadcrumb
    window.navigateTo = function (pathStr) {
        const pathArray = pathStr.split("|");
        let data = categories[page];
        let newPath = [data.title];

        for (let part of pathArray) {
            if (data.items && data.items[part]) {
                data = data.items[part];
                newPath.push(part);
            }
        }

        const container = document.getElementById("content-container");
        const breadcrumbContainer = document.getElementById("breadcrumb-container");
        displayContent(container, breadcrumbContainer, data, newPath);
    };

    // Load the correct category
    if (categories[page]) {
        const container = document.getElementById("content-container");
        const breadcrumbContainer = document.getElementById("breadcrumb-container");
        displayContent(container, breadcrumbContainer, categories[page], [categories[page].title]);
    }
});
	

	