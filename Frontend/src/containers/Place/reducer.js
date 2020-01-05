

function placeReducer(state = {}, action) {
    switch (action.type) {
        case 'PASS_DATA':
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

export default placeReducer;