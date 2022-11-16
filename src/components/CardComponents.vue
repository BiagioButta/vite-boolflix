<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(film,index) in store.listMostPopular" :key="index">
                <div class="card" style="width: 18rem;">
                    <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                    <div class="card-body">
                        <h5 class="card-title">{{film.title}}</h5>
                        <p class="card-text">{{film.overview}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { store } from '../store'

    export default {
        name: 'CardComponents',
        data() {
            return {
                store
            }
            
        },
        created(){
            this.store.getMostPopular()
        }
    }
    
</script>

<style lang="scss" scoped>

</style>