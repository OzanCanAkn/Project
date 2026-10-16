import { motion } from 'framer-motion';
import { sceneTransition, useSceneIntro } from '../sceneMotion';
import type { PhoneSceneProps } from '../types';
import SceneOverlay from './SceneOverlay';

const filters = [
    { alt: 'brightness', src: '/img/banner-images/advancedFilters/left-filter.png', className: 'absolute bottom-4 -left-8 w-[12%]', delay: 0.6 },
    { alt: 'contrast', src: '/img/banner-images/advancedFilters/right-filter.png', className: 'absolute bottom-4 -right-8 w-[12%]', delay: 0.9 },
] as const;

const AdvancedFiltersScene = (props: PhoneSceneProps) => {
    const playIntro = useSceneIntro(props);

    return (
        <SceneOverlay>
            {filters.map((filter) => (
                <motion.div
                    key={filter.alt}
                    className={filter.className}
                    initial={playIntro ? { opacity: 0 } : false}
                    animate={{ opacity: 1 }}
                    transition={sceneTransition(filter.delay, playIntro)}
                >
                    <img src={filter.src} alt={filter.alt} className="w-full" />
                </motion.div>
            ))}
        </SceneOverlay>
    );
};

export default AdvancedFiltersScene;
