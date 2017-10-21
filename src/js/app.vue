<template>
  <div :class="[$style.container]">
    <AppHeader></AppHeader>
    <p :class="$style.italic">{{ msg }}</p>
    <img :src="img" alt="sample">
    <AppFooter></AppFooter>
  </div>
</template>


<script>
import AppHeader from './app_header.vue';
import AppFooter from './app_footer.vue';
import sample from '../img/sample.jpg';

console.log(sample);

export default {
  data () {
    return {
      msg: 'Body Content',
      img: sample
    }
  },
  created () {
    console.log(this.$style.italic)
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>


<style module>
:root {
  --bgColor: #efefef;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
}

.italic {
  font-style:italic;
  display: flex;
  span{
    border: 3px solid green;
  }
}

@media (width >= 320px) and (width < 440px){
  .container{
    background: var(--bgColor);
  }
}
</style>