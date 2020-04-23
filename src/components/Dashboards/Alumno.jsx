/* !Copyright 2019 Creative Tim (https://www.creative-tim.com)*/


import React from "react";
//import '../style/main.css'
//import '../style/alumno.css';
// import '../style/fontawesome-free/css/all.min.css';
import {
Container,
Row,
Modal,
} from "reactstrap";

// core components
import IndexNavbar0 from "../Navbars/IndexNavbar0.jsx";
import PageHeader from "../PageHeader/PageHeader.jsx";
import Footer from "../Footer/Footer.jsx";

class Alumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    document.body.classList.toggle("index-page");
    this.getData()
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
   renderBase =({numTT,nombre,ruta_pdf_eval,estatus})=>
    <tr>
      <td>{nombre}</td>
      <td><i className="fas fa-file-pdf fa-3x"></i></td>
      <td><span className="badge badge-success">{estatus}</span></td>
      {estatus==="Rechazado"?
      <td className ="FILE"><input type="file" accept=".pdf" name="" id="" ></input></td>
      :
      ''  
      }
      {estatus==="Rechazado"?
      <td>
        <button onClick={this.sendEvaluacion.bind(this)}>Enviar</button>
      </td>
      :
      ''
      }

      <td>2020/05</td>
      <td><i className="fas fa-file-pdf fa-3x"></i></td>
      {estatus==="Rechazado"?
      <td className ="FILE"><input type="file" accept=".pdf" name="" id="" ></input></td>
      :
      ''  
      }
    </tr>
  getData = _=>{
    fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getprotocolo?boleta=${this.props.location.state.usuario.boleta}`)
    .then(ress => ress.json())
    .then(ress => this.setState({items: ress.data}))
    .then(ress => console.log(this.state))
  }
  render() {
    const {items} = this.state;
    console.log(items)
    // const {items} = this.state;
    return (
      <>
        <IndexNavbar0/>
        <div>
      <div className="page-header" style={{color:'white'}}>
        <Container>
          <div className="content-center">
          <div>
             <div>
            {/* <!-- Main Sidebar Container --> */}
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div>
              {/* <!-- Content Header (Page header) --> */}
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-12" style={{color:'white'}}>
                       <h1 style={{color:'white'}}>Bienvenido {this.props.location.state.usuario.nombre} </h1>
                       <br/>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- /.content-header --> */}

              {/* <!-- Main content --> */}
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header border-transparent">
                          <h3 className="card-title">Evaluaciones</h3>

                        </div>
                        {/* <!-- /.card-header --> */}
                        <div className="card-body p-0">
                          <div className="tableAlumnos">
                            <table className="table m-0">
                              <thead>
                              <tr>
                                <th>Profesor</th>
                                <th>Evaluacion</th>
                                <th>Estatus</th>
                                <th>Fecha</th>
                                <th>Correciones</th>
                              </tr>
                              </thead>
                              <tbody>
                                {items.map(this.renderBase)}
                              </tbody>
                            </table>
                          </div>
                          {/* <!-- /.table-responsive --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.col-md-6 --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.content-wrapper --> */}
          
            <div>
            </div>
              <script src="../js/jquery.min.js"></script>
              {/* <!-- Bootstrap 4 --> */}
              <script src="../js/bootstrap.bundle.min.js"></script>
              {/* <!-- AdminLTE App --> */}
              <script src="../js/adminlte.min.js"></script>
          </div>
          </div>
          </div>
        </Container>    
      </div>  
      </div>
        <Footer/>
      </>
      );
  }
}
export default Alumno;
