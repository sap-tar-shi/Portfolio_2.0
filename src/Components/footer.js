import React from 'react'
import '../Styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
    <>
        <div className='footer'>
            <div className='footer-left'>
                <div className='socials'>
                    <a href='https://github.com/sap-tar-shi'><FontAwesomeIcon icon={faGithub} style={{ color: "whitesmoke" }} className="social-icons"/><br /></a>
                    <a href='https://www.instagram.com/__sap_tar_shi__/'><FontAwesomeIcon icon={faInstagram} style={{ color: "whitesmoke" }} className="social-icons"/><br /></a>
                    <a href='https://www.linkedin.com/in/saptarshi-datta-179289186/'><FontAwesomeIcon icon={faLinkedin} style={{ color: "whitesmoke" }} className="social-icons"/><br /></a>
                    <a href='https://twitter.com/_sap_tar_shi_'><FontAwesomeIcon icon={faTwitter} style={{ color: "whitesmoke" }} className="social-icons"/><br /></a>
                </div>
                <div class="vl-l"></div>
            </div>
            <div className='footer-right'>
                <a className='vert-mail' href="mailto: saptarshidutta056@gmail.com">saptarshidutta056@gmail.com</a>
                <div class="vl-r"></div>
            </div>
        </div>
    </>
    )
}
export default Footer;