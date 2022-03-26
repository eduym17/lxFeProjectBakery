<template>
  <div class="footer">
    <div class="logo">
      MasterCake
    </div>
    <div class="navLinks">
      <ul>
        <li><router-link to="/" class="inicio">Inicio</router-link></li>
        <li><router-link to="/pedidos" class="pedidos">Pedidos</router-link></li>
        <li><router-link to="/pastelero" class="pastelero">Pastelero</router-link></li>
        <li><router-link to="/contacto" class="contacto">Contacto</router-link></li>
        <contact-info class="contactInfo"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ContactInfo from './ContactInfo.vue'


export default {
  components: { ContactInfo },

}
</script>

<style scoped>
  .footer {
    border-radius: 20px 20px 0 0;
    background: #6D28D9;
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .logo {
    font-size: xx-large;
    font-weight: 700;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  li {
    list-style: none;
    color: #FFFFFF;
    font-weight: 300;
  }

  li:hover {
    font-weight: 600;    
  }

@media (max-width: 650px) {
  .logo, .contactInfo {
    display: none;
  }

  ul {
    justify-self: flex-end;
    align-self: flex-end;
  }
}
</style>