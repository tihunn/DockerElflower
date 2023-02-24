import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCatalogs} from "../../store/catalogsReduser";
import ListFlowersContainer from "../../Components/ListFlowers/ListFlowersContainer";


const CatalogsContainer = (props) => {
    useEffect( () => {
        props.getCatalogs(props.activePage)
    }, [])

    return <ListFlowersContainer/>
}


function mapStateToProps(state) {
    return {
        activePage: state.flowers.activePage
    }
}

export default connect(
    mapStateToProps, {getCatalogs}
)(CatalogsContainer);