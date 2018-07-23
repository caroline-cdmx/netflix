import React, {Component} from 'react';
import './style.css';
import Youtube from 'react-youtube';
import singleMovie from '../../services/singleMovie';
``
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.match.params.id,
      movie:''
    }
  }
  componentDidMount() {  //método de ciclo de vida de React
    singleMovie(this.state.id).then((movie)=> {
      this.setState({movie:movie.data.data.singleMovie})
    })
  }
  getVideoId = () => {
    let id = this.state.movie.url.split('=')[1]
    return id
  }

  chargeMovie = () => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    }
    if(this.state.movie !== '') {
      return (
        <div className='col-md-10'>
          <h3 className='md-4'>{this.state.movie.name}</h3>
          {/* <Youtube videoId={()=> this.state.url.split('=')[1]} opts={opts}/> */}
          <Youtube videoId={this.getVideoId()}/>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='row justify-content-center'>
        {this.chargeMovie()}
      </div>
    )
  }
}

export default Movie;