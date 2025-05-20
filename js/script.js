document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('loginButton');
  const adminPasswordInput = document.getElementById('adminPassword');
  const loginError = document.getElementById('loginError');
  const adminLoginModal = document.getElementById('adminLoginModal');

  loginButton.addEventListener('click', function () {
    const password = adminPasswordInput.value;
    // Hier das tatsächliche Passwort überprüfen
    if (password === '123456') {
      // Erfolgreicher Login: Weiterleitung zur Admin-Seite
      loginError.textContent = '';
      window.location.href = 'admin.html';
    } else {
      // Fehler beim Login
      loginError.textContent = 'Falsches Passwort.';
    }
  });
});
