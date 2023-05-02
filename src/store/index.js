import { createStore } from 'vuex'
// const Web3 = require("web3")
// const web3 = new Web3('wss://polygon-mumbai.g.alchemy.com/v2/wusrTgSFSsScFKTK6Nqa5rFoisfYXjPW')
const ethers = require("ethers")
let provider = new ethers.getDefaultProvider("wss://polygon-mumbai.g.alchemy.com/v2/wusrTgSFSsScFKTK6Nqa5rFoisfYXjPW")

import {ABI} from '@/contracts/Contract.abi.js'
import {bytecode} from '@/contracts/Contract.bin.js'

export default createStore({
    state:{
        wallet : {
            address: "",
            chain: "",
            chainID: ""
        },
        contractAddress: "",
        data: [],
        txHash: "",
        deployHash: ""
    },
    getters:{
    },
    mutations:{

    },
    actions:{
        async connectWallet({state}){
            //Проверка есть ли метамаск, иначе подключить его
            if (typeof window.ethereum !== 'undefined') {
                console.log("Ethereum client installed!")
                if (ethereum.isMetaMask === true) {
                    console.log("Metamask installed!")
                    if (ethereum.isConnected() !== true) {
                        console.log("Metamask is not connected!")
                        await ethereum.enable()
                    }
                    console.log("Metamask connected!")
                }
                else{
                    alert("Metamask is not installed!")
                }
            }
            else{
                alert("Ethereum client is not installed!")
            }
            //Подключение аккаунта
            await ethereum.request({method: 'eth_requestAccounts'})
            .then( accounts => {
                state.wallet.address = accounts[0]

                console.log(`Account ${state.wallet.address} connected`)
            })
            //Создание провайдера
            provider = new ethers.providers.Web3Provider(ethereum)

            let network = await provider.getNetwork()
            state.wallet.chain = network.name
            state.wallet.chainID = network.chainId

            ethereum.on('accountsChanged', (accounts) => {
                state.wallet.address = accounts[0]
                console.log(`accounts changed to ${state.wallet.address}`)
            })
            ethereum.on('chainChanged', async (chainID) => {
                provider = new ethers.providers.Web3Provider(ethereum)
                let network = await provider.getNetwork()
                state.wallet.chain = network.name
                state.wallet.chainID = network.chainId
    
                console.log(`chain changed to ${state.wallet.chain}`)
            })
        },
        async sendTransaction({state}, args){
            let[to, value] = args

            value = ethers.BigNumber.from(value)
            value =  value.toHexString()   

            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                from: state.wallet.address,
                to: to,
                value: value, // 2441406250 количество отправляемого эфира в HEX
                }]
            })
            .then(hash => {
                console.log("Transaction hash: ", hash)
                state.txHash = hash
            })
        },
        async deployContract({state}){

            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                from: state.wallet.address,
                data: bytecode
                }]
            })
            .then((hash) => {
                console.log("Transaction hash: ", hash)
                state.deployHash = hash
            })
        },
        async setNumber({state}, args ){
            const [contractAddress, number] = args

            let iFace = new ethers.utils.Interface(ABI)

            let txData = iFace.encodeFunctionData( "setNumber", [number])
            
            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: state.wallet.address,
                    to: contractAddress,
                    data: txData
                }]
            })
            .then(hash => {
                console.log(`Tx hash ${hash}`)
            })
        },
        async number({state}, args){
            const [contractAddress] = args
            let myContract = new ethers.Contract(contractAddress, ABI, provider)
            let number = await myContract.number()
            console.log(number)
            return number
        },
        async setStr({state}, args){
            const [contractAddress, str] = args

            let iFace = new ethers.utils.Interface(ABI)

            let txData = iFace.encodeFunctionData( "setStr", [str])
        
            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: state.wallet.address,
                    to: contractAddress,
                    data: txData
                }]
            })
            .then(hash => {
                console.log(`Tx hash ${hash}`)
            })
        },
        async str({state}, args){
            const [contractAddress] = args

            let myContract = new ethers.Contract(contractAddress, ABI, provider)
            let string = await myContract.str()
            console.log(string)
            return string
        },
        async setData({state}, args){
            const [contractAddress, number] = args

            let iFace = new ethers.utils.Interface(ABI)

            let txData = iFace.encodeFunctionData( "setData", [number])
        
            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: state.wallet.address,
                    to: contractAddress,
                    data: txData
                }]
            })
            .then(hash => {
                console.log(`Tx hash ${hash}`)
            })
        },
        async getData({state}, args){
            const [contractAddress] = args

            let myContract = new ethers.Contract(contractAddress, ABI, provider)

            state.data = await myContract.getData()
            console.log(state.data)
            return state.data
        }
    },
    modules:{
    }
})