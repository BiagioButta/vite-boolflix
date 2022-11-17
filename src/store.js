import { reactive } from "vue";

import axios from "axios";

export const store = reactive ({

    apiMostPopularURL: 'https://api.themoviedb.org/3/movie/popular?api_key=7c17f03fe6da8c1ceb4f8c968b53de1a&language=it-IT&page=1',

    
    baseUrl :'https://api.themoviedb.org/3/',
    endPointPopularMovie: 'movie/popular',
    endPointTopRatedMovie: 'movie/top_rated',
    endPointPopularTv: 'tv/popular',
    endPointTopRatedTv: 'tv/top_rated',
    endPointSearchMovie: 'search/movie',
    endPointSearchTv: 'search/tv',
    
    arrayPopularMovie: [],
    arrayPopularTv: [],
    arrayTopRatedMovie: [],
    arrayTopRatedTv: [],

    params: {
        api_key: '7c17f03fe6da8c1ceb4f8c968b53de1a',
        query: '',
        language: 'it-IT'
    },
    
    getMostPopular(){
        axios.get(this.apiMostPopularURL).then((res) => {

            this.arrayPopularMovie = [...res.data.results];
        })
    }
})