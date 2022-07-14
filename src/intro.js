import React from 'react'
import styles from './Styles/intro.module.css';
import design from './Styles/styleguide.module.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Saptarshi Datta", "a Web_Developer<>", "a Student()", "an Engineer😪", "a VITian🤙"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1500,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "_"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (<>
        <motion.div 
        className={`${design.base } ${design.background1}`}
        initial= {{ opacity: 0 }}
        animate= {{ opacity: 1 }}
        exit= {{ opacity: 0, transition: { duration: 4 } }}
        >
        <motion.div 
        className={styles.content}
        initial= {{ opacity: 0, ...{width:"0px"} }}
        animate= {{ opacity: 1 , ...{width:"900px"}}}
        exit= {{ opacity: 0, transition: { duration: 1.5 } }}
        // initial = {{width:"0px"}}
        // animate = {{width:"900px"}}
        // exit = {{ x:window.innerWidth, transition: { duration: 1.5}}}
        >
            <h1>Hi...I am <span className={styles.typer} ref={el}></span></h1>
            <span className={styles.desc1}>I Design Develop & Deploy</span>
            <p className={styles.desc2}>
                I am an undergrad Web Developer.
                Currently pursuing Btech in CSE.<br />
                I am a Full Stack enthusiast, and a Machine Learning Beginner.<br />
                I genuinly love making web Apps, and I'm open for learning new technologies.<br />
                Currently looking for internship oppurtunies and promsing Startups.<br />
            </p>
        </motion.div>
    </motion.div>
    </>
    )
}
export default Intro;