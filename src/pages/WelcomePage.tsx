import {motion, useAnimation,} from 'framer-motion';
import './WelcomePage.css';
import {useState} from 'react';
import * as React from "react";
import FlyingLogo from "./FlyingLogo";


const WelcomePage = () => {

    const [loginIsClicked, setLoginIsClicked] = useState(false);
    const [signupIsClicked, setSignupIsClicked] = useState(false);
    const loginSquareAnimation = useAnimation();
    const signupSquareAnimation = useAnimation();

    const handleLoginClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation(); // Zatrzymuje propagację kliknięcia

        setLoginIsClicked(true);
        setSignupIsClicked(false);
        AnimationStart("square square--login");

    }

    const handleSignupClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation(); // Zatrzymuje propagację kliknięcia
        setSignupIsClicked(true);
        setLoginIsClicked(false);
        AnimationStart("square square--signup");
    }

    const handleContainerClick = () => {
        setSignupIsClicked(false);
        setLoginIsClicked(false);
        ContainerAnimation();// gdy ta linijka tu jest moje animacje na klikniecie kwadratow nie dzialaja
    }

    const AnimationStart = (className: string) => {
        if (className === "square square--login") {
            loginSquareAnimation.start({
                scale: 2.5,
                x: -10,
                transition: {
                    duration: 0.5,
                }
            });
            signupSquareAnimation.start({
                scale: 1,
                x: 240,
                transition: {
                    duration: 0.5,
                }
            });
        } else if (className === "square square--signup") {
            signupSquareAnimation.start({
                scale: 2.5,
                x: 10,
                transition: {
                    duration: 0.5,
                }
            });
            loginSquareAnimation.start({
                scale: 1,
                x: -240,
                transition: {
                    duration: 0.5,
                }
            });
        }

    }

    const ContainerAnimation = () => {
        signupSquareAnimation.start({
            scale: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        });
        loginSquareAnimation.start({
            scale: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        });
    }

    return (

        <motion.div className="container"
                    onClick={handleContainerClick}>
            <FlyingLogo/>
            <motion.div
                className="square square--login"
                onClick={handleLoginClick}
                animate={loginSquareAnimation}
                initial={{scale: 1, x: 0}}
            >
                Login
            </motion.div>
            <motion.div
                className="square square--signup"
                onClick={handleSignupClick}
                animate={signupSquareAnimation}
                initial={{scale: 1, x: 0}}
            >
                Signup
            </motion.div>
        </motion.div>

    );
}

export default WelcomePage;