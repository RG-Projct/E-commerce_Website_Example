document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logout-btn');
  
    // Fungsi untuk melakukan logout
    function logout() {
      // Hapus informasi login yang tersimpan
      localStorage.removeItem('loggedInUser');
      // Redirect ke halaman login.html
      window.location.href = "login.html";
    }
  
    // Tambahkan event listener untuk tombol logout
    logoutBtn.addEventListener('click', logout);
});
