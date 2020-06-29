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
} from "reactstrap";

class ModalRegis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regisModal: this.props.show,
      alumnos: [],
      alumnosc: 0,
      nombreTT:'',
      keywords:'',
      path:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  addAlumn = _ => {
    var rows = this.state.alumnos
    if (rows.length < 3) {
      rows.push('Número de boleta ' + (this.state.alumnosc + 1))
      this.setState({ alumnos: rows })
      this.setState({ alumnosc: this.state.alumnosc + 1 })
    }
    // if(this.state.alumnos>3)this.setState({alumnos:3})
    console.log(this.state);
  }
  renderaddAlumno = (id) =>
    <tr>
      <labl>Alumno {id}</labl><input name={"boleta" + id} required />
    </tr>

  addrenders = _ => {
    for (let i = 0; i < this.state.alumnos; i++)this.renderaddAlumno(i + 1);
  }

  handleChange(e) {
    const { name, value } = e.target;
    // console.log(name,value)
    this.setState({ [name]: value });
  }
  handleSubmit(event){ 
    event.preventDefault();
    console.log(this.state)
    let boletas = []
    let keys = this.state.keywords.replace(/ /g, '_');
    console.log(keys);
    let params="nombreTT="+this.state.nombreTT+"&keywords="+keys+"&path="+this.state.path;
    for(let i = 0;i<this.state.alumnosc;i++){
      let name = "boleta"+(i+1);
      boletas.push(this.state[name]);
      params+="&boleta"+(i+1)+"="+this.state[name];
    }
    console.log('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/addProtocolo?'+params)
    fetch('http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/addProtocolo?'+params)
    .then(ress => ress.json())
    .then(ress => {
      console.log(ress.data)
      alert(ress.data)
    })
}
  render() {
    return (
      <div>
        {this.props.children}
        <div className="modal-body">
          <Form role="form" onSubmit={this.handleSubmit} >
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-tag"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Nombre de protocolo"
                  type="nomProtocolo"
                  title="Nombre del protocolo"
                  name="nombreTT"
                  onChange={this.handleChange} required
                />
              </InputGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ color: 'black' }}>
                    <i class="fas fa-key"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Palabras claves"
                  type="text"
                  name="keywords"
                  title="Keyword1_Keyword2_Keyword3"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>
            <div>
              <input 
              type="file" 
              name="path" 
              id="" 
              onChange={this.handleChange}
              accept=".pdf"

              />
            </div>
            <div className="protcontainer" style={{ textAlign: 'center', color: 'black' }}>
              <table>
                <tr style={{ width: '100%', color: 'black' }}>
                  <td style={{ width: '800px' }}>
                    <br />
                    <label for="uname" onClick={this.addAlumn} title="Máximo 4 integrantes" style={{ cursor: 'pointer' }}>
                      Añadir alumno
                      <i className="fas fa-user-plus" style={{ paddingLeft: '0px', marginLeft: '10px' }}></i>
                    </label>

                  </td>
                </tr>
                {this.state.alumnos.map((r) => (
                  <FormGroup style={{ width: '90%' }}>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ color: 'black' }}>
                          <i class="far fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="numAlumno"
                        placeholder={r}
                        type="text"
                        name={'boleta'+r.split(" ")[3]}
                        title="Número de boleta"
                        onChange={this.handleChange} required
                      />
                      <span style={{ marginLeft: '5px' }}></span>
                      <i class="fas fa-minus-circle" style={{ color: 'red', marginTop: '10px' }}></i>
                    </InputGroup>
                  </FormGroup>
                ))}
              </table>
            </div>
            <div className="text-center">
              <Button className="my-4" color="default" type="submit" >
                Registrar 
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ModalRegis;