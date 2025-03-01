document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");

    if (section) {
        loadSection(section);
    }
});

function loadSection(section) {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            if (!data[section]) {
                document.getElementById("content-container").innerHTML = "<p>Section not found.</p>";
                return;
            }

            const sectionData = data[section];
            let html = `
                <div id="${section}" class="section-content">
                    <h1>${sectionData.title}</h1>
                    <img src="${sectionData.image}" class="img-fluid" alt="${sectionData.title}">
                    <p>${sectionData.content}</p>
                    <div class="button-group">
            `;

            for (const [text, link] of Object.entries(sectionData.buttons)) {
                html += `<a href="${link}" class="btn btn-primary">${text}</a> `;
            }

            html += `</div></div>`;
            document.getElementById("content-container").innerHTML = html;

            // Move to the selected section
            window.location.hash = section;
            document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => console.error("Error loading section:", error));
}
