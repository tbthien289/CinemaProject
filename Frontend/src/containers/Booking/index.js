import { connect } from 'react-redux';

import { simpleAction, delSimpleAction } from './action'
import { setidMovieAction } from '../Booking/action'
import { passData } from '../Place/action'
import Booking from "./Booking";

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    simpleAction: () => dispatch(simpleAction()),
    delSimpleAction: () => dispatch(delSimpleAction()),
    setidMovieAction: (id) => dispatch(setidMovieAction(id)),

    passData: (data) => dispatch(passData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking);