import React from "react";
import styles from "./Styles/styleguide.module.css";
import design from "./Styles/skills.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <div className={styles.content}>
        <Row className={styles.rowchange}>
          <Col lg={6}>
            <h1 className={styles.heading2}>Skills & Experience</h1>
            <p className={styles.desc2}>
              I am an undergrad Web Developer. Currently pursuing Btech in CSE.
              <br />
              I am a Full Stack enthusiast, and a Machine Learning Beginner.
              <br />
              I genuinly love making web Apps, and I'm open for learning new
              technologies.
              <br />
              Currently looking for internship oppurtunies in promising
              Startups.
              <br />
            </p>
          </Col>
          <Col lg={6} className="pt-4">
            <label className={design.progresslabel}>Frontend Progress</label>
            <ProgressBar
              completed={80}
              className={design.progressbar}
              animateOnRender={true}
              isLabelVisible={false}
              height="6px"
              baseBgColor="white"
              bgColor="green"
            />
            <label className={design.progresslabel}>Backend Progress</label>
            <ProgressBar
              completed={70}
              className={design.progressbar}
              animateOnRender={true}
              isLabelVisible={false}
              height="6px"
              baseBgColor="white"
              bgColor="pink"
            />
            <label className={design.progresslabel}>Database Progress</label>
            <ProgressBar
              completed={60}
              className={design.progressbar}
              animateOnRender={true}
              isLabelVisible={false}
              height="6px"
              baseBgColor="white"
              bgColor="red"
            />
            <label className={design.progresslabel}>
              Machine Learning Progress
            </label>
            <ProgressBar
              completed={30}
              className={design.progressbar}
              animateOnRender={true}
              isLabelVisible={false}
              height="6px"
              baseBgColor="white"
              bgColor="blue"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Skills;
