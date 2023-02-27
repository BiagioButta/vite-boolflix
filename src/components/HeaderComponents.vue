<template>
    <div class="container">
        
        <div class="row row-cols-2 align-items-center">

            <div class="col d-flex align-items-center">
                <h1 class="me-5">BoolFlix</h1>
                
                <h3 :class="{active : store.activeCategory == 0}" @click="store.callAPI(store.popularEndpoint[0])">Movies</h3>
                <h3 :class="{active : store.activeCategory == 1}" @click="store.callAPI(store.popularEndpoint[1])">TV Series</h3>
                
            </div>

            <div class="col">
                <form class="d-flex justify-content-end align-items-center" @submit.prevent="store.callAPI(store.categoryEndpoint[store.activeCategory])">
                    <div class="me-2">
                        <input class="form-control" type="text" placeholder="Search" v-model="store.query">
                    </div>

                    <div>
                        <button type="submit" class="btn">Search</button>
                    </div>
                
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    export default {
        name: 'HeaderComponents',

        data() {
            return {
                store
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    h1{
        color: red;
        font-weight: bold;
    }

    button{
        background-color: red;
        color: white;
    }

    h3{
        cursor: pointer;
        margin-right: 20px;
        &.active {
            border-bottom: 2px solid white;
        }
    }
</style>