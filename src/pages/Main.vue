<template>
    <div><h1>Обозреватель блокчейна</h1></div>
    <block
        v-for="block in $store.state.blocks"
        :block = "block"
    />

</template>

<script>
import {mapActions} from 'vuex'
export default{
    methods: {
        ...mapActions({
            newBlockHeaders: "newBlockHeaders",
        })
    },
    mounted(){
        this.newBlockHeaders()
    }
}
</script>

<style>
h1{
    margin-left: 15px;
}
</style>