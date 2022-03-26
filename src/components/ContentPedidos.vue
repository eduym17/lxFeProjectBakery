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

<style>

</style>
