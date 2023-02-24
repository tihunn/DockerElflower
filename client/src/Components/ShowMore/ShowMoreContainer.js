import React from 'react';
import {connect} from 'react-redux';
import {getFlowers} from "../../store/flowersReducer";
import ShowMore from "./ShowMore";


function mapStateToProps(state) {
    return {
        activePage: state.flowers.activePage,
        totalCount: state.flowers.totalCount,
        s: state.flowers
    }
}

export default connect(mapStateToProps, {getFlowers})(ShowMore);