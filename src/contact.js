import React from 'react'
import styles from './Styles/styleguide.module.css';
import design from './Styles/contact.module.css';
import {Row, Col} from 'react-bootstrap';

const Contact = () => {
    return (<>
        <div className={styles.content}>
            <Row className={styles.rowchange}>
                <Col md={6}>
                    <h1 className={styles.heading2}>Get in Touch</h1>
                    <div className={design.article}>
                        <img className={design.image} src="/images/bitmoji.png"></img>
                    </div>
                </Col>
                <Col md={6}>
                </Col>
            </Row>
        </div>
    </>
    )
}
export default Contact;