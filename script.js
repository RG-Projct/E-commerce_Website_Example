document.addEventListener("DOMContentLoaded", function() {
    const promoBox = document.getElementById("promo-box");
    const hidePromoBtn = document.getElementById("hide-promo-btn");

    // Cek apakah cookie 'promoHidden' sudah ada
    const promoHidden = localStorage.getItem('promoHidden');

    // Jika cookie tidak ada atau tidak diatur ke 'true', tampilkan kotak promosi
    if (!promoHidden || promoHidden !== 'true') {
        promoBox.style.display = 'block';
    }

    // Tambahkan event listener untuk tombol X
    hidePromoBtn.addEventListener("click", function() {
        // Sembunyikan kotak promosi
        promoBox.style.display = "none";
        // Simpan status penutupan kotak promosi ke dalam localStorage
        localStorage.setItem('promoHidden', 'true');
    });

    // Tambahkan event listener untuk kotak profile
    const profileBox = document.getElementById("profile-box");

    profileBox.addEventListener("click", function() {
        // Cek apakah pengguna sudah login
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        // Jika pengguna sudah login, arahkan ke halaman profile.html
        // Jika belum, arahkan ke halaman login.html
        if (isLoggedIn && isLoggedIn === 'true') {
            window.location.href = 'profile.html';
        } else {
            window.location.href = 'login.html';
        }
    });
});
