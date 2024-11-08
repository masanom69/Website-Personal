/* Resetting default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global Styles */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

/* Header Styles */
header {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #e67e22;
}

/* Hero Section */
.hero {
    background: #1f1f1f;
    color: #fff;
    text-align: center;
    padding: 120px 0; /* Menambah padding agar tidak terpotong */
    margin-top: 60px;
    transition: background-color 0.5s ease;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 10px;
    animation: fadeIn 1s ease-out;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    animation: fadeIn 2s ease-out;
}

.hero .btn {
    background-color: #e67e22;
    color: white;
    padding: 12px 25px;
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.hero .btn:hover {
    background-color: #d35400;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* About Section */
.about {
    padding: 50px 0;
    background-color: #fff;
    text-align: center;
    animation: fadeIn 1.5s ease-out;
}

.about h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.about p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
}

/* Services Section */
.services {
    padding: 50px 0;
    background-color: #f9f9f9;
    text-align: center;
}

.services h2 {
    font-size: 2rem;
    margin-bottom: 40px;
}

.service-list {
    display: flex;
    justify-content: space-around;
}

.service {
    background: #fff;
    padding: 30px;
    width: 30%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.service:hover {
    transform: translateY(-10px);
}

.service h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.service p {
    font-size: 1rem;
}

/* Contact Section */
.contact {
    padding: 50px 0;
    background-color: #fff;
    text-align: center;
}

.contact h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.contact form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.contact form label {
    display: block;
    margin-bottom: 5px;
    font-size: 1.1rem;
}

.contact form input,
.contact form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact form button {
    background-color: #e67e22;
    color: white;
    padding: 12px 25px;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact form button:hover {
    background-color: #d35400;
}

#form-message {
    margin-top: 15px;
    font-size: 1.2rem;
    color: #27ae60;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}

/* MEDIA QUERIES: Responsif untuk Mobile */
@media (max-width: 768px) {
    /* Hero Section */
    .hero h2 {
        font-size: 2.5rem; /* Menyesuaikan ukuran teks di layar kecil */
    }

    .hero p {
        font-size: 1.2rem; /* Mengurangi ukuran teks */
    }

    .hero .btn {
        padding: 10px 20px;
        font-size: 1rem; /* Menyesuaikan ukuran tombol */
    }

    /* Services Section */
    .service-list {
        flex-direction: column;
        align-items: center;
    }

    .service {
        width: 80%;
        margin-bottom: 20px;
    }

    /* About Section */
    .about h2 {
        font-size: 1.5rem;
    }

    .about p {
        font-size: 1rem;
    }

    /* Contact Section */
    .contact form {
        width: 90%;
    }

    .contact form label,
    .contact form input,
    .contact form textarea,
    .contact form button {
        font-size: 1rem;
    }
}
