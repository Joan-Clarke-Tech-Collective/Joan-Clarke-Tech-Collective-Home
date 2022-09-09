import React from "react";
import { CardSubtitle, Container, Row, Col, Card, CardTitle, CardImg } from "reactstrap";

let membersList = [
  {
    name: "Paxana Wiedeman",
    specialties: ["Project Management", "Android Native", "React"],
    image: "paxana.webp",
    pronouns: "They/Them"
  },
  {
    name: "Frances Chanel",
    specialties: ["Web Development", "System Administration"],
    image: "francesprofile.jpeg",
    pronouns: "They/Them"
  },
  {
    name: "Ari Perezdiez",
    specialties: ["Communications", "Outreach", "Social Media"],
    image: "ari.jpg",
    pronouns: "They/Them"
  }
]

class Members extends React.Component {
  render() {
    return (
      <>
        <section id='team'>
          <Container fluid className="default-grey pt-6">
            <h3 className="secular text-center">Our Team</h3>
            <Row>
              {membersList.map(member => (
                <Col sm={2} className="p-3 mx-auto">
                  <Card className="h-100">
                    <div className="ribbon red"><span>{member.pronouns}</span></div>
                    <div className="card-body d-flex flex-column">

                      <CardTitle className="card-title text-center h5">{member.name}</CardTitle>
                      <CardImg fluid src={"images/" + member.image}></CardImg>
                      <CardSubtitle className="text-center">
                        Specialties: <br />
                        {member.specialties.map(specialty => (
                          <>
                            {specialty} <br />
                          </>
                        ))}</CardSubtitle>
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

export default Members;