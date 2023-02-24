import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setChangeCheckbox} from "../../store/FilterReduser";
import VariantsBloomTime from "./VariantsBloomTime";

function mapStateToProps(state) {
    return {
        monthsCheckboxes: state.filter.bloomTime,
        }
    }

export default connect(
    mapStateToProps, {setChangeCheckbox}
)(VariantsBloomTime);