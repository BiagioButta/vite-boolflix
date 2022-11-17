<template>
    <div>
      <HeaderComponents/>
    </div>
    <div>
      <CardComponents/>
    </div>
</template>

<script>

  import CardComponents from './components/CardComponents.vue';
  import HeaderComponents from './components/HeaderComponents.vue';

  export default {
    components: {
      CardComponents,
      HeaderComponents
    },
    data() {
      return {
        
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>