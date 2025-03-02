class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="container text-center py-3">
                <a href="index.html"><img src="assets/logo.png" alt="Logo" class="logo"></a>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><b>Rayu Fine Foods</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="cakes.html" class="nav-link">Cakes & Bakery</a></li>
                            <li class="nav-item"><a href="catering.html" class="nav-link">Catering</a></li>
                            <li class="nav-item"><a href="gifts.html" class="nav-link">Gifts & Hampers</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>                
                            <li class="nav-item"><a href="media.html" class="nav-link">Media</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>`;
    }
}
customElements.define('aliya-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer style="background-image: url('assets/bg.jfif'); background-size: cover; background-position: center; background-attachment: fixed; text-align: center; padding: 20px; color: black;">
            <span>&copy; 2025 Rayu Fine Foods</span>
            <div class="w3-flex">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="24" height="24" alt="Facebook">
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" height="24" alt="Instagram">
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="24" height="24" alt="Twitter">
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" width="24" height="24" alt="LinkedIn">
                </a>
                <a href="https://www.youtube.com" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="24" height="24" alt="YouTube">
                </a>
            </div>
        </footer>`;
    }
}
customElements.define('prem-footer', MyFooter);
