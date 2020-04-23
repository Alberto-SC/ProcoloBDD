import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container id="tecnologies">
          <Row>
            <Col md="12">
              <h1 className="title">• Tecnologías •</h1>
            </Col>
            <Col md="12" sm="12">
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-html5"></i>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  HTML
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-css3-alt"></i>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  CSS
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-react" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  React
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip318450375"
                  target="_blank"
                >
                  <i className="fab fa-node-js" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450375">
                  Node Js
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip318450373"
                  target="_blank"
                >
                  <i className="fab fa-node" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450373">
                  Express JS
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip318450379"
                  target="_blank"
                >
                  <i className="fab fa-sass" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450379">
                  SASS
                </UncontrolledTooltip>
                <Button
                  className="btn-icon"
                  color="default"
                  id="tooltip318450370"
                  target="_blank"
                >
                  <i className="fab fa-js-square"></i>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450370">
                  JavaScript
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
