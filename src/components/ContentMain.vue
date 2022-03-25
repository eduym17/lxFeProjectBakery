<template>
  <div class="content">
    <h1 class="heroText">Cómete el pan, cómetelo, cómetelo...</h1>
    <h2>¡Quitan el trapo y no lo ponen!</h2>
    <button>Comprar aquí</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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