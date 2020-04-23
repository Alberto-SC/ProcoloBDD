import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: this.props.show,
      boleta: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };


  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
            
  handleSubmit(e) {
      console.log("HOLA")
      console.log(this.state)
      e.preventDefault();
      const { boleta, password } = this.state;
      var userPass= `id=${boleta}&pass=${password}`
      fetch('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/login', {
          method: 'POST',
          body:userPass,
          headers: {"Content-Type": 'application/x-www-form-urlencoded'}
      })
      .then(ress => ress.json())
      .then(ress=> {
        this.props.login(ress.data)
        if(ress.data.nombre){
        }else{
          window.alert("Usuario y/o contraseña erróneos.");
        }
      })
      
  }


  render() {
    return (
      <div>
        {this.props.children}
        <div className="modal-body">
          <Form role="form" onSubmit={this.handleSubmit}>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i className="fas fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={this.handleChange}
                  name="boleta"
                  placeholder="Usuario"
                  type="text"
                  // maxLength="10"
                  // minLength="10"
                  title="Número de boleta, número de empleado"
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.passwordFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i className="fas fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  onChange={this.handleChange}
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input defaultChecked type="checkbox" style={{ color: 'black' }} />
                <span className="form-check-sign">
                  Recordarme
                      </span>
              </Label>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="default" type="submit">
                Iniciar sesión
                    </Button>
            </div>
          </Form>
        </div>
        {/*
        <div className="modal-footer">
          <Button color="default" type="button">
            Iniciar sesión
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={() => this.toggleModal("demoModal")}
          >
            Cerrar
          </Button>
        </div>
        */}
      </div>
    );
  }
}

export default ModalLogin;