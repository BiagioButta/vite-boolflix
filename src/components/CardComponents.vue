<template>
   
            <div class="col position-relative mb-5">
                     
                <img :src="store.getCoverImage(title.poster_path)">
                <button class="btn red-btn">Show More</button>
                    <!-- <h3>{{store.activeCategory == 0 ? title.title : title.name}}</h3>
                    <p>{{store.activeCategory == 0 ? title.original_title : title.original_name}}</p>
            
                    <img :src="store.getCountryFlag(title.original_language)" alt="">
                    <div class="stars">
                        <span>Rating: </span>
                        <i v-for="star in (Math.round(title.vote_average / 2))" class="fa-solid fa-star"></i>
                        <i v-for="star in (5 - (Math.round(title.vote_average / 2)))" class="fa-regular fa-star"></i>
                        <span v-if="title.vote_average == 0">N/C</span>
                    </div>
                    <div class="genres">
                        <span class="me-2">Genres:</span>
                        <span class="genre-item" v-for="item in store.titleGenreList[currentTitle]">{{item.name}}</span>
                    </div>
                    <div class="cast">
                        <span class="me-2">Cast:</span>
                        <span class="cast-item" v-for="item in store.titleCastList[currentTitle]">{{item}}</span>
                    </div>
                    <p class="mt-4">Synopsis:</p>
                    <div>{{title.overview}}</div> -->
            
                     
            </div>
     
</template>

<script>

    import { store } from '../store';
    

    export default {

        name: 'CardComponents',
        props: {
            title: Object,
            currentTitle: Number
        },
        data() {
            return {
                store
            }
            
        }
    }
    
</script>

<style lang="scss" scoped>
  

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

   .red-btn{
    background-color: red;
    color: white;
    position: absolute;
    left: 13px;
    bottom: -20px;
   }

   img{
    width: 240px;
   }
</style>