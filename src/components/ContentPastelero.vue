<template>
  <div class="content">
    <h1>¡Sobran muchos pasteles aún!</h1>
    <h2>Pide el tuyo aquí:</h2>
    <router-link to="/pedidos" class="pedidos">
      <button>¡Quiero pastelillos!</button>
    </router-link>
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
    background-image: url("../assets/bgblack2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    overflow: hidden;
  }

  h1, h2, button {
    color: white;
    background: #6D28D9;
    padding: 10px;
    margin: 5px 25px;
    border-radius: 15px;
    border: none;
  }

  button {
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    background: #5519b6;
  }
</style>