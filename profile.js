document.addEventListener("DOMContentLoaded", function() {
    const accountLink = document.getElementById('account-link');
    const settingLink = document.getElementById('setting-link');
    const profileInfo = document.getElementById('profile-info');

    // Fungsi untuk memuat konten dari file HTML eksternal
    function loadContent(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                profileInfo.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    // Tambahkan event listener untuk link akun
    accountLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link dari redirect ke dalam href
        loadContent('account.html');
    });

    // Tambahkan event listener untuk link pengaturan
    settingLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link dari redirect ke dalam href
        loadContent('setting.html');
    });
});
