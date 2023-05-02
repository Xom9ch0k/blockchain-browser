<template>
    <div class="blockInfo">
        <h1>Взаимодействие с контрактом</h1>
        <button class="deployBtn" @click="this.deployContract">Задеплоить контракт</button>
        <div title="Просмотреть в обозревателе" style="width: 80%;" class="blockInfo">Хэш транзакции: 
            <a :href="'https://mumbai.polygonscan.com/tx/' + $store.state.deployHash" target="_blank">{{ $store.state.deployHash }}</a>
        </div>
        <!-- <div>Адрес контракта: {{ $store.state. }}</div> -->
    </div>

    <div class="container">
        <div class="send">
            <h1>Функция с числом</h1>
            <input v-model="number" placeholder="Введите число"> 
            <input v-model="contractAddress" placeholder="Введите адрес конктракта">
            <button class="numberBtn" @click="sNumber">Установить число</button>
            <div>
                <input v-model="contractAddress" placeholder="Введите адрес конктракта">
                <button class="btn" @click="gNumber">Получить число</button>
                <div>Число: {{ gettingNumber }}</div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="send">
            <h1>Функция со строкой</h1>
            <input v-model="str" placeholder="Введите строку"> 
            <input v-model="contractAddress" placeholder="Введите адрес конктракта">
            <button class="numberBtn" @click="sStr">Установить строку</button>
            <div>
                <input v-model="contractAddress" placeholder="Введите адрес конктракта">
                <button class="btn" @click="gStr">Получить строку</button>
                <div>Число: {{ gettingString }}</div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="send">
            <h1>Функция с массивом</h1>
            <input v-model="dataNumber" placeholder="Введите число"> 
            <input v-model="contractAddress" placeholder="Введите адрес конктракта">
            <button class="numberBtn" @click="sData">Добавить число в массив</button>
            <div>
                <input v-model="contractAddress" placeholder="Введите адрес конктракта">
                <button class="btn" @click="gData">Получить массив</button>
                <div>Число: {{ data }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    data(){
        return{
            //Inputs for setters
            number: "",
            str: "",
            dataNumber: "",
            //Getters
            gettingNumber: "",
            gettingString: "",
            data: [],
            //Address
            contractAddress: ""
        }
    },
    methods: {
        ...mapActions({
            connectWallet: "connectWallet",
            sendTransaction: "sendTransaction",
            deployContract: "deployContract",
            setNumber: "setNumber",
            getNumber: "number",
            setStr: "setStr",
            getStr: "str",
            setData: "setData",
            getData: "getData"
        }),
        async sNumber(){
            await this.setNumber([this.contractAddress,this.number])
            this.number = ""
        },
        async gNumber(){
            this.gettingNumber = await this.getNumber([this.contractAddress])
        },
        async sStr(){
            await this.setStr([this.contractAddress, this.str])
            this.str = ""
        },
        async gStr(){
            this.gettingString = await this.getStr([this.contractAddress])
        },
        async sData(){
            await this.setData([this.contractAddress, this.dataNumber])
            this.dataNumber = ""
        },
        async gData(){
            this.data = await this.getData([this.contractAddress])
        }
    },
    mounted(){
    }
}
</script>

<style>
</style>