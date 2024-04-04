document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    // Cek apakah sudah ada informasi login yang tersimpan
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    // Jika ada, langsung arahkan ke halaman profile
    if (loggedInUser) {
      window.location.href = "profile.html";
    }
  
    // Tambahkan event listener untuk submit form
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Hindari pengiriman form
  
      // Ambil nilai input username dan password
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Contoh validasi sederhana, ganti dengan logika validasi sesuai kebutuhan
      if (username === "user" && password === "password") {
        // Simpan informasi login ke localStorage
        localStorage.setItem('loggedInUser', username);
        // Redirect ke halaman profile
        window.location.href = "profile.html";
      } else {
        // Tampilkan pesan kesalahan
        alert("Username dan password salah. Silakan coba lagi atau buat akun baru.");
      }
    });
  });
  