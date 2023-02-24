let initialState = {
    isFetching: false,
}

export let preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleIsFetching":
            return {
                ...state,
                isFetching:  action.isFetching,
            }
    }
    return state
}

export const toggleIsFetching = (isFetching) => ({type: "toggleIsFetching", isFetching: isFetching})