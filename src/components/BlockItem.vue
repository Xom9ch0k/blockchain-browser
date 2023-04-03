<template>
    <div class="blockInfo">
        <div class="blockVal">Номер блока: {{ block.number}} 
            <button class="blockBtn" @click="$router.push(`/block/${block.number - 1}`)" title="Предыдущий блок"><b>←</b></button>
            <button class="blockBtn" @click="$router.push(`/block/${block.number + 1}`)" title="Следующий блок"><b>→</b></button>
        </div>
        <div class="blockVal">Хэш блока: {{ block.hash }}</div>
        <div class="blockVal">Количество использованного газа: {{ block.gasUsed }}</div>
        <div class="blockVal">Список транзакции в блоке: 
            <router-link 
                v-for="txHash in block.transactions"
                :to="`/transaction/${txHash}`"
            >
            <div class="blockVal">
                {{ txHash }}
            </div>
            </router-link>
        </div>
        <div class="blockVal">Стоимость: {{ block.baseFeePerGas }}</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name: "block-item",
    data(){
        return{
            block: {}
        }
    },
    props:{
        blockNumber:{
            type: Number,
            require: true
        }
    },
    methods: {
        ...mapActions({
            getBlock: 'getBlock'
        })
    },
    async mounted(){
        this.block = await this.getBlock(this.blockNumber)
    },
    watch:{
        async blockNumber(){
            this.block = await this.getBlock(this.blockNumber)
        }
    }
}
</script>

<style>
.blockInfo{
    padding: 15px;
    border: 2px solid green;
    margin-top: 15px;
}
.blockVal{
    margin-top: 5px;
}
.blockBtn{
    align-self: flex-end;
    padding: 5px 10px;
    background: none;
    color: green;
    border: 2px solid green;
    margin-left: auto;
    margin-right: 5px;
}
b{
    font-size: large;
}
</style>
