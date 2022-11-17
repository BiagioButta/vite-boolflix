import { reactive } from "vue";

import axios from "axios";

export const store = reactive ({

    
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
    
    getPopularMovie(){

        const url = this.baseUrl + this.endPointPopularMovie;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayPopularMovie = [...res.data.results];
        })
    },
    getTopRatedMovie(){

        const url = this.baseUrl + this.endPointTopRatedMovie;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayTopRatedMovie = [...res.data.results];
        })
    },
    getPopularTv(){

        const url = this.baseUrl + this.endPointPopularTv;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayPopularTv = [...res.data.results];
        })
    },
    getTopRatedTv(){

        const url = this.baseUrl + this.endPointTopRatedTv;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayTopRatedTv = [...res.data.results];
        })
    }
})