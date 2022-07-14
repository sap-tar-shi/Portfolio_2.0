import React from 'react'
import styles from './Styles/styleguide.module.css';
import design from './Styles/project.module.css';
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Project = () => {
    return (<>
    <motion.div 
    style={{overflow: "scroll"}}
    className={`${styles.base } ${styles.background4}`}
    initial= {{ opacity: 0 }}
    animate= {{ opacity: 1 }}
    exit= {{ opacity: 0, transition: { duration: 4.5 } }}
    >
        <motion.div
            style={{marginTop: "100px", overflow: "scroll"}}
            initial= {{ opacity: 0, ...{width:"0%"} }}
            animate= {{ opacity: 1 , ...{width:"100%"}}}
            exit= {{ opacity: 0, transition: { duration: 1.5 } }}
        >
        <h1 className={styles.heading2} style={{"text-align":"center"}}>Things I've developed...</h1>
        <Row className={design.article}>
            <Col md={6} className="px-md-0 pr-md-0">
            <img src="/images/royal.png" alt='aaaa' className={design.image}></img>
            </Col>
            <Col md={6}>
                <div>
                    <p className={design.type}>Freelance Project</p>
                    <h3 className={design.type}>Royal Desino</h3>
                    <p className={["px-4 py-3 ", design.detail].join('')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis venenatis ipsum. Etiam scelerisque tempor enim, ac lacinia nulla aliquet id. Donec nibh nisi, blandit ut eleifend vel, suscipit vitae magna.
                    </p>
                    <p style={{display: "flex", flexDirection: "row-reverse"}}>
                        <a href="http://royal-desino.herokuapp.com/"><FontAwesomeIcon icon={faExternalLinkSquareAlt} style={{ color: "grey", fontSize: "25px", marginLeft: "30px"}} /><br /></a>
                        <a href="http://royal-desino.herokuapp.com/"><FontAwesomeIcon icon={faGithub} style={{ color: "pink", fontSize: "25px"}} /><br /></a>
                    </p>
                    </div>
            </Col>
        </Row>
        <Row className={["d-flex flex-row-reverse article", design.article].join('')}>
            <Col md={6} className="px-md-0 pr-md-0">
            <img src="/images/royal.png" alt='aaaa' className={design.image}></img>
            </Col>
            <Col md={6} right className="px-md-0 pr-md-0">
                <div className={design.altBlock}>
                    <p className={design.type} style={{"textAlign":"left"}}>Freelance Project</p>
                    <h3 className={design.type} style={{"textAlign":"left"}}>Royal Desino</h3>
                    <p className={["px-4 py-3 ", design.detail].join('')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis venenatis ipsum. Etiam scelerisque tempor enim, ac lacinia nulla aliquet id. Donec nibh nisi, blandit ut eleifend vel, suscipit vitae magna.
                    </p>
                </div>
            </Col>
        </Row>
        <Row className={design.article}>
            <Col md={6} left className="px-md-0 pr-md-0">
            <img src="/images/royal.png" alt='aaaa' className={design.image}></img>
            </Col>
            <Col md={6}>
                <div>
                    <p className={design.type}>Freelance Project</p>
                    <h3 className={design.type}>Royal Desino</h3>
                    <p className={["px-4 py-3 ", design.detail].join('')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis venenatis ipsum. Etiam scelerisque tempor enim, ac lacinia nulla aliquet id. Donec nibh nisi, blandit ut eleifend vel, suscipit vitae magna.
                    </p>
                </div>
            </Col>
        </Row>
        </motion.div>
    </motion.div>
    </>
    )
}
export default Project;