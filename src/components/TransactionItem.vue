<template>
    <div class="txInfo">
        <div class="txVal">Хэш транзакции: {{ transaction.hash}}</div>
        <div class="txVal">Адрес отправителя: {{ transaction.from }}</div>
        <div class="txVal">Адрес получателя: {{ transaction.to}}</div>
        <div class="txVal">Количество газа в транзакции: {{ transaction.gas }}</div>
        <div class="txVal">Номер блока: <router-link :to="`/block/${transaction.blockNumber}`">{{ transaction.blockNumber }}</router-link></div>
        <div><button class="btn" @click="$router.push(`/block/${transaction.blockNumber}`)">Назад к блоку</button></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name: "tx-item",
    data(){
        return{
            transaction: {}
        }
    },
    props:{
        txHash:{
            type: String,
            require: true
        }
    },
    methods: {
        ...mapActions({
            getTransaction: 'getTransaction'
        })
    },
    async mounted(){
        this.transaction = await this.getTransaction(this.txHash)
    },
    watch:{
        async txHash(){
            this.transaction = await this.getTransaction(this.txHash)
        }
    }
}
</script>

<style>
.txInfo{
    padding: 15px;
    border: 2px solid green;
    margin-top: 15px;
}
.txVal{
    margin-top: 5px;
}
</style>
