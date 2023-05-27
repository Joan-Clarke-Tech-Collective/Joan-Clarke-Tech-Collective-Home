import React from "react";
import { Col, Container, Row } from "reactstrap";

class Intro extends React.Component {

  render() {
    return (
      <>
        <Container fluid className="default-blue" >
          <Row >
            <Col className="pt-8" xs={12}>
              <h1 className="text-center pt-8">Joan Clarke <br/> Liberatory Tech Collective</h1>
              <p className="m-8 text-center text-white merriweather">
                The Clarke Collective is dedicated to the advancement of human kindness and ingenuity  <br/>
                through technologies that enhance our capacity for empathy and make acts of liberation 
                part of our daily lives.</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Intro;