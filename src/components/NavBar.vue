<template>
  <div class="navBar">
    <div class="logo">
      <router-link to="/">MasterCake</router-link>
    </div>
    <div class="navLinks">
      <ul>
        <li><router-link to="/" class="inicio">Inicio</router-link></li>
        <li><router-link to="/pedidos" class="pedidos">Pedidos</router-link></li>
        <li><router-link to="/pastelero" class="pastelero">Pastelero</router-link></li>
        <li><router-link to="/contacto" class="contacto">Contacto</router-link></li>
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

  .logo {
    font-size: xx-large;
    font-weight: 700;
    color: white;
  }

  .logo:hover {
    color: #6D28D9;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #6D28D9;
  }

  li {
    list-style: none;
    font-weight: 600;
    font-size: large;
  }

  @media (max-width: 650px) {
  .logo, .contacto, .pastelero {
    display: none;
  }

  .navBar {
    justify-content: flex-start;
  }
}
</style>
