<template>
  <div class="form-content">
    <div class="header">Elige tus topings:</div>
    <div class="form-container">
      <form action="" class="form">
        <div v-for="toppingue in toppings" class="input" :key="toppingue.id" >
          <input type="checkbox" :id="toppingue.id" >
          <label :for="toppingue.id" >{{ capitalizer(toppingue.topping) }}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toppings : [
        {topping : 'cereza',
        id: 1},
        {topping : 'galleta',
        id: 2},
        {topping : 'chispas',
        id: 3},
        {topping : 'moras',
        id: 4},
        {topping: 'arándano',
        id: 5},
        {topping : 'malvaviscos',
        id: 6},
        {topping : 'chocolate blanco',
        id: 7}
      ],
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