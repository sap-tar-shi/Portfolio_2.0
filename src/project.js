import React from 'react'
import styles from './Styles/styleguide.module.css';
import design from './Styles/project.module.css';
import {Row, Col} from 'react-bootstrap';

const Project = () => {
    return (<>
        <div>
        <h1 className={styles.heading2} style={{"text-align":"center"}}>Things I've developed...</h1>
        <Row className={design.article}>
            <Col md={6} className="px-md-0 pr-md-0">
            <img src="/images/royal.png" alt='aaaa' className={design.image}></img>
            </Col>
            <Col md={6} className="px-md-0 pr-md-0">
                <div>
                    <p className={design.type}>Freelance Project</p>
                    <h3 className={design.type}>Royal Desino</h3>
                    <p className={["px-4 py-3 ", design.detail].join('')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis venenatis ipsum. Etiam scelerisque tempor enim, ac lacinia nulla aliquet id. Donec nibh nisi, blandit ut eleifend vel, suscipit vitae magna.
                    </p>
                </div>
            </Col>
        </Row>
        <Row className={["d-flex flex-row-reverse article", design.article].join('')}>
            <Col md={6} className="px-md-0 pr-md-0">
            <img src="/images/royal.png" alt='aaaa' className={design.image}></img>
            </Col>
            <Col md={6} right className="px-md-0 pr-md-0">
                <div>
                    <p className={design.type}>Freelance Project</p>
                    <h3 className={design.type}>Royal Desino</h3>
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
            <Col md={6} className="px-md-0 pr-md-0">
                <div>
                    <p className={design.type}>Freelance Project</p>
                    <h3 className={design.type}>Royal Desino</h3>
                    <p className={["px-4 py-3 ", design.detail].join('')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis venenatis ipsum. Etiam scelerisque tempor enim, ac lacinia nulla aliquet id. Donec nibh nisi, blandit ut eleifend vel, suscipit vitae magna.
                    </p>
                </div>
            </Col>
        </Row>
        </div>
    </>
    )
}
export default Project;