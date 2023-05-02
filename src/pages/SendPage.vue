<template>
    <div> <h1>Отправка эфира</h1> </div>
    <div class="">
        <div><input v-model="to" placeholder="Адрес получателя" class="send"></div>
        <div><input v-model="value" placeholder="Сумма" class="send"></div>
        <div><button class="btn" @click="sendTx">Отправить</button></div>
        <div title="Просмотреть в обозревателе" style="width: 80%;" class="blockInfo">Хэш транзакции: 
            <a :href="'https://mumbai.polygonscan.com/tx/' + $store.state.txHash" target="_blank">{{ $store.state.txHash }}</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
    data(){
        return{
            //Sending value inputs
            to: "",
            value: ""
        }
    },
    methods: {
        ...mapActions({
            sendTransaction: "sendTransaction"
        }),
        async sendTx(){
            await this.sendTransaction([this.to, this.value])
            this.to = ""
            this.value = ""
        }
    }
}
</script>

<style>
</style>