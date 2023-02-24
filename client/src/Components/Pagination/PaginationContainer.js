import React from 'react';
import {connect} from 'react-redux';
import Pages from "./PaginationComponent";
import {getFlowers} from "../../store/flowersReducer";


function mapStateToProps(state) {
    return {
        activePage: state.flowers.activePage,
        totalCount: state.flowers.totalCount,
    }
}

export default connect(mapStateToProps, {getFlowers})(Pages);