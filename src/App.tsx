import { motion, LayoutGroup, useAnimation } from 'framer-motion';
import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const controls1 = useAnimation();
    const controls2 = useAnimation();

    const handleHoverStart = (index: number) => {
        setHovered(index);
        if (index === 0) {
            controls1.start({ scale: 4, transition: { duration: 0.5 } }); // Scale to 4 times
            controls2.start({ x: 210, transition: { duration: 0.5 } }); // Adjust distance accordingly
        } else {
            controls1.start({ x: -210, transition: { duration: 0.5 } }); // Adjust distance accordingly
            controls2.start({ scale: 4, transition: { duration: 0.5 } }); // Scale to 4 times
        }
    };

    const handleHoverEnd = () => {
        setHovered(null);
        controls1.start({ scale: 1, x: 0, transition: { duration: 0.5 } });
        controls2.start({ scale: 1, x: 0, transition: { duration: 0.5 } });
    };

    return (
        <LayoutGroup>
            <div className="container">
                <motion.div
                    className="square"
                    initial={{ scale: 1, x: 0 }}
                    animate={controls1}
                    onHoverStart={() => handleHoverStart(0)}
                    onHoverEnd={handleHoverEnd}
                >
                    Login
                </motion.div>
                <motion.div
                    className="square"
                    initial={{ scale: 1, x: 0 }}
                    animate={controls2}
                    onHoverStart={() => handleHoverStart(1)}
                    onHoverEnd={handleHoverEnd}
                >
                    Sign up
                </motion.div>
            </div>
        </LayoutGroup>
    );
}

export default App;
