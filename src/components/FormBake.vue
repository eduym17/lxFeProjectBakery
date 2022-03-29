<template>
  <div class="form-content">
    <div class="header">Elige tu pastel ideal:</div>
    <div class="form-container">
      <form action="" class="form">
        <div class="input" v-for="flavour in cakes" :key="flavour.id">
          <input type="checkbox" :id="flavour.id">
          <label :for="flavour.id">{{ capitalizer(flavour.name) }}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cakes : [
        {name: 'chocolate',
        id: 1},
        {name: 'fresa',
        id: 2},
        {name: 'vainilla',
        id: 3},
        {name: 'caramelo',
        id: 4},
        {name: 'canoli',
        id: 5},
        {name: 'coco',
        id: 6},
      ]
    }
  },
  methods: {
    capitalizer(text){
      text = text.split('');
      text[0] = text[0].toUpperCase();
      return text.join('')
    }
  }
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