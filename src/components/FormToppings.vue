<template>
  <div class="form-content">
    <div class="header">Elige tus topings:</div>
    <div class="form-container">
      <form action="" class="form">
        <div class="input">
          <input type="checkbox" id="cereza">
          <label for="cereza">Cereza</label>
        </div>
        <div class="input">
          <input type="checkbox" id="galleta">
          <label for="galleta">Galleta</label>
        </div>
        <div class="input">
          <input type="checkbox" id="chispas">
          <label for="chispas">Chispas</label>
        </div>
        <div class="input">
          <input type="checkbox" id="moras">
          <label for="moras">Moras</label>
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
    background: #6D28D9;
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