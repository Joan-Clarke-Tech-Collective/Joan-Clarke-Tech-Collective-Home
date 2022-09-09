import React from "react";
import { Button, Card, CardImg, CardText, CardTitle, Col, Container, Row, Tooltip } from "reactstrap";

let projectList = [
  {
    title: "Trigger.Watch",
    image: "tw_logo.webp",
    text: "An AI-enabled guide for viewers to pick out movies without activating content.",
    link: "#"
  },
  {
    title: "Beginners Guide To Cryptography",
    image: "encryptionlogo.webp",
    text: "An intro to crypography for fundamentals for those who don't necessarily have a math or technology background.",
    link: "#"
  },
  {
    title: "Black Cross Prisoner Letter Writing",
    image: "blackrose.png",
    text: "An app and API backend for communicating with our incarcerated loved ones.",
    link: "#"
  },
]

class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <>
        <section id="projects">
          <Container fluid className="default-peach p-6">
            <h3 className="text-center secular pt-100">Projects</h3>
            <Row>
              {projectList.map((project, index) => (
                <Col key={`col-${index}`} className="mx-auto p-3">
                  <Card className="h-100 mx-auto">
                    <div className="card-body d-flex flex-column">
                      <CardTitle className="card-title text-center h5">{project.title}</CardTitle>
                      <CardImg fluid top src={"images/" + project.image}></CardImg>
                      <CardText className="card-text m-auto merriweather text-center">{project.text}</CardText>
                      <Button href="#" id={`btn-${index}`} className="btn mt-auto btn-primary">Learn More</Button>
                      {project.tooltip ? (
                      <Tooltip placement="bottom" target={`btn-${index}`} isOpen={this.state.tooltipOpen} toggle={this.toggle}>{project.tooltip}</Tooltip>
                      ) : null}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default Projects;