<template>
    <div class="container">
        
        <div class="row row-cols-2 align-items-center">

            <div class="col">
                <h1>BoolFlix</h1>
            </div>

            <div class="col">
                <form class="d-flex justify-content-end align-items-center" @submit.prevent="search">
                    <div class="me-2">
                        <label class="visually-hidden" for="">Search</label>
                        <input class="form-control" type="text" id="" placeholder="Search" v-model.trim="text">
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
                text: ''
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
</style>