<template>
  <header :class="$style.container">
    {{ msg }}
  </header>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Footer Content'
    }
  }
}
</script>


<style module>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  border: 1px solid #999;
}
</style>