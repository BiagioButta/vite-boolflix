<template>
    <div>
      <HeaderComponents/>
    </div>
    <div class="container">
    
      <div class="row row-cols-5 justify-content-center">
        <CardComponents v-show="store.igniteTransition" v-for="(item,index) in store.titleList" :key="index" :title="item" :currentTitle="index"/>
      </div>
      
    </div>
</template>

<script>
  import {store} from './store';
  
  import CardComponents from './components/CardComponents.vue';
  import HeaderComponents from './components/HeaderComponents.vue';

  export default {
    components: {
    CardComponents,
    HeaderComponents,
},
    data() {
      return {
        store
      }
    },
    created(){
      store.callAPI(store.popularEndpoint[store.activeCategory]);
    }

  }
</script>

<style lang="scss" scoped>

</style>