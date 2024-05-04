// Ambil semua elemen navbar
const navLinks = document.querySelectorAll('.navbar a');

// Loop melalui setiap elemen navbar dan tambahkan event listener
navLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    // Hilangkan kelas 'active' dari semua elemen navbar
    navLinks.forEach((navLink) => navLink.classList.remove('active'));

    // Tambahkan kelas 'active' ke elemen yang diklik
    this.classList.add('active');

    // Ambil ID dari elemen yang dituju
    const targetId = this.getAttribute('href').substring(1);

    // Scroll ke bagian yang dituju dengan animasi smooth
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Hentikan aksi default dari link
    event.preventDefault();
  });
});
