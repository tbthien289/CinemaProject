import React from 'react';

class Movie extends React.Component {

  simpleAction = (e) => {
    const { movieReducer } = this.props;

    if (movieReducer.result === "" || movieReducer.result === undefined) {
      this.props.simpleAction();
    } else {
      this.props.delSimpleAction();
    }
  }

  render() {
    const { movieReducer } = this.props;
    console.log(movieReducer);
    return (
      <div>
        This is movie component
        <button onClick={(e) => this.simpleAction(e)}>Test redux action</button>

        <h1>{movieReducer.result}</h1>
      </div>
    )
  }
}

export default Movie;
