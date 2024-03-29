import React from 'react'
import styles from './Styles/intro.module.css';
import design from './Styles/styleguide.module.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
        <div className={`${design.content}`}>
            <h1 className={`${styles.header} font1`}>Hi...I am <span className={`${styles.typer} font1`} ref={el}></span></h1>
            <p className={`${styles.desc1} font1`}>I Design Develop & Deploy</p>
            <p className={`${styles.desc2} font2`}>
                I am an undergrad Web Developer.
                Currently pursuing Btech in CSE.<br />
                I am a Full Stack enthusiast, and a Machine Learning Beginner.<br />
                I genuinely love making web Apps, and I'm open for learning new technologies.<br />
                Currently looking for internship oppurtunies and promsing Startups.<br />
            </p>
        </div>
    </>
    )
}
export default Intro;