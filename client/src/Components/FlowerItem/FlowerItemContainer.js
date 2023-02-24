import React from 'react';
import {connect} from 'react-redux';
import FlowerItem from "./FlowerItem";


function mapStateToProps(state) {
    return {
        role: state.user.user.role,
    };
}


export default connect(
    mapStateToProps, {}
)(FlowerItem);