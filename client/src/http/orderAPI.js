import {$authHost} from "./axios";


export const orderAPI = {
    async addOrder(id) {
        const {data} = await $authHost.post(`/order/${id}`)
        return data
    },
    async postOrders(id) {
            const {data} = await $authHost.post(`/order/`)
            return data
    },
    async getOrders() {
        const {data} = await $authHost.get(`/order/`)
        return data
    },
    async delOrder(id) {
        const {data} = await $authHost.delete(`/order/${id}`)
        return data
    },
    async delOrders(id) {
        const {data} = await $authHost.delete(`/order/`)
        return data
    },
}