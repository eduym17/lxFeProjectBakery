<template>
  <div class="navBar">
    <div class="logo">
      <img src="" alt=""> MasterCake
    </div>
    <div class="navLinks">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/pedidos">Pedidos</router-link></li>
        <li><router-link to="/pastelero">Pastelero</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar {
    color: #6D28D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin: 0 25px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .navBar:hover {
    color: #4C1D95;
  }

  .logo {
    font-size: xx-large;
    font-weight: 700;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
    font-weight: 600;
    font-size: large;
    color: #404040;
  }

  li:hover {
    color: #171717;
  }

  @media (max-width: 650px) {
  .logo, .inicio, .contacto {
    display: none;
  }

  .navBar {
    justify-content: flex-end;
  }
}
</style>
