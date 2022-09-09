import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { Button, Collapse, Nav, Navbar, NavItem } from "reactstrap";

class Template extends React.Component {

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg default-grey">
          <a className="navbar-brand secular" href="#">Clarke</a>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="navbar-nav mr-auto">
              <NavItem className="nav-item dropdown">
                <AnchorLink stripHash id="projectDropdown" className="nav-link dropdown-toggle" to="/#projects" title="Projects" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>Projects</span>
                </AnchorLink>
                <div className="dropdown-menu" aria-labelledby="projectDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </NavItem>
              <NavItem className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default Template;