import React from "react";
import { Col, Container, Row } from "reactstrap";

class Mission extends React.Component {

  render() {
    return (
      <>
        <Container fluid className="default-green">
          < h3 className="text-center secular">Our Mission</h3>
          <Row>
            <Col className="mx-auto" xs={3}>
              <p>We believe that the human spirit inherently leans toward empathy, kindness, and freedom.  We believe that by utilizing
                technology as a tool in those aims we can build a a better society for everyone.
              </p>
            </Col>
            <Col className="mx-auto" xs={3}>
              <img class="img-fluid img-border" alt="Joan Clarke in sepia tone, looking into the camera." src="images/Joan-Clarke.jpeg" />
            </Col>
            <Col className="mx-auto" xs={3}>
              <p> Our collective is named for English cryptographer and mathematician Joan Clarke.
                Alongside Alan Turing and others her mathemtical prowess helped defeat the Nazis.
                Despite her genius and heroism her contributions have remained obscured largely by
                misogyny in the STEM fields.  Together with some of the greatest thinkers in the UK
                in her generation she revolutionized the fields of Computer Science and Mathematics</p>
            </Col>

          </Row>
        </Container>

      </>
    )
  }

}

export default Mission;