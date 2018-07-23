import React, { Component } from 'react';
import './style.css';
import signup from '../../services/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      check_password: ''
    }
  }
  onInputCheck = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  validatePasswords(password, verify_password) {
    if (password === verify_password) {
      return true
    } else {
      this.props.history.push('/login')
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.validatePasswords(this.state.password, this.state.check_password)) {
      //Hacer Peticion post al backend 
      signup(this.state).then((response) => {
        console.log(response.data)
        alert('Felicidades Nuevo usuario registrado')
      }).catch((err) => {
        console.log(err);
        alert('Hubo un problema')
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center centered-form ">
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2">
            <div className="panel panel-default container">
              <div className="panel-heading">
                <h3 className="panel-title">Regístrate</h3>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={this.onFormSubmit}>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control input-sm" placeholder="Apellido" value={this.state.name}
                          onChange={this.onInputCheck} />
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="text" name="lastname" id="name" className="form-control input-sm" placeholder="Nombres" value={this.state.lastname} onChange={this.onInputCheck} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Correio" value={this.state.email} onChange={this.onInputCheck} />
                  </div>

                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Contraseña" value={this.state.password} onChange={this.onInputCheck} />
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input type="password" name="check_password" id="check_password" className="form-control input-sm" placeholder="Confirmar Contraseña" value={this.state.check_password} onChange={this.onInputCheck} />
                      </div>
                    </div>
                  </div>

                  <input type="submit" value="Regístrate" className="btn btn-info btn-block" />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className='new-account'>
      //   <div className='new-account-name'>
      //     <h3>Signup</h3>
      //     <form onSubmit={this.onFormSubmit}>
      //       <input type='text' name='first_name' placeholder='Nombres' value={this.state.first_name} onChange={this.onInputCheck} />
      //       <input type='text' name='last_name' placeholder='Apellidos' value={this.state.last_name} onChange={this.onInputCheck} />
      //       <input type='email' name='email' placeholder='email' value={this.state.email} onChange={this.onInputCheck} />
      //       <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.onInputCheck} />
      //       <input type='password' name='check_password' placeholder='password' value={this.state.check_password} onChange={this.onInputCheck} />
      //       <button type='submit'>Enviar</button>
      //     </form>
      //   </div>
      // </div>
    )
  }
}

export default Signup;