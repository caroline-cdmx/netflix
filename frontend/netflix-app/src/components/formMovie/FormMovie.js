import React, { Component } from 'react';
import './style.css';
import FileUploader from 'react-firebase-file-uploader';
import AllGenres from '../../services/allGenres';
import allRatings from '../../services/allRatings';
import Firebase from '../../Firebase';
import addMovie from '../../services/addMovie';

class FormMovie extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      plot:'',
      genre:'',
      director:'',
      year:'',
      image_urm:'',
      rating:'',
      allGenres:'',
      allRatings:''
    }
  }
  componentDidMount (){
    allGenres().then((resp)=> {
      this.setState({allGenres:resp.data.data.allGenres})
    });
    allRatings().then((resp)=> {
      this.setState({allRatings: resp.data.data.allRatings})
    })
  }
  createSelecter = (data,name) => {
    let options = data.map((option)=> {
      return (
        <option value={option._id}>{option.name}</option>
      )
    })
    return(
      <select name={name} id={name} value={this.state[name]}
      onChange={this.onChangeInput} className='form-control'
      >
        <option value='' selected>--------</option>

      </select>
    )
  }
  onChangeInput (e) {
    let name = e.target.name 
    let value = e.target.value 

    this.setState (
      {[name]: value}
    )
  }
  handleUploadSuccess = (filename) => {
    Firebase.storage().ref('images').child(filename)
    .getDownloadURL().then(url => this.setState({image_url:url}))
  }
  handleSubmit = (e) => {
    e.preventDefault();
    addMovie(this.state).then((resp)=> {
      console.log(resp.data)
      if(resp.data.data.addMovie._id) {
        this.props.history.push('/movies');
      }
    })
    console.log(this.state)
  }
  chargeGenres = () => {
    if(this.state.allGenres !== ''){
      return this.createSelector(this.state.allGenres,"genre") 
    }else {
      return <div></div>
    }
  }
  chargeRatings = () => {
    if(this.state.allRatings !== ''){
      return this.createSelector(this.state.allRatings,"rating") 
    }else {
      return <div></div>
    }
  }
  chargeForm = () => {
    if(this.state.allGenres !=='' && this.state.allRatings)
  }

    render() {
      return (
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor=''>Nombre de la pelicula</label>
                <input type='text' value= {this.state.name} onChange={this.onChangeInput} className='form-control'/>
                <textarea name='plot' id='plot' cols='30' rows='10'></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor=''>Genero</label>
                {/* {this.createSelector(this.allGenres,'genres')} */}
                {this.chargeGenres}
              </div>
              <div className='form-group'>
                <label htmlFor=''>Director</label>
                <input type='text' name='director' value={this.state.director} 
                onChange={this.onChangeInput} className='form-control'
                />
              </div>
              <div className='form-group'>
              <label htmlFor=''>Año</label>
              <input type='text' name='year' value={this.state.year} 
              onChange={this.onChangeInput} className='form-control'
              />
              </div>
              <div className='form-group'>
              <label clzddName='btn btn-danger' htmlFor=''>
                <FileUploader
                  hidden
                  accept='image/*'
                  randomizeFilename
                  storageRef={Firebase.storage().ref('images')}
                  onUploadError={error => console.log(error)}
                  onUploadSuccess={this.handleUploadSuccess}

                />
              </label>
              </div>
              <div className='form-group'>
                <label htmlFor=''>Clasifación</label>
                  {/* {this.createSelecter(this.state.allRatings,'rating')} */}
                  {this.chargeRatings}
              </div>
              <button type='submit'></button>

              
              <div className='form-group'></div>
            </form> 
          
          </div>
        
        </div>
      )
    }
}

export default FormMovie;