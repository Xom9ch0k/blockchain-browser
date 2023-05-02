<template>
    <div class="navbar">
        <div>
            <button class="btn" @click="$router.push('/')">Главное меню</button>
            <button style="margin-left: 15px;" class="btn" @click="$router.push('/sendEth')">Отправить эфир</button>
            <button style="margin-left: 15px;" class="btn" @click="$router.push('/contractPage')">Взаимодействие с контрактом</button>
        </div>

        <div>
            <input v-focus v-model="txHash" placeholder="Введите хэш транзакции">
            <button class="btn" @click="openTx ">Открыть</button>
        </div>
    </div>
</template>

<script>
export default{
    name: "navbar",
    data(){
        return{
            blockNumberOrHash: "",
            txHash: ""
        }
    },
    methods: {
        // openBlock(){
        //     this.$router.push(`/block/${this.blockNumberOrHash}`)
        //     this.blockNumberOrHash = "" //Чтобы очистить поле формы
        // },
        openTx(){
            this.$router.push(`/transaction/${this.txHash}`)
            this.txHash = "" //Чтобы очистить поле формы
        }
    }
}
</script>

<style>
.navbar{
    background-color: white;
    align-items: center;
    padding: 0 15px;
    position:sticky;
}
input{
    width: 35%;
    padding: 10px 15px;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
}
input:focus{
    border: 2px solid #555;
}
.btn{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: green;
    border: 2px solid green;
    margin-left: auto;
    margin-top: 15px;
}
</style>
