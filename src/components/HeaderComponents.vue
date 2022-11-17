<template>
    <div class="row row-cols-2 debug">

        <div class="col debug">
            logo
        </div>

        <div class="col debug">
            <form class="d-flex justify-content-center align-items-center" @submit.prevent="search">
                <div class="me-2">
                    <label class="visually-hidden" for="">Search</label>
                    <input class="form-control" type="text" id="" placeholder="Search" v-model.trim="text">
                </div>

                <div>
                    <button type="submit" class="btn btn-danger">Search</button>
                </div>
            
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HeaderComponents',

        data() {
            return {
                text: ''
            }
        },
        methods: {
            search(){
                console.log(this.text)
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>