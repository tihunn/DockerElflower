import {orderAPI} from "../http/orderAPI";
import {toggleIsFetching} from "./preloaderReducer";
import filter from "../Components/Filter/Filter";


const initialState = {
    orders: []
}


export let orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setOrders":
            return {
                ...state,
                orders: action.orders
            }
        case "cleanOrders":
            return {
                ...initialState
            }
        case "delOrder":
            return {
                ...state,
                orders: state.orders.filter( order => order.id !== action.id )
            }
    }
    return state
}


const setOrders = (orders) => ( {type: "setOrders", orders} )
const cleanOrders = () => ( {type: "cleanOrders",} )
const deleteOrder = (id) => ( {type: "delOrder", id} )


export const addOrder = (id) => (dispatch) => {
    orderAPI.addOrder(id).then( ()=>{} )
}
export const getOrders = () => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    orderAPI.getOrders().then( (data)=>{
        if (data !== "Закажите цветы!") {
            dispatch(setOrders(data))
        }
        dispatch( toggleIsFetching(false) )
    })
}
export const postOrders = () => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    orderAPI.postOrders().then( (data)=>{
        dispatch( cleanOrders() )
        dispatch( toggleIsFetching(false) )
    })
}
export const delOrder = (id) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    orderAPI.delOrder(id).then( (data)=>{
        dispatch( deleteOrder(id) )
        dispatch( toggleIsFetching(false) )
    })
}
export const deleteAllOrders = (id) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    orderAPI.delOrders().then( (data)=>{
        dispatch( cleanOrders() )
        dispatch( toggleIsFetching(false) )
    })
}
