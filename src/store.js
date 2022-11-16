import { reactive } from "vue";

import axios from "axios";

export const store = reactive ({
    apiMostPopularURL: 'https://api.themoviedb.org/3/movie/popular?api_key=7c17f03fe6da8c1ceb4f8c968b53de1a&language=it-IT&page=1',
    listMostPopular: [],

    
    getMostPopular(){
        axios.get(this.apiMostPopularURL).then((res) => {

            this.listMostPopular = [...res.data.results];
        })
    }
})