import {flowerAPI} from "../http/flowerAPI";
import {toggleIsFetching} from "./preloaderReducer";
import {catalogAPI} from "../http/catalogAPI";

const initialState = {
    flowers: [
        {img: null, id: null}
    ],
    totalCount: 1,
    activePage: 1
}
export let flowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setFlowers":
            return {
                ...state,
                flowers: action.flowers
            }
        case "setTotalCount":
            return {
                ...state,
                totalCount: action.totalCount
            }
        case "setActivePage":
            return {
                ...state,
                activePage: action.activePage
            }
        case "addFlowers":
            return {
                ...state,
                flowers: [...state.flowers, ...action.flowers]
            }
        case "cleanStateFlowers":
            return {
                state: initialState
            }
    }
    return state
}

const setFlowers = (flowers) => ({type: "setFlowers", flowers})
const addFlowers = (flowers) => ({type: "addFlowers", flowers})
const setTotalCount = (totalCount) => ({type: "setTotalCount", totalCount})
const setActivePage = (activePage) => ({type: "setActivePage", activePage})
const cleanStateFlowers = () => ({type: "cleanStateFlowers"})

export const getFlowers = (page = 1) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setActivePage(page))
    flowerAPI.getFlowers(page).then(data => {
        dispatch(setFlowers(data.rows))
        dispatch(setTotalCount(data.count))
        dispatch(toggleIsFetching(false))
    })
}
export const LoadMoreFlowers = (page) => (dispatch) => {
    dispatch(setActivePage(page))
    flowerAPI.getFlowers(page).then(data => {
        dispatch(addFlowers(data.rows))
    })
}

export const searchFlowers = (paramsData, page = 1) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setActivePage(page))
    flowerAPI.searchFlowers(paramsData, page).then(data => {
        dispatch(setFlowers(data.rows))
        dispatch(setTotalCount(data.count))
        dispatch(toggleIsFetching(false))
    })
}
export const getCatalog = (id, page = 1) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setActivePage(page))
    catalogAPI.getCatalog(id, page).then(data => {
        if (data === "Каталог пуст") {
            dispatch(cleanStateFlowers())
        } else if (data) {
            dispatch(setFlowers(data.rows))
            dispatch(setTotalCount(data.count))
        }
        dispatch(toggleIsFetching(false))
    })
}