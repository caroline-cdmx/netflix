import React, { Component } from 'react';
import Rate from 'rc-rate';


class CardMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie:{},
      rate: this.calculateRate(props.movie.rate)
    }
  }
  calculateRate = (rate) => {
    //rate es un array
    let suma = rate.reduce((a,b)=>a+b)
    let average = suma/rate.length
    return (Math.round(average * 2) / 2).toFixed(1)
  }

  // componentDidUpdate(prevProps,prevState) {
  //   if(this.props.movie !== prevProps.movie) {
  //     this.setState(
  //       { movie: this.props.movie,
  //         rate: this.calculateRate(this.props.movie.rate) }
  //     )

  //   }
  // }
  render() {
    return (
      <div className="card" style={{ width: "14rem;" }}>
        <h5 className="card-title"
          onClick={() => this.props.redirect(this.state.movie._id)}>{this.state.movie.name}</h5>
        <div className="card-body">
          <p className="card-text">{this.state.movie.plot}</p>
          <Rate defaultValue={this.state.value} allowHalf onChange={(rate) => this.props.getRate(this.state.movie._id,rate)} />
        </div>
      </div>
    )
  }

}

export default CardMovie;

