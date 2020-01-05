import React from 'react';
import { Container, Image, Row, Col, Tabs, Tab, Button, Badge } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer'


const TabList = (props) => {
  const data = props.data;
  const movieInfo = props.movieInfo;
  let h = useHistory();

  const dispatch = props.dispatch;

  const listItems = data.map((item, index) => {

    const listTimeOptions = item.array.map((e, index) => {

      // Function to send data to Place component
      const clickFunction = () => {
        movieInfo.date = item.eventKey;
        movieInfo.time = e;

        dispatch.passData(movieInfo);

        // Redirect
        h.push("/place");
      }

      return (
        <Button key={index} variant="warning" onClick={() => clickFunction()}>{e}</Button>
      )
    });

    return (
      <Tab key={index} eventKey={item.eventKey} title={item.eventKey}>
        {listTimeOptions}
      </Tab>
    )
  });
  return (
    <Tabs>{listItems}</Tabs>
  );
};


class Booking extends React.Component {

  getFilmInfo = (props) => {
    const { bookingReducer } = props;
    let id = bookingReducer.idMovie;
    fetch('http://localhost:8000/movies')
      .then(res => res.json())
      .then((data) => {
        if (id !== undefined) {
          // Mapping movie id 
          data.forEach((e) => {
            if (e.id === id) {
              this.setState({ movieInfo: e })
            }
          });
        }
      })
      .catch(console.log)

  }

  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null,
    }
  }

  componentDidMount() {
    this.getFilmInfo(this.props);
  }

  render() {
    const { bookingReducer } = this.props;

    const { movieInfo } = this.state;

    const listTime = [
      { eventKey: "Lundi 6", array: ["14:00", "15:00", "16:00"] },
      { eventKey: "Mardi 7", array: ["17:00", "18:00", "19:00"] },
      { eventKey: "Mecredi 8", array: ["15:00", "15:30", "16:00"] },
    ]
    if (movieInfo !== null) {
      return (
        <div className="">
          <Header />
          <div className="container marketing">
            <Row>
              <Col md="3">
                <Image height="220px" width="180px" src={movieInfo.img} rounded />
              </Col>
              <Col md="9">
                <h4><p><b>Information of the film</b></p></h4>
                <p><b>{movieInfo.name}</b></p>
                <p>{movieInfo.duration} min   -   {movieInfo.types}</p>
                <p><b>Director</b>: {movieInfo.director}</p>
                <p><b>Stars</b>: {movieInfo.stars}</p>
              </Col>
            </Row>
            <hr className="featurette-divider" />
            <Row>
              <h3><b>Synopsis</b></h3>
              <p>{movieInfo.description}</p>
            </Row>

            <div className="md-bot">
              <TabList data={listTime} movieInfo={movieInfo} dispatch={this.props} />
            </div>

          </div>

          <hr className="featurette-divider" />
          <Footer />
        </div>
      )
    }
    return (<div>404 page not found</div>)
  }
}

export default Booking;