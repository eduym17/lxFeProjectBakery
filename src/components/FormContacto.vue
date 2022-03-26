<template>
  <div class="form-content">
    <div class="header">¡Pronto nos contactaremos contigo!</div>
    <div class="form-container">
      <form action="" class="form">
        <div class="inputs">
          <div class="labels">
            <label for="Nombre">Nombre</label>
            <input type="text" id="Nombre" required>
          </div>
          <div class="labels">
            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" required>
          </div>
          <div class="labels">
            <label for="email">E-mail</label>
            <input type="email" id="email" required>
          </div>
          <div class="labels">
            <label for="direccion">Dirección</label>
            <input type="text" id="direccion" required>
          </div>
        </div>
        <button>¡Lo quiero!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    color: #171717;
    font-weight: 800;
    font-size: x-large;
    margin-bottom: 25px;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .labels {
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
  }

  label {
    background: #5B21B6;
    width: 100%;
    text-align: start;
  }

  label:hover{
    cursor: pointer;
    background: #6D28D9;
  }

  label, input {
    padding: 3px 10px;
    border-radius: 25px;
  }

  input {
    border: 2px solid #6D28D9;
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