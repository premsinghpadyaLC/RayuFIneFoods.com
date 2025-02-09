document.addEventListener("DOMContentLoaded", function() {
    fetch("json/cakes.json")
        .then(response => {
            console.log(response); // Check if response is ok
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check if the data is fetched properly
            let cakesContent = document.getElementById("cakes-content"); // Fixed the variable name
            let htmlContent = '<div class="row">';

            data.forEach(cake => {
                htmlContent += `
                    <div class="col-md-4 mb-4">
                        <div class="cake-card shadow-lg">
                            <img src="${cake.image}" class="cake-image" alt="${cake.name}">
                            <div class="cake-details p-3">
                                <h5 class="cake-name">${cake.name}</h5>
                                <p class="cake-description">${cake.description}</p>
                                <p class="cake-price">${cake.price}</p>
                                <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            htmlContent += '</div>';
            cakesContent.innerHTML = htmlContent;
        })
        .catch(error => console.error("Error loading cakes:", error));
});
