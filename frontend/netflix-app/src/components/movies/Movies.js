import React, {Component} from 'react';
import './style.css';
import allMovies from '../../services/allMovies';


class Movies extends Component {
  constructor(){
    super();
    this.state = {movies:''}
  }

  componentWillMount(){
    allMovies().then((resp)=>{
      console.log(resp.data)
      this.setState(
        {movies:resp.data.data.allMovies}
      )
    }).catch((err)=>{
      console.log(err)
    })
  }

  renderMovies = () => {
    if(this.state.movies !== ''){
      let movies = this.state.movies.map((movies,index)=> {
        return (
          <div className='card' style={{width: '18rem;'}} key={index}>
            <h5 className='card-title'>{movie.name}</h5>
            <div className='card-body'> 
              <p className='card-text'>{movie.plot}</p>
            </div>
          </div>
        )
      })
      return movies 
      
    }else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-10 col-lg-8'>
          <h3 className='movies-title'>Todas las Peliculas</h3>
          {this.renderMovies()}

        </div>
      
      </div>

    )
  }
}

export default Movies;