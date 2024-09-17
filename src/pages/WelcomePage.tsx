import {AnimatePresence, motion, useAnimation,} from 'framer-motion';
import './WelcomePage.css';
import {useState} from 'react';
import * as React from "react";
import FlyingLogo from "./FlyingLogo";
import LoginComponent from "./LoginComponent.tsx";
import SignupComponent from "./SignupComponent.tsx";


const WelcomePage = () => {

    const [loginIsClicked, setLoginIsClicked] = useState(false);
    const [signupIsClicked, setSignupIsClicked] = useState(false);
    const loginSquareAnimation = useAnimation();
    const signupSquareAnimation = useAnimation();

    const handleLoginClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        AnimationStart("square square--login");

        setLoginIsClicked(true);
        setSignupIsClicked(false);

    }

    const handleSignupClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        AnimationStart("square square--signup");

        setSignupIsClicked(true);
        setLoginIsClicked(false);
    }

    const handleContainerClick = () => {
        setSignupIsClicked(false);
        setLoginIsClicked(false);
        ContainerAnimation();
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
            <AnimatePresence>
            <motion.div
                className="square square--login"
                onClick={handleLoginClick}
                animate={loginSquareAnimation}
                initial={{scale: 1, x: 0}}
            >

                    {loginIsClicked ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, scale: 0.5}}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5}}
                        >
                            <LoginComponent />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="log-button"
                            initial={{ opacity: 0, scale: 2}}
                            animate={{ opacity: 1 , scale: 1}}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5}}
                        >
                            Log in
                        </motion.div>
                    )}

            </motion.div>
            <motion.div
                className="square square--signup"
                onClick={handleSignupClick}
                animate={signupSquareAnimation}
                initial={{scale: 1, x: 0}}
            >
                {signupIsClicked ? (
                    <motion.div
                        key="signup"
                        initial={{ opacity: 0, scale: 0.5}}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5}}
                    >
                        <SignupComponent />
                    </motion.div>
                ) : (
                    <motion.div
                        key="signup-button"
                        initial={{ opacity: 0, scale: 2}}
                        animate={{ opacity: 1 , scale: 1}}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        Sign in
                    </motion.div>
                )}
            </motion.div>
            </AnimatePresence>
        </motion.div>

    );
}

export default WelcomePage;