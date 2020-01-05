import React from 'react';
import { Form, Card, Container, Image, Row, Col, Tabs, Tab, Button, Badge } from 'react-bootstrap'
import {
  useHistory,
} from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Place extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      f1: 0,
      f2: 0,
      f3: 0,
      total: 0,
    }
  }

  calculate = () => {
    let total = this.state.f1 * 15.2 + this.state.f2 * 12 + this.state.f3 * 10
    this.setState({
      total: total
    })
  }

  onChange = (e) => {
    this.setState({ f1: e.currentTarget.value }, () => {
      this.calculate();
    })
  }

  onChange2 = (e) => {
    this.setState({ f2: e.currentTarget.value }, () => {
      this.calculate();
    })
  }

  onChange3 = (e) => {
    this.setState({ f3: e.currentTarget.value }, () => {
      this.calculate();
    })
  }

  onContinue = () => {

    const payload = {
      "idCustomer": "123",
      "idMovie": this.props.placeReducer.data.name,
      "time": Date(),
      "totalPrice": this.state.total
    }


    fetch('http://localhost:8000/booktickets/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })


    window.location.href = '/history';
  }

  render() {
    const { placeReducer } = this.props;

    const data = placeReducer.data;
    console.log(data)
    if (data !== undefined) {
      return (
        <div className="">
          <Header />
          <div className="container marketing">

            <Row>
              <Col md="3">
                <Image height="220px" width="180px" src={data.img} rounded />
              </Col>
              <Col md="9">
                <h4><p><b>Information of the film</b></p></h4>
                <p><b>{data.name}</b></p>
                <p>{data.duration} min   -   {data.types}</p>
                <p><b>Director</b>: {data.director}</p>
                <p><b>Stars</b>: {data.stars}</p>
                <p><Button variant="warning">{data.date}</Button> - <Button variant="warning">{data.time}</Button></p>
              </Col>
            </Row>
            <hr className="featurette-divider" />
            <Form>
              <Form.Group controlId="form1">
                <Form.Label>Full price - 15.20 €</Form.Label>
                <Form.Control as="select"
                  value={this.state.f1}
                  onChange={(e) => this.onChange(e)}>

                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="form2">
                <Form.Label>Senior - 12.00 €</Form.Label>
                <Form.Control as="select"
                  value={this.state.f2}
                  onChange={(e) => this.onChange2(e)}>

                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="form3">
                <Form.Label>School Student - 10.00 €</Form.Label>
                <Form.Control as="select"
                  value={this.state.f3}
                  onChange={(e) => this.onChange3(e)}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Row>
              <Col>Total: {this.state.total} €
          </Col>
              <Col>
                <Button onClick={() => this.onContinue()}>Booking</Button>
              </Col>
            </Row>
          </div>

          <hr className="featurette-divider" />
          <Footer />
        </div>
      )
    }
    return (
      <div>404 page not found</div>
    )
  }
}

export default Place;