import Place from "./Place"

import { connect } from 'react-redux';

import { setidMovieAction } from '../Booking/action'

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    setidMovieAction: (id) => dispatch(setidMovieAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Place);