import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue"
import SendPage from "@/pages/SendPage.vue"
import ContractPage from "@/pages/ContractPage.vue"

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/sendEth",
        component: SendPage
    },
    {
        path: "/contractPage",
        component: ContractPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router