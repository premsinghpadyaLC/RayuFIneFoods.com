document.addEventListener("DOMContentLoaded", function() {
    fetch("json/catering.json")
        .then(response => {
            console.log(response); // Check if response is ok
            return response.json();
        })
        .then(data => {
            console.log(data); // Check if the data is fetched properly
            let contentContainer = document.getElementById("catering-content");
            let htmlContent = '<div class="row">';

            data.forEach(item => {
                htmlContent += `
                    <div class="col-md-4 mb-4">
                        <div class="catering-card shadow-lg">
                            <img src="${item.image}" class="catering-image" alt="${item.name}">
                            <div class="catering-details p-3">
                                <h5 class="catering-name">${item.name}</h5>
                                <p class="catering-description">${item.description}</p>
                                <p class="catering-price">${item.price}</p>
                                <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            htmlContent += '</div>';
            contentContainer.innerHTML = htmlContent;
        })
        .catch(error => console.error("Error loading catering items:", error));
});
