<template>
  <div class="navBar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    msg: String
  }
}
</script>