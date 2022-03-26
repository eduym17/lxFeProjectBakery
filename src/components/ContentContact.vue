<template>
  <div class="content">
    <form-contacto/>
  </div>
</template>

<script>
import FormContacto from './FormContacto.vue'
export default {
  components: { FormContacto },

}
</script>

<style scoped>
  .content {
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/bgblack3.jpg");
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    overflow: hidden;
  }

  h1 {
    font-size: 60px;
    color: white;
  }

</style>