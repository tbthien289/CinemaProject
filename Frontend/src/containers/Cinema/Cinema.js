import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
import Footer from '../Footer/Footer';

// Movie item component who call API /movies
const MovieItem = (props) => {
  let history = useHistory();
  const data = props.data;


  const clickFunction = (id) => {
    // Call dispatch to actionBooking
    props.movieProps.setidMovieAction(id);

    // Redirect
    history.push("/booking");
  }

  if (data !== null) {
    const listItems = data.map((e, index) => {
      return (
        <div className="col-lg-4" key={index}>
          <img className="rounded" src={e.img} alt="Generic placeholder image" width="140" height="180" />
          <h4>{e.name}</h4>
          <p>{e.duration} min   -   {e.types}</p>
          <p><b>Director</b>: {e.director}</p>
          <p><b>Stars</b>: {e.stars}</p>
          <p><a className="btn btn-secondary" href="#" role="button" onClick={() => clickFunction(e.id)}>View details »</a></p>
        </div>
      )
    });
    return (
      <div className="row">
        {listItems}
      </div>
    );
  }
  return (
    <div></div>
  )
};

class Cinema extends React.Component {

  getFilmInfo = () => {
    fetch('http://localhost:8000/movies')
      .then(res => res.json())
      .then((data) => {
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
    this.getFilmInfo();
  }

  render() {
    const movieProps = this.props;
    return (
      <div className="">
        <Header />

        <div className="">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.q-tickets.com/movie_images/JUMANJI_THE_NEXT_LEVEL_(ENGLISH)_banner.jpg"
                alt="First slide"
                height="400px"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ccnewspaper.com/wp-content/uploads/2017/12/LBB-Ad_Banner-Nutcracker2017-800x300.jpg"
                alt="Second slide"
                height="400px"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.kingstonpride.ca/wp-content/uploads/2019/04/LoveSimon-1-800x300.jpg"
                alt="Third slide"
                height="400px"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="container marketing">
            <MovieItem data={this.state.data} movieProps={movieProps} />

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Canceled: "Sweetbitter" <span className="text-muted">Announced: Dec. 20, 2019.</span></h2>
                <p className="lead">After 2 seasons the STARZ restaurant drama is coming to a close. A young woman learns how crazy it is to work in a restaurant.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: "600px", height: "500px" }} src="https://m.media-amazon.com/images/M/MV5BMjAxNjk4MjY1OV5BMl5BanBnXkFtZTgwNjc3MTczNTM@._V1_UY666_CR166,0,666,666_AL_.jpg" data-holder-rendered="true" />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Renewed: "The Witcher" <span className="text-muted">Announced: Nov. 13, 2019.</span></h2>
                <p className="lead">Ahead of the series premiere, Netflix announced it will be summoning "The Witcher" for a second season. Henry Cavill, perhaps best known for playing Clark Kent/Superman in the DC Extended Universe, stars as Geralt of Rivia in "The Witcher." What other roles has he played?</p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://m.media-amazon.com/images/M/MV5BNDg0NWY2MDItYTZmNS00NTZhLWEyMDctYWU3OTE5NWQ4ZDk2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY666_CR166,0,666,666_AL_.jpg" data-holder-rendered="true" style={{ width: "600px", height: "500px" }} />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Renewed: "Goliath". <span className="text-muted">Announced: Nov. 14, 2019.</span></h2>
                <p className="lead">Amazon is bringing "Goliath" back for a fourth and final season. A disgraced lawyer, now an ambulance chaser, gets a case that could bring him redemption or at least revenge on the firm which expelled him.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://m.media-amazon.com/images/M/MV5BOTU0MzE2MjQyOF5BMl5BanBnXkFtZTgwMTcyMDY2OTE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg" data-holder-rendered="true" style={{ width: "600px", height: "500px" }} />
              </div>
            </div>

            <hr className="featurette-divider" />

          </div>

          <Footer />
        </div>
      </div>
    )
  }
}

export default Cinema;
