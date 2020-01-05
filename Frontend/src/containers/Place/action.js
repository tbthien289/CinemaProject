

export const passData = (data) => dispatch => {
    dispatch({
        type: 'PASS_DATA',
        payload: data
    })
}
