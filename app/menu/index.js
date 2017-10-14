const menu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Veterinaria</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Inicio<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/acercade">Acerca de Nosotros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contacto">Contactenos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/carrito">Carrito de Compras</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/productos">Productos</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Iniciar Sesion</a>
          <a class="dropdown-item" href="#">Registrarse</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
`
export default menu