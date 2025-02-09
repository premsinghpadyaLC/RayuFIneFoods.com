// Define a custom Web Component for the Header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <!-- Logo Section -->
            <div class="container text-center">
                <img src="assets/logo.png" alt="Rayu Fine Foods logo" class="logo">
            </div>
        </header>
        `;
    }
}

// Register the header component
customElements.define('aliya-header', MyHeader);

// Define a custom Web Component for the Footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                                    <!-- Navigation Bar -->
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a href="index.html" class="nav-link" data-section="home" aria-label="Navigate to Home">Return Home</a></li>
                </ul>
            </nav>

        <footer class="text-center py-4">
            <p>&copy; 2025 Rayu Fine Foods. All rights reserved.</p>
            <div class="social-media">
                <a href="#" class="social-icon" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
        `;
    }
}

// Register the footer component
customElements.define('prem-footer', MyFooter);
