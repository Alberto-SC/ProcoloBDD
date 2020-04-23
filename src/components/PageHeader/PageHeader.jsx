import React from "react";
import ModalRegis from "../Modals/ModalRegis";
import ModalAlum from "../Modals/ModalAlum";

import {
  Container,
  Row,
  Modal
} from "reactstrap";

class PageHeader extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      regisModal: false,
      alumModal: false
    };
    console.log(this.state.regisModal);
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
    console.log(this.state)
  };
  render() {
    return (
      <div>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">• Protocolos •</h1>
            <h3 className="d-none d-sm-block">
              <button className="btn-success btn-simple" onClick={()=>this.toggleModal("regisModal")}>Registrar protocolo</button>
              <button className="btn-neutral btn-simple" onClick={()=>this.toggleModal("alumModal")}>Registrar alumno</button>
            </h3>
          </div>
        </Container>
      </div>
      <div className="section section-javascript" id="javascriptComponents">
       <Container>
         <Row id="modals">         
           <Modal isOpen={this.state.regisModal}
             toggle={() => this.toggleModal("regisModal")}
           >
             <ModalRegis>
               <div className="modal-header justify-content-center">
               <h4 className="title title-up">Registrar protocolo</h4>
               <button
                 className="close modal-footer"
                 onClick={() => this.toggleModal("regisModal")}
                 >
                 <i className="tim-icons icon-simple-remove" />
               </button> 
               </div>
               {/*
               <Button
               color="danger"
               type="button"
               onClick={() => this.toggleModal("regisModal")}
             >
               Cerrar
             </Button>
             */}
             </ModalRegis>
           </Modal>
         </Row>
       </Container>
     </div>
     <div>
     <Container>
         <Row id="modals">         
           <Modal isOpen={this.state.alumModal}
             toggle={() => this.toggleModal("alumModal")}
           >
             <ModalAlum>
               <div className="modal-header justify-content-center">
               <h4 className="title title-up">Registrar alumno</h4>
               <button
                 className="close modal-footer"
                 onClick={() => this.toggleModal("alumModal")}
                 >
                 <i className="tim-icons icon-simple-remove" />
               </button> 
               </div>
             </ModalAlum>
           </Modal>
         </Row>
       </Container>
     </div>
      </div>
    );
  }
}

export default PageHeader;
