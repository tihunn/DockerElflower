import React, {Component} from 'react';
import {connect} from 'react-redux';
import Admin from "./Admin";
import {addCatalog, toggleSuccessAdd} from "../../store/catalogsReduser";

function mapStateToProps(state) {
    return {
        isSuccessAdd: state.catalogs.isSuccessAdd
    };
}

export default connect(
    mapStateToProps, {
        addCatalog,
        toggleSuccessAdd
    }
)(Admin);

