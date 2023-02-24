import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatalogsSelection from "./CatalogsSelection";
import {addFlowerInCatalog, delCatalog, getCatalogs, updateCatalog} from "../../store/catalogsReduser";

function mapStateToProps(state) {
    return {
        catalogs: state.catalogs.arrCatalogs
    };
}


export default connect(
    mapStateToProps, {
        addFlowerInCatalog,
        getCatalogs,
        delCatalog,
        updateCatalog,
    }
)(CatalogsSelection);