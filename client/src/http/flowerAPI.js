import {$host, $authHost} from "./axios";
import jwtDecode from "jwt-decode";

export const flowerAPI = {
    async createFlower(formData) {
        const {data} = await $authHost.post("/flower/", formData)
        return data
    },
    async deleteFlower(id) {
        const {data} = await $authHost.delete(`/flower/${id}`)
        return data
    },
    async updateFlower(formData) {
        const {data} = await $authHost.put(`/flower/`, formData)
        return data
    },
    async getFlowers(page = 1, limit = 12) {
        const {data} = await $host.get("/flower", {params: {page, limit}} )
        return data
    },
    async getOneFlower(id) {
        const {data} = await $host.get(`/flower/${id}`)
        return data
    },
    async searchFlowers(paramsData, page = 1, limit = 12) {
        const {data} = await $host.get(`/flower/`, {params: {...paramsData, page, limit}})
        return data
    },
    async addImg(formData) {
        const {data} = await $authHost.post(`/flower/img`, formData)
        return data
    },
    async delImg(nameImage) {
        const {data} = await $authHost.delete(`/flower/img`, {params: {nameImage}})
        return data
    },
}




