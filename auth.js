export function verificarAutenticacion() {
    if (localStorage.getItem('token') === null) {
      // Si el token no existe, redirecciona al usuario a la página de inicio de sesión
      window.location.href = 'index.html';
    }
  }
  