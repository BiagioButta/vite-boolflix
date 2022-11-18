<template>
    <div class="container">
        <div class="row overflow-auto">
            <h3>Popular Movie</h3>
            <div class="col">
                <div class="d-flex">
                    <div class="details-film">
                        <div class="row debug row-cols-1">
                            <div class="col debug"><i class="fa-solid fa-circle-left"></i>  <i class="fa-solid fa-download"></i>  <i class="fa-solid fa-circle-play"></i></div>
                            <div class="col debug">
                                <div class="row">
                                    <div class="col debug"><img style="width : 300px" src="../img/321927.jpg" alt=""> </div>
                                    <div class="col debug">
                                        <h5>Titolo</h5>
                                        <h6>itolo originale</h6>
                                        <p>lingua originale + bandiera</p>
                                        <p>stelle</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">Trama</div>
                        </div>
                    </div>
                    <div v-for="(film,index) in store.arrayPopularMovie" :key="index">
                        <div class="my-card">
                            <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row overflow-auto">
            <h3>TopRated Movie</h3>
            <div class="col">
                <div class="d-flex">
                    <div v-for="(film,index) in store.arrayTopRatedMovie" :key="index">
                        <div class="my-card">
                            <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                            <!-- <div class="card-body">
                                <h5 class="card-title">{{film.title}}</h5>
                                <p>{{film.original_title}}</p>
                                <p>{{film.original_language}}</p>
                                <div class="d-flex"><i v-for="n in parseInt(film.vote_average / 2)" class="fa-solid fa-star"></i></div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row overflow-auto">
            <h3>Popular Tv</h3>
            <div class="col">
                <div class="d-flex">
                    <div v-for="(film,index) in store.arrayPopularTv" :key="index">
                        <div class="my-card">
                            <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                            <!-- <div class="card-body">
                                <h5 class="card-title">{{film.name}}</h5>
                                <p>{{film.original_name}}</p>
                                <p>{{film.original_language}}</p>
                                <div class="d-flex"><i v-for="n in parseInt(film.vote_average / 2)" class="fa-solid fa-star"></i></div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row overflow-auto">
            <h3>TopRated Tv</h3>
            <div class="col">
                <div class="d-flex">
                    <div v-for="(film,index) in store.arrayTopRatedTv" :key="index">
                        <div class="my-card">
                            <img :src="`https://image.tmdb.org/t/p/w500/` + film.poster_path" class="card-img-top" :alt="film.title">
                            <!-- <div class="card-body">
                                <h5 class="card-title">{{film.name}}</h5>
                                <p>{{film.original_name}}</p>
                                <p>{{film.original_language}}</p>
                                <div class="d-flex"><i v-for="n in parseInt(film.vote_average / 2)" class="fa-solid fa-star"></i></div>
                            </div> -->
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
            this.store.getPopularMovie();
            this.store.getPopularTv();
            this.store.getTopRatedMovie();
            this.store.getTopRatedTv()
        }
    }
    
</script>

<style lang="scss" scoped>
     .star-color{
        color:  yellow;
    }

    .my-card{
        margin-right: 10px;
        cursor: pointer;
        img{
            width: 100px;   
        }
    }

    /* width */
    ::-webkit-scrollbar {
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: black;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: red;
    }

    .details-film{
        position: fixed;
        width: 600px;
        height: 500px;
        border: 2px solid white;
        left: calc(50% - 300px);
        background-color: rgb(14, 17, 22);
    }
</style>