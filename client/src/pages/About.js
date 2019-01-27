import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
  return (
    <div className="about-div">
      <Hero backgroundImage="http://www.creditlenders.info/wp-content/uploads/eco-gym-human-powered-gyms-make-watts-from-your-workout-ecopedia.png">
        <h1 className="about-h1f"><i>e</i>Fitness</h1>
        <h2>A Health Information and Exercise Log</h2>
        {/* <button id="btn-signup" type="button">Sign Up</button> */}
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="about-h1"><i>e</i>Fitness</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p className="about-para">
              <i>e</i>Fitness is a health and exercise information app. It provides the user with information concerning their overall exercise and health information. It will display a table/chart of blood pressure values, pulse and weight (if recorded). It will also provide a list of exercise (by category, exercise type) for the user to track their overall exercise routine.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
