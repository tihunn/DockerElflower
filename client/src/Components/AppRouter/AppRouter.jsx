import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import {authRoute, publicRote} from "./routes"
import {CATALOGS_ROUTE} from "./const";
import NavBarContainer from "../NavBar/NavBarContainer";


const AppRouter = (props) => {
    return (
        <>
            <NavBarContainer/>

            <Routes>
                {props.isAuth && authRoute.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRote.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={CATALOGS_ROUTE}/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;