import React from 'react';
import { Table, Container } from 'react-bootstrap'

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class HistoryBooking extends React.Component {

  getBookingHistory = () => {
    fetch('http://localhost:8000/booktickets/')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data })
      })
      .catch(console.log)
  }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    this.getBookingHistory();
  }

  render() {
    if (this.state.data !== null) {
      const item = this.state.data;
      const tableItem = item.map((e, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{e.idMovie}</td>
            <td>{e.time}</td>
            <td>{e.totalPrice} €</td>
          </tr>
        )
      })

      return (
        <div className="">
          <Header />
          <Container>
            <b>
              <h3 className='history-booking'>History Booking</h3>
            </b>
            <div className="scroll">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Movie name</th>
                    <th>Time booking</th>
                    <th>Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {tableItem}
                </tbody>
              </Table>
            </div>

          </Container>

          <hr className="featurette-divider" />

          <div className='xd-bot'>
            <Footer />
          </div>
        </div >
      );
    }
    return (
      <div>404 page not found</div>
    )
  }
}

export default HistoryBooking;
