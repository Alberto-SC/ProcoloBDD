import React from "react";
import Select from 'react-select';
// javascript plugin used to create scrollbars on windows
// reactstrap components
import {
Container,

} from "reactstrap";

import IndexNavbar0 from "../Navbars/IndexNavbar0.jsx";
import Footer from "../Footer/Footer.jsx";
import { Route } from "react-router-dom";

class Profesor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        show:false,
        evaluaciones:[],
        sinodales:[],
        presidente:false,
        allprotocolo:[],
        profesores: [],
        value:[]
      };
    }
    componentDidMount(){
      this.getData()
    }
    sendEvaluacion = (e)=>{
      let pathpdf;
      let estatus;
      let newDate = new Date()
      let year = newDate.getFullYear();
      let numTT;
      let parent = e.target.parentNode.parentNode.childNodes;
      for(let i = 0;i<parent.length;i++){
        if(parent[i].className==="FILE"){
          pathpdf = parent[i].childNodes[0].files[0].name.replace(/ /g, "");
        }
        if(parent[i].className==="ESTATUS"){
          estatus= parent[i].childNodes[0].value;
        }
        if(parent[i].className === "NUMTT"){
          numTT = parent[i].childNodes[0].textContent;
        }
      }
      fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getlastId`)
      .then(ress => ress.json())
      .then(ress => {
        console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addEvaluacion?id=${ress.data.id_evaluacion+1}&ruta=${pathpdf}&estatus=${estatus}&numTT=${numTT}&sinodal=${this.props.location.state.usuario.numEmp}&year=${year}`)
        fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addEvaluacion?id=${ress.data.id_evaluacion+1}&ruta=${pathpdf}&estatus=${estatus}&numTT=${numTT}&sinodal=${this.props.location.state.usuario.numEmp}&year=${year}`)
        .then(ress => ress.json())
        .then(ress => console.log(ress));
      })
    }


    addSinodal = (e)=>{
      let numTT;
      let sin1;
      let sin2;
      let sin3;
      // console.log(e.target);
      let parent = e.target.parentNode.parentNode.childNodes;
      for(let i = 0;i<parent.length;i++){
        if(parent[i].className === "sinodal1"){
          sin1 = parent[i].childNodes[1].value
          // sin1= parent[i].childNodes[0].value;
        }
        if(parent[i].className === "sinodal2"){
          sin2 = parent[i].childNodes[1].value
          // sin2= parent[i].childNodes[0].value;
        }
        if(parent[i].className === "sinodal3"){
          sin3 = parent[i].childNodes[1].value
          // sin3= parent[i].childNodes[0].value;
        }
        if(parent[i].className ==="NUMTT"){
          numTT = parent[i].childNodes[0].textContent;
        }
      }
      // console.log(numTT);
      // console.log(sin1,sin2,sin3)
      // if(sin1 === sin2||sin1 === sin3||sin2 === sin3)return(alert("No puede asignar a un sinodal 2 veces en el mismo TT"))
      if(sin1!= -1 && sin1  != undefined){
        console.log("insertar sinodal")      
         fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getlastId`)
        .then(ress => ress.json())
        .then(ress => {
          console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin1}`)
          fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin1}`)
          .then(ress => ress.json())
          .then(ress => console.log(ress));
        })
      }  
      if(sin2!= -1 && sin2  != undefined){
        console.log("insertar sinodal")      
         fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getlastId`)
        .then(ress => ress.json())
        .then(ress => {
          console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin2}`)
          fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin2}`)
          .then(ress => ress.json())
          .then(ress => console.log(ress));
        })
      }
      if(sin3!= -1 && sin3  != undefined){
        console.log("insertar sinodal")      
         fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getlastId`)
        .then(ress => ress.json())
        .then(ress => {
          console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin3}`)
          fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/addSinodal?id=${ress.data.id_evaluacion+1}&numTT=${numTT}&sinodal=${sin3}`)
          .then(ress => ress.json())
          .then(ress => console.log(ress));
        })
      }
    }


    getData = _=>{
      fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getprotocoloToMaster?boleta=${this.props.location.state.usuario.numEmp}`)
      .then(ress => ress.json())
      .then(ress => {
        this.setState({items: ress.data})
        for(let i = 0;i<this.state.items.length;i++){
          fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getEvaluacion?numEmp=${this.props.location.state.usuario.numEmp}&numTT=${this.state.items[i].numTT}`)
          .then(res => res.json())
          .then(res =>  this.setState(state => {
            const evaluaciones = [...state.evaluaciones, res.data];
            return {
              evaluaciones
            };
          }))
        }
       })
      
       //  GET ALL PROTOCOLOS
      fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/isPresidente?numEmp=${this.props.location.state.usuario.numEmp}`)
      .then(ress => ress.json())
      .then(ress => {
        if(ress.data==true){
          this.setState({presidente:true})
          fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getprotocolos`)
          .then(datos => datos.json())
          .then(datos => {
            this.setState({allprotocolo: datos.data})
            let sinodales = []
            for(let i = 1;i<datos.data.length;i++){
              console.log(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getSinodales?numTT=${datos.data[i].numTT}`)
              fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getSinodales?numTT=${datos.data[i].numTT}`)
              .then(res => res.json())
              .then(res => {
                this.setState({value:res.data})
                this.setState(state => {
                const sinodales = [...state.sinodales, state.value];
                return {
                  sinodales,
                  value:[]
                };
                })
              })
            }
            // console.log(sinodales);
          })
        }
      })
     
      fetch(`http://protocolo-env.eba-9bvnhbdx.us-east-1.elasticbeanstalk.com/database/getProfesores`)
      .then(ress => ress.json())
      .then(ress => {
        this.setState({profesores:ress.id})
      })
       console.log(this.state)
    }  



    renderSpan = (estatus)=>{
      // console.log(estatus);
      return (
        <span className="badge badge-success">{estatus.estatus}</span>
      )
    }


    renderBase =(evaluacion)=>{
        let evaluaciones =  null; 
        for(let i = 0;i<this.state.evaluaciones.length;i++){
          if(this.state.evaluaciones[i][0].numTT== evaluacion.numTT){
            // console.log(this.state.evaluaciones[i]);
            evaluaciones = this.state.evaluaciones[i];
          }
        }
        let numEval;
        if(evaluaciones){
          numEval = evaluaciones.length;
        }
        // if(evaluaciones){
        //   console.log(evaluaciones[0]);
        // }
        console.log(numEval);
        return(
            <tr>
              <td>{evaluacion.numTT}</td>
              <td className ="NUMTT">{evaluacion.nombreTT}</td>
              {evaluacion.estatus ==="Pendiente"?
                <td className ="FILE"><input type="file" accept=".pdf" name="" id="" ></input></td>
                :
                <td><i className="fas fa-file-pdf fa-3x"></i></td>
              }
              {evaluacion.estatus ==="Aceptado"? 
              <td><span className="badge badge-success">Aceptado</span></td>
              :
              <td className ="ESTATUS">
                <span className="badge badge-warning">{evaluacion.estatus}</span>
                <select name="" id="" style={{borderRadius:'5px', marginLeft:'5px'}}>
                  <option value="Aceptado" >Aceptado</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
              </td>
              }
              <td></td>
              {evaluacion.estatus !=="Aceptado"?
              numEval>3?
              <td>Numero de evaluaciones maximas alcanzado</td>
              :
              <td>
                <button onClick={this.sendEvaluacion.bind(this)} className="btn btn-default btn-sm">Enviar</button>
              </td>
              :''
            }
            </tr>
          ) 
  } 
    renderSpanSinodal = (sinodal)=>{
      // console.log(sinodal);
      return (
        <td><span className="badge badge-success">{sinodal.nombre}</span></td>
      )
    }
    renderBaseAsignar =(TT)=>{
      let sinodales = null;
      // console.log("RENDER TT "+TT.numTT)
      console.log(this.state.sinodales)
      for(let i = 0;i<this.state.sinodales.length;i++){
        if(this.state.sinodales[i][0]){
          if(this.state.sinodales[i][0].numTT == TT.numTT){
            sinodales=this.state.sinodales[i];
            break;
          }
        }
      }
      if(sinodales)
        sinodales = sinodales.map(this.renderSpanSinodal);
      let numSin
      if(sinodales){
        numSin= sinodales.length;
        // console.log(sinodales)
      }
      let select =  <select  style={{borderRadius:'5px'}}>
                      <option value = "-1">Sin seleccionar</option>
                      {
                      this.state.profesores.map(function(item){
                      return(
                        <option value={item.value}>{item.label}</option>
                        )
                      })
                    }
                     </select>
      // console.log(select);
      if(this.state.presidente== false)return ('');
      return(
            <tr style = {{color:'black'}}>
                  <td className = "NUMTT">{TT.numTT}</td>
                  <td >{TT.nombreTT}</td>
                  <td>Keywords</td>
                  {sinodales?
                  sinodales[0]?
                  sinodales[0]
                  :
                  <td className="sinodal1">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                  :
                  <td className="sinodal1">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                 }
                 {sinodales?
                  sinodales[1]?
                  sinodales[1]
                  :
                  <td className = "sinodal2">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                  :
                  <td className ="sinodal2">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                 }
                 {sinodales?
                  sinodales[2]?
                  sinodales[2]
                  :
                  <td className="sinodal3">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                  :
                  <td className ="sinodal3">
                  <span className="badge badge-warning">Sin Asignar</span>
                  {select}
                  </td>
                 }
                 {numSin==3?
                    ''
                    :
                   <td>
                    <button class="btn btn-default btn-sm"name = {numSin}  onClick={this.addSinodal.bind(this)}>Asignar Sinodal</button>
                   </td>
                 }
            </tr>
    )
    }
  render() {
    const {items,allprotocolo} = this.state;
    console.log(this.state)
    return (
      <>
        <IndexNavbar0/>
        <div>
      <div className="page-header header-filter">
                      <Container>
                        <div className="content-center">
                        <div>
              <div>
                <div className="page-header">
                  <div className="container-fluid">
                    <div className="row mb-12">
                      <div className="col-sm-12" style={{color:'white'}}>
                      <h1 style={{color:'white'}}>Bienvenido  {this.props.location.state.usuario.nombre}</h1>
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
                            <div className="tableAlumno-responsive">
                              <table className="table m-0">
                                <thead>
                                <tr>
                                  <th>No Protocolo</th>
                                  <th>Protocolo</th>
                                  <th>Calificación</th>
                                  <th>Status</th>
                                  <th>Fecha</th>
                                  <th>Evaluar</th>
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
              {/* <!-- Main content --> */}
              {this.state.presidente?
              
              <div className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                      <div className="card">
                          <div className="card-header border-transparent">
                            <h3 className="card-title">Asignar sinodales</h3>

                          {/* <!-- /.card-header --> */}
                          <div className="card-body p-0">
                            <div className="tableAlumno-responsive">
                              <table className="table m-0">
                                <thead>
                                <tr>
                                  <th>No Protocolo</th>
                                  <th>Protocolo</th>
                                  <th>Palabras clave</th>
                                  <th>Sinodal 1</th>
                                  <th>Sinodal 2</th>
                                  <th>Sinodal 3</th>
                                  <th>Asignar sinodal</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {allprotocolo.map(this.renderBaseAsignar)}
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

                </div>
                :''}
                      {/* <!-- /.col-md-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                  </div>
                  {/* <!-- /.container-fluid --> */}
                </div>
                {/* <!-- /.content --> */}
              </div>
              {/* <!-- /.content-wrapper --> */}

              {/* <!-- /.control-sidebar --> */}
                <script src="../js/jquery.min.js"></script>
                {/* <!-- Bootstrap 4 --> */}
                <script src="../js/bootstrap.bundle.min.js"></script>
                {/* <!-- AdminLTE App --> */}
                <script src="../js/adminlte.min.js"></script>
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
export default Profesor;
