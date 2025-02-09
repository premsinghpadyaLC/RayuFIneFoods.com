document.addEventListener("DOMContentLoaded", function() {
    fetch("json/contact.json")
        .then(response => {
            console.log(response); // Check if response is ok
            return response.json();
        })
        .then(data => {
            console.log(data); // Check if the data is fetched properly
            let contentContainer = document.getElementById("contact-content");
            let htmlContent = `
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <h3>Contact Information</h3>
                        <ul class="list-unstyled">
                            <li><strong>Address:</strong> ${data.address}</li>
                            <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
                            <li><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
                            <li><strong>WhatsApp:</strong> <a href="https://wa.me/${data.whatsapp}" target="_blank">${data.whatsapp}</a></li>
                            <li><strong>Working Hours:</strong> ${data.working_hours}</li>
                        </ul>
                    </div>
                </div>
            `;
            contentContainer.innerHTML = htmlContent;
        })
        .catch(error => console.error("Error loading contact info:", error));
});
