import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderItem from "./OrderItem";
import {delOrder} from "../../store/orderReducer";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps,
    {delOrder}
)(OrderItem);