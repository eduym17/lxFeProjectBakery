<template>
  <div class="form-content">
    <div class="header">Elige tu pastel ideal:</div>
    <div class="form-container">
      <form action="" class="form">
        <div class="input">
          <input type="checkbox" id="chocolate">
          <label for="chocolate">Chocolate</label>
        </div>
        <div class="input">
          <input type="checkbox" id="fresa">
          <label for="fresa">Fresa</label>
        </div>
        <div class="input">
          <input type="checkbox" id="fresa">
          <label for="fresa">Fresa</label>
        </div>
        <div class="input">
          <input type="checkbox" id="vainilla">
          <label for="vainilla">Vainilla</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    color: white;
    font-weight: 600;
    background: #5B21B6;
    width: 100%;
    padding: 3px;
    border-radius: 15px;
  }

  .input {
    background: #6D28D9;
    color: white;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    width: 200px;
    padding: 3px 3px 3px 10px;
    margin: 5px;
    border-radius: 15px;
  }

  .input:hover {
    background: #5B21B6;
    font-weight: 600;
  }

</style>