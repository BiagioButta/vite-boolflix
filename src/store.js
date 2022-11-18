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
    api_key: '?api_key=7c17f03fe6da8c1ceb4f8c968b53de1a',
    
    activeIndex: 0,
    arrayPopularMovie: [],
    arrayPopularTv: [],
    arrayTopRatedMovie: [],
    arrayTopRatedTv: [],

    params: {
        query: '',
        language: 'it-IT'
    },

    getImg(){
        return `background-image: url(./${this.arrayPopularMovie[this.activeIndex].poster_path})`
    },
    
    getPopularMovie(){

        const url = this.baseUrl + this.endPointPopularMovie + this.api_key;
        const params = this.params;
        console.log(url);
        axios.get(url,{params}).then((res) => {

            this.arrayPopularMovie = [...res.data.results];
        })
    },
    getTopRatedMovie(){

        const url = this.baseUrl + this.endPointTopRatedMovie + this.api_key;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayTopRatedMovie = [...res.data.results];
        })
    },
    getPopularTv(){

        const url = this.baseUrl + this.endPointPopularTv + this.api_key;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayPopularTv = [...res.data.results];
        })
    },
    getTopRatedTv(){

        const url = this.baseUrl + this.endPointTopRatedTv + this.api_key;
        const params = this.params;
        axios.get(url,{params}).then((res) => {

            this.arrayTopRatedTv = [...res.data.results];
        })
    }
})