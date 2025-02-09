document.addEventListener("DOMContentLoaded", function() {
    fetch("json/media.json")
        .then(response => {
            console.log(response); // Check if response is ok
            return response.json();
        })
        .then(data => {
            console.log(data); // Check if the data is fetched properly
            let contentContainer = document.getElementById("media-content");
            let htmlContent = '<div class="row">';

            data.forEach(item => {
                htmlContent += `
                    <div class="col-md-4 mb-4">
                        <div class="card shadow-sm">
                            <img src="${item.image}" class="card-img-top" alt="Project Image">
                            <div class="card-body">
                                <p class="card-text">${item.testimonial}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            htmlContent += '</div>';
            contentContainer.innerHTML = htmlContent;
        })
        .catch(error => console.error("Error loading media items:", error));
});
