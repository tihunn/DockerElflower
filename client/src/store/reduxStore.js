import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {flowersReducer} from "./flowersReducer"
import {userReducer} from "./userReducer"
import {preloaderReducer} from "./preloaderReducer";
import {filterReducer} from "./FilterReduser";
import {oneFlowerReducer} from "./oneFlowerReducer";
import {orderReducer} from "./orderReducer";
import {catalogsReducer} from "./catalogsReduser";

let reducers = combineReducers({
    preloader: preloaderReducer,
    flowers: flowersReducer,
    user: userReducer,
    filter: filterReducer,
    oneFlower: oneFlowerReducer,
    orders: orderReducer,
    catalogs: catalogsReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))
window.test = store
export default store;