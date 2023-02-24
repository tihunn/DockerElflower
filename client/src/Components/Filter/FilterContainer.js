import React, {useState} from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";
import {
    setAvailable,
    setChangeCheckbox,
    setDescription,
    setFile,
    setHeight,
    setHeightMin,
    setIsSunAndShadow,
    setNameFlower,
    setPrice,
    setSunOrShadow,
    setWholesale
} from "../../store/FilterReduser";
import {searchFlowers} from "../../store/flowersReducer";
import {compose} from "redux";
import withCreatorStrBloomTime from "../../hoc/withCreatorStrBloomTime";
import withCreatorStrLightSensitivity from "../../hoc/withCreatorStrLightSensitivity";


const FilterContainer = (props) => {
    const [hide, setHide] = useState(true)
    const [isHeight, setIsHeight] = useState(true)
    const onHide = () => {
        setHide(!hide)
    }

    const clickHeight = () => {
        setIsHeight(!isHeight)
    }

    const onSearch = () => {
        const isSearch = {}
        if (props.filter.nameFlower) {
            isSearch.nameFlower = props.filter.nameFlower
        }
        if (!props.filter.isHiddenLightSensitivity) {
            isSearch.lightSensitivity = props.creatorStrLightSensitivity(props.filter.sunOrShadow, props.filter.isSunAndShadow)
        }
        if (!isHeight) {
            isSearch.height = props.filter.height
            isSearch.heightMin = props.filter.heightMin
        }

        if (Object.keys(isSearch).length > 0) {
            props.searchFlowers(isSearch)
        }
    }


    return <Filter {...props} hide={hide} onHide={onHide} onSearch={onSearch} clickHeight={clickHeight} isHeight={isHeight}/>
}

function mapStateToProps(state) {
    return {
        role: state.user.user.role, filter: state.filter
    }
}


export default compose(connect(mapStateToProps, {
    setNameFlower,
    setHeight,
    setHeightMin,
    setPrice,
    setWholesale,
    setAvailable,
    setDescription,
    setIsSunAndShadow,
    setSunOrShadow,
    setChangeCheckbox,
    searchFlowers
}), withCreatorStrBloomTime, withCreatorStrLightSensitivity)(FilterContainer)