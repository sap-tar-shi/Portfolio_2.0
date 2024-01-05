import React from 'react'
import styles from './Styles/styleguide.module.css';
import design from './Styles/intro.module.css'
import Sphere from './Components/sphere.js'
import {Row, Col} from 'react-bootstrap';

const About = () => {
    return (<>
        <div className={styles.content}>
            <Row className={styles.rowchange}>
                <Col md={6}>
                <h1 className={`${styles.heading2} mb-4`}>About Me</h1>
                <p className={`${design.desc1} font3`}>
                As a Consulting Analyst specializing in Human Capital at Deloitte, I adeptly merge analytical skills with a fervor for full-stack development, pursuing it passionately as a side hustle. Beyond my corporate role, I've engaged in freelance projects and internships, refining my abilities in crafting holistic solutions. When not analyzing data, you'll find me on the football field, exploring new destinations, or immersed in the melody of my piano. An avid Fullstack development enthusiast, I'm dedicated to seamlessly blending creativity and functionality.
                </p>
                </Col>
                <Col md={6}>
                    <Sphere />
                </Col>
            </Row>
        </div>
    </>
    )
}
export default About;