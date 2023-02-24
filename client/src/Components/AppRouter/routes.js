import {
    ADMIN_ROUTE,
    ORDER_ROUTE,
    FLOWER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    All_FLOWER_ROUTE,
    CATALOGS_ROUTE,
    CATALOG_ROUTE
} from "./const";
import FlowerPageContainer from "../../pages/allFLowers/FlowerPage/FlowerPageContainer";
import AuthContainer from "../../pages/auth/AuthContainer";
import OrderContainer from "../../pages/order/OrderContainer";
import AdminContainer from "../../pages/admin/AdminContainer";
import ListFlowersContainer from "../ListFlowers/ListFlowersContainer";
import FlowersContainer from "../../pages/allFLowers/AllFlowersContainer";
import CatalogsContainer from "../../pages/catalogs (index)/CatalogsContainer";

export const authRoute = [
    {
        path: ADMIN_ROUTE,
        Component: AdminContainer
    },
    {
        path: ORDER_ROUTE,
        Component: OrderContainer
    },
]

export const publicRote = [
    {
        path: All_FLOWER_ROUTE,
        Component: FlowersContainer
    },
    {
        path: CATALOGS_ROUTE,
        Component: CatalogsContainer
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthContainer
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthContainer
    },
    {
        path: FLOWER_ROUTE + "/:id",
        Component: FlowerPageContainer
    },
    {
        path: CATALOG_ROUTE + "/:nameFlower",
        Component: ListFlowersContainer
    },

]