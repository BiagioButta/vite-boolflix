<template>
    <div class="container">
        <div class="row">
            <h1>Popular Movie</h1>
            <div class="col">
                <div class="d-flex">
                    <div v-for="(film,index) in store.arrayPopularMovie" :key="index">
                        <div class="my-card">
                            <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                            <div class="card-body">
                                <h5 class="card-title">{{film.title}}</h5>
                                <p>{{film.original_title}}</p>
                                <p>{{film.original_language}}</p>
                                <div class="d-flex"><i v-for="n in parseInt(film.vote_average / 2)" class="fa-solid fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { store } from '../store';
    

    export default {

        name: 'CardComponents',
        data() {
            return {
                store
            }
            
        },
        methods: {
            
        },
        created(){
            this.store.getMostPopular()
        }
    }
    
</script>

<style lang="scss" scoped>
     .star-color{
        color:  yellow;
    }

    .my-card{
        margin-right: 10px;
        img{
            width: 100px;   
        }
    }
</style>