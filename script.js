// Validasi dan Kirim Pesan
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Terima kasih telah menghubungi kami!';
        document.getElementById('form-message').style.color = '#27ae60';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Tolong lengkapi semua field.';
        document.getElementById('form-message').style.color = '#e74c3c';
    }
});

// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,  // Menyesuaikan dengan posisi header
            behavior: 'smooth'
        });
    });
});
