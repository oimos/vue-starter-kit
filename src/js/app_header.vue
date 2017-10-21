<template>
  <header :class="$style.container">
    {{ msg }}
  </header>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Header Content'
    }
  }
}
</script>


<style module>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  border: 1px solid #ccc;
}
</style>