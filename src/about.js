import React from 'react'
import styles from './Styles/styleguide.module.css';
import Sphere from './Components/sphere.js'
import {Row, Col} from 'react-bootstrap';

const About = () => {
    return (<>
        <div className={styles.content}>
            <Row className={styles.rowchange}>
                <Col md={6}>
                <h1 className={styles.heading2}>About Me</h1>
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