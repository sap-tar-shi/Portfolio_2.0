import React from 'react'
import styles from './Styles/styleguide.module.css';
import Sphere from './Components/sphere.js'
import {Row, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
    return (<>
    <motion.div  
    className={`${styles.base } ${styles.background3}`}
    initial= {{ opacity: 0 }}
    animate= {{ opacity: 1 }}
    exit= {{ opacity: 0, transition: { duration: 4.5 } }}
    >
        <motion.div 
        className={styles.content}
        initial= {{ opacity: 0, ...{width:"0px"} }}
        animate= {{ opacity: 1 , ...{width:"900px"}}}
        exit= {{ opacity: 0, transition: { duration: 1.5 } }}
        >
            <Row className={styles.rowchange}>
                <Col md={6}>
                <h1 className={styles.heading2}>About Me</h1>
                </Col>
                <Col md={6}>
                <Sphere />
                </Col>
            </Row>
        </motion.div>
    </motion.div>
    </>
    )
}
export default About;