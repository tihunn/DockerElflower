import {toggleIsFetching} from "./preloaderReducer";
import {catalogAPI} from "../http/catalogAPI";

let initialState = {
    arrCatalogs: [
        {
            id: 0,
            nameCatalog: "",
            image: []
        }
    ],
    isSuccessAdd: false
}

export let catalogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setCatalogs":
            return {
                ...state,
                arrCatalogs:  action.catalogs,
            }
        case "toggleSuccessAdd":
            return {
                ...state,
                isSuccessAdd:  action.isSuccessAdd,
            }
    }
    return state
}


const setCatalogs = (catalogs) => ({type: "setCatalogs", catalogs: catalogs})
export const toggleSuccessAdd = (successAdd) => ({type: "toggleSuccessAdd", isSuccessAdd: successAdd})


export const addCatalog = (nameCategory) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.addCatalog(nameCategory).then( () => {
        dispatch( toggleSuccessAdd(true) )
        dispatch( toggleIsFetching(false) )
    })
}
export const getCatalogs = () => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.getAllCatalogs().then( (data) => {
        dispatch( setCatalogs(data) )
        dispatch( toggleIsFetching(false) )
    })
}
export const addFlowerInCatalog = (catalogId, flowerId) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.addFlower(catalogId, flowerId).then( (data) => {
        dispatch( toggleIsFetching(false) )
    })
}
export const delCatalog = (catalogId) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.delCatalog(catalogId).then( (data) => {
        if (data === `Каталог с id ${catalogId} удалён`) {
            dispatch ( getCatalogs() )
            dispatch( toggleSuccessAdd(true) )
        }
        dispatch( toggleIsFetching(false) )
    })
}
export const updateCatalog = (catalogId, nameCategory) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.updateCatalog(catalogId, nameCategory).then( (data) => {
        dispatch ( getCatalogs() )
        dispatch( toggleSuccessAdd(true) )
        dispatch( toggleIsFetching(false) )
    })
}
