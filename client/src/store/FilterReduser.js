export const monthsCheckboxes = () => {
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    for (let i = 0; i < 12; i++) {
        months[i] = {id: i, checked: false, value: months[i]}
    }
    return months
}

const initialState = {
    nameFlower: "",
    bloomTime: monthsCheckboxes(),
    sunOrShadow: true,
    isSunAndShadow: true,
    height: 10,
    heightMin: 0,
    price: 200,
    wholesale: 100,
    available: 0,
    description: "",
    isHiddenLightSensitivity: true
}

export let filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setNameFlower":
            return {
                ...state,
                nameFlower: action.nameFlower
            }
        case "setHeight":
            return {
                ...state,
                height: action.height
            }
        case "setHeightMin":
            return {
                ...state,
                heightMin: action.heightMin
            }
        case "setPrice":
            return {
                ...state,
                price: action.price
            }
        case "setWholesale":
            return {
                ...state,
                wholesale: action.wholesale
            }
        case "setAvailable":
            return {
                ...state,
                available: action.available
            }
        case "setDescription":
            return {
                ...state,
                description: action.description
            }
        case "setSunOrShadow":
            return {
                ...state,
                sunOrShadow: !state.sunOrShadow
            }
        case "setIsSunAndShadow":
            return {
                ...state,
                isSunAndShadow: !state.isSunAndShadow
            }
        case "clearState":
            return {
                ...state = initialState
            }
        case "setChangeCheckbox":
            return {
                ...state,
                bloomTime: [
                    ...state.bloomTime,
                    state.bloomTime[action.id].checked = !state.bloomTime[action.id].checked
                ]
            }
        case "toggleHideLightSensitivity":
            return {
                ...state,
                isHiddenLightSensitivity: !state.isHiddenLightSensitivity
            }
    }
    return state
}

export const setNameFlower = (nameFlower) => ({type: "setNameFlower", nameFlower})
export const setHeight = (height) => ({type: "setHeight", height})
export const setHeightMin = (heightMin) => ({type: "setHeightMin", heightMin})
export const setPrice = (price) => ({type: "setPrice", price})
export const setWholesale = (wholesale) => ({type: "setWholesale", wholesale})
export const setAvailable = (available) => ({type: "setAvailable", available})

export const setDescription = (description) => ({type: "setDescription", description})
export const setSunOrShadow = () => ({type: "setSunOrShadow"})
export const setIsSunAndShadow = () => ({type: "setIsSunAndShadow"})
export const setChangeCheckbox = (id) => ({type: "setChangeCheckbox", id})
export const clearState = () => ({type: "clearState"})
export const toggleHideLightSensitivity = () => ({type: "toggleHideLightSensitivity"})