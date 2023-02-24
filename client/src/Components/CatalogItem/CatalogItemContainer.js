import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatalogItem from "./CatalogItem";
import {getCatalog} from "../../store/flowersReducer";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps, {getCatalog}
)(CatalogItem);