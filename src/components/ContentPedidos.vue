<template>
  <div class="content">
    <form-bake/>
    <form-toppings/>
    <form-contacto/>
  </div>
</template>

<script>
import FormBake from '../components/FormBake.vue'
import FormContacto from './FormContacto.vue'
import FormToppings from './FormToppings.vue'

export default {
  components: { FormBake, FormToppings, FormContacto },
}
</script>

<style scoped>
  .content {
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/bgblack1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    overflow: hidden;
  }

  .heroText {
    font-size: 60px;
    color: #18181B;
  }

</style>
