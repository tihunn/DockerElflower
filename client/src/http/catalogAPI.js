import {$authHost, $host} from "./axios";

export const catalogAPI = {
    async addCatalog(nameCatalog) {
        const {data} = await $authHost.post("/catalog", {nameCatalog}, )
        return data
    },
    async getAllCatalogs() {
        const {data} = await $host.get("/catalog")
        return data
    },
    async getCatalog(id, page = 1, limit = 12) {
        const {data} = await $host.get("/catalog/", {params: {id, page, limit}})
        return data
    },
    async addFlower(catalogId, flowerId) {
        const {data} = await $authHost.put("/catalog/", {catalogId, flowerId})
        return data
    },
    async delCatalog(catalogId) {
        const {data} = await $authHost.delete(`/catalog/${catalogId}`)
        return data
    },
    async updateCatalog(catalogId, nameCatalog) {
        const {data} = await $authHost.put(`/catalog/${catalogId}`, {nameCatalog}, )
        return data
    },
}