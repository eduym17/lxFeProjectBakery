<template>
  <div class="content">
    <h1 class="heroText">¿Ganas de endulzar tu día?</h1>
    <h2>¡Prueba uno de nuestros pasteles!</h2>
    <router-link to="/pedidos"><button>Comprar aquí</button></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .content {
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/background-main-sm.jpg");
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .heroText {
    font-size: 60px;
    color: #18181B;
  }

  button {
    background: #6D28D9;
    color: white;
    font-size: large;
    border: none;
    padding: 10px 15px;
    border-radius: 30px;
    cursor: pointer;
  }

  button:hover {
    background: #5519b6;
    font-weight: 600;
  }

</style>