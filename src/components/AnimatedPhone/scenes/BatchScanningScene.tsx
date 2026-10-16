import { motion } from 'framer-motion';
import { sceneTransition, useSceneIntro } from '../sceneMotion';
import type { PhoneSceneProps } from '../types';
import SceneOverlay from './SceneOverlay';

const pages = [
    { delay: 0.5, y: -35, width: '70%' },
    { delay: 0.8, y: 0, width: '75%' },
    { delay: 1.1, y: 35, width: '80%' },
] as const;

const BatchScanningScene = (props: PhoneSceneProps) => {
    const playIntro = useSceneIntro(props);

    return (
        <SceneOverlay>
            {pages.map((page) => (
                <motion.div
                    key={page.delay}
                    className="absolute bottom-0 left-0 right-0 text-center"
                    initial={playIntro ? { y: 480 } : false}
                    animate={{ y: page.y }}
                    transition={sceneTransition(page.delay, playIntro)}
                >
                    <img
                        src="/img/banner-images/batchScanning/file-preview.png"
                        alt=""
                        className="inline-block"
                        style={{ width: page.width }}
                    />
                </motion.div>
            ))}
        </SceneOverlay>
    );
};

export default BatchScanningScene;
