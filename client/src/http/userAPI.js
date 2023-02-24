import {$host, $authHost} from "./axios";
import jwtDecode from "jwt-decode";

export const userAPI = {
    async loginOrReg(email, password, isLogin) {
        const url = isLogin ? "/auth/login" : "/auth/reg"
        const {data} = await $host.post(url, {email, password})
        localStorage.setItem("token", data.token)
        return jwtDecode(data.token)
    },
    async checkAuth() {
        const {data} = await $authHost.get("/auth/check")
        localStorage.setItem("token", data.token)
        return jwtDecode(data.token)
    },
}