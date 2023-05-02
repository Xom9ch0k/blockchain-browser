<template>
    <div><h1>Подключение Metamask</h1></div>
    <div class="blockInfo">
        <button class="btn" @click="connectWallet">Подключить кошелек</button>
        <div class="blockInfo">Адрес кошелька: {{ $store.state.wallet.address }} </div>
        <div class="blockInfo">Название сети: {{ $store.state.wallet.chain }}</div>
        <div class="blockInfo">ID сети: {{ $store.state.wallet.chainID }}</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    methods: {
        ...mapActions({
            connectWallet: "connectWallet"
        }),
    }
}
</script>

<style>
h1{
    margin-left: 15px;
}
.deployBtn{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: green;
    border: 2px solid green;
    margin-left: auto;
    margin-top: 15px;
    width: 50%;
}
.blockInfo {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  width: 50%;
}

.btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.inp {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}

.send {
  flex-basis: 50%;
  padding: 20px;
  background-color: #f5f5f5;
}

.container{
    margin-top: 20px;
  flex-basis: 50%;
  padding: 20px;
  background-color: #f5f5f5;
  
}

.numberBtn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
</style>