import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue"
import BlockPage from "@/pages/BlockPage.vue"
import TransactionPage from '@/pages/TransactionPage.vue'

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/block/:blockNumberOrHash",
        component: BlockPage
    },
    {
        path: "/transaction/:txHash",
        component: TransactionPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router