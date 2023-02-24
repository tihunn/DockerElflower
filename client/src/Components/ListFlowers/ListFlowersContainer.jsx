import React, {useEffect} from "react";
import {getFlowers} from "../../store/flowersReducer";
import {connect} from "react-redux";
import ListFlowers from "./ListFlowers";
import Preload from "../Preload/Preload";
import {addOrder} from "../../store/orderReducer";


const ListFlowersContainer = (props) => {

    if (props.isFetching) {return <Preload/>}
    return <>
        <ListFlowers role={props.role} flowers={props.flowers} addOrder={props.addOrder} catalogs={props.catalogs}/>
    </>
}

let mapStateToProps = (state) => {
    return {
        role: state.user.role,
        flowers: state.flowers.flowers,
        activePage: state.flowers.activePage,
        isFetching: state.preloader.isFetching,
        catalogs: state.catalogs.arrCatalogs
    }
}

export default connect(mapStateToProps, {getFlowers, addOrder})(ListFlowersContainer)