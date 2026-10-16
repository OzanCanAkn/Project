import { motion } from 'framer-motion';
import { sceneTransition, useSceneIntro } from '../sceneMotion';
import type { PhoneSceneProps } from '../types';
import SceneOverlay from './SceneOverlay';

const SignAndStampScene = (props: PhoneSceneProps) => {
    const playIntro = useSceneIntro(props);

    return (
        <SceneOverlay>
            <motion.div
                className="absolute bottom-[18%] scale-0 w-[226px] left-[-100px] opacity-0"
                initial={playIntro ? { scale: 0 } : false}
                animate={{ scale: 1, opacity: 1 }}
                transition={sceneTransition(0.7, playIntro)}
            >
                <img src="/img/banner-images/signAndStamp/sign.png" alt="sign" className="w-full" />
            </motion.div>
            <motion.div
                className="absolute w-[216px] right-[-83px] top-[30%] opacity-0"
                initial={playIntro ? { scale: 0 } : false}
                animate={{ scale: 1, opacity: 1, width: '216px' }}
                transition={sceneTransition(0.7, playIntro)}
            >
                <img src="/img/banner-images/signAndStamp/stamp.png" alt="stamp" />
            </motion.div>
        </SceneOverlay>
    );
};

export default SignAndStampScene;
