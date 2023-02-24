import React from 'react';
import {connect} from "react-redux";
import {setIsSunAndShadow, setSunOrShadow, toggleHideLightSensitivity} from "../../store/FilterReduser";
import LightSensitivity from "./LightSensitivity";

function mapStateToProps(state) {
    return {
        sunOrShadow: state.filter.sunOrShadow,
        isSunAndShadow: state.filter.isSunAndShadow,
        isHiddenLightSensitivity: state.filter.isHiddenLightSensitivity
    }
}

export default connect(mapStateToProps, {
    setSunOrShadow,
    setIsSunAndShadow,
    toggleHideLightSensitivity
})(LightSensitivity)
