import React from "react";
import { Link, Redirect, BrowserRouter ,Switch,Route} from "react-router-dom";
import ModalLogin from "../Modals/ModalLogin";
import Alumno from "../Dashboards/Alumno";
import Profesor from "../Dashboards/Profesor";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  Row,
  Col,
  InputGroup
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      demoModal: false,
      user:[],
      loggedIn:false,
      alumno:false,
    };
  }
  
  handleLogin = (user) => {
    console.log(user);
    
    if(user.numEmp || user.boleta){
      this.setState({user:user,loggedIn:true});
      if(user.boleta){
        console.log("IS alumno")
        this.setState({alumno:true})
      }
    }
    console.log(this.state);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
    console.log(this.state)
  };
  render() {
    
    let reDirect = this.state.loggedIn ? 
    this.state.user.boleta?
    <Redirect to={{pathname:'/alumnos' ,state: { usuario:this.state.user }}}push />
    :<Redirect to={{pathname:'/profesores' ,state: { usuario:this.state.user }}}push />
    :'';
    
    console.log(reDirect);
    return (
      <Navbar
      className={"fixed-top " + this.state.color}
      color-on-scroll="100"
      expand="lg"
      >
       
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              <span>ESCOM • </span>
              Registro y seguimiento
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    • Menú •
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/Catt.ESCOM.Oficial/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook CATT"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="http://www.escom.ipn.mx/htmls/escomunidad/catt.php"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Página CATT"
                >
                  <i className="fas fa-globe" />
                  <p className="d-lg-none d-xl-none">Página CATT</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0" onClick={() => this.toggleModal("demoModal")}>
                <NavLink
                  data-placement="bottom"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Iniciar sesión"
                >
                  Iniciar sesión <span style={{ marginRight: '5px' }}></span>
                  <i className="fas fa-sign-in-alt" />
                </NavLink>
              </NavItem>
              <div className="section section-javascript" id="javascriptComponents">
                <Container>
                  <Row id="modals">
                    <Modal isOpen={this.state.demoModal}
                      toggle={() => this.toggleModal("demoModal")}
                    >
                      <ModalLogin>
                        <div className="modal-header justify-content-center">
                          <h4 className="title title-up">Iniciar sesión</h4>
                          <button
                            className="close modal-footer"
                            onClick={() => this.toggleModal("demoModal")}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </button>
                        </div>
                      </ModalLogin>
                    </Modal>
                  </Row>
                </Container>
              </div>
              <div>
                <Container>
                  <Row id="modals">
                    <Modal isOpen={this.state.demoModal}
                      toggle={() => this.toggleModal("demoModal")}
                    >
                      <ModalLogin login={this.handleLogin}>
                        <div className="modal-header justify-content-center">
                          <h4 className="title title-up">Iniciar sesión</h4>
                          <button
                            className="close modal-footer"
                            onClick={() => this.toggleModal("demoModal")}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </button>
                        </div>
                      </ModalLogin>
                    </Modal>
                  </Row>
                </Container>
              </div>
            </Nav>
          </Collapse>
        </Container>
        <Switch>
          {/* <Route path='/alumnos' render={(routeProps)=>(
              <Alumno usuario={this.state.user}/>
            )}
          />
          <Route path='/profesores' render={(routeProps)=>(
              <Profesor usuario={this.state.user}/>
            )}
          /> */}
          {reDirect}
        </Switch>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;

