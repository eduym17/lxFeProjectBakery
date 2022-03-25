<template>
  <div class="footer">
    <div class="logo">
      <img src="" alt=""> MasterCake
    </div>
    <div class="navLinks">
      <ul>
        <a href=""><li>Clientes</li></a>
        <a href=""><li>Contacto</li></a>
        <li class="address">Av. Salsi Puedes #30, Col. Cañitas</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

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
  }

  li {
    list-style: none;
    color: #FFFFFF;
    font-weight: 300;
  }

@media (max-width: 600px) {
  .logo, .address {
    display: none;
  }
}
</style>