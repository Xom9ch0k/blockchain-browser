import { createStore } from 'vuex'
const Web3 = require("web3")
const web3 = new Web3('wss://polygon-mumbai.g.alchemy.com/v2/wusrTgSFSsScFKTK6Nqa5rFoisfYXjPW')


export default createStore({
    state:{
        blocks: [],
        transactions:[]
    },
    getters:{
    },
    mutations:{
        addBlock(state, newBlock){
            state.blocks.unshift(newBlock)
        },
        addTransaction(state, tx){
            state.transactions.unshift(tx)
        }
    },
    actions:{
        async newBlockHeaders({commit}){
            web3.eth.subscribe('newBlockHeaders')
            .on('data', blockHeader => {
                let newBlock = {
                    number: blockHeader.number,
                    hash: blockHeader.hash
                }
                commit("addBlock", newBlock)
            })
        },
        async getBlock({commit}, blockNumberOrHash){
            return await web3.eth.getBlock(blockNumberOrHash)
        },
        async getTransaction({commit}, hash){
            return await web3.eth.getTransaction(hash)
        }
    },
    modules:{
    }
})