// Define a custom Web Component for the Header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <!-- Logo Section -->
            <div class="container text-center">
                <img src="assets/logo.png" alt="Rayu Fine Foods logo" class="logo">
            </div>

            <!-- Navigation Bar -->
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a href="index.html" class="nav-link" data-section="home" aria-label="Navigate to Home">Home</a></li>
                    <li class="nav-item"><a href="about.html" class="nav-link" data-section="about" aria-label="Navigate to About Us">About Us</a></li>
                    <li class="nav-item"><a href="cakes.html" class="nav-link" data-section="cakes" aria-label="Navigate to Cakes and Bakery">Cakes and Bakery</a></li>
                    <li class="nav-item"><a href="catering.html" class="nav-link" data-section="catering" aria-label="Navigate to Catering">Catering</a></li>
                    <li class="nav-item"><a href="gifts.html" class="nav-link" data-section="gifts" aria-label="Navigate to Gifts and Hampers">Gifts and Hampers</a></li>
                    <li class="nav-item"><a href="contact.html" class="nav-link" data-section="contact" aria-label="Navigate to Contact Us">Contact Us</a></li>
                    <li class="nav-item"><a href="media.html" class="nav-link" data-section="media" aria-label="Navigate to Media & Press">Media & Press</a></li>
                </ul>
            </nav>
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
