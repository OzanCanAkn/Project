import { motion } from 'framer-motion';
import { sceneTransition, useSceneIntro } from '../sceneMotion';
import type { PhoneSceneProps } from '../types';
import SceneOverlay from './SceneOverlay';

const ExportAndShareScene = (props: PhoneSceneProps) => {
  const playIntro = useSceneIntro(props);

  return (
    <SceneOverlay>
      <motion.div
        className="absolute bottom-5 left-0 w-1/4"
        initial={playIntro ? { y: 480, x: 300 } : false}
        animate={{ y: 0, x: -30 }}
        transition={sceneTransition(0.5, playIntro)}
      >
        <img
          src="/img/banner-images/exportAndShare/Vector.png"
          alt="vector"
          className=""
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[44px] left-0 w-[42%]"
        initial={playIntro ? { y: 480, x: 300 } : false}
        animate={{ y: 34, x: -25 }}
        transition={sceneTransition(0.7, playIntro)}
      >
        <img
          src="/img/banner-images/exportAndShare/pdf.png"
          alt="pdf"
          className="w-full"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center"
        initial={playIntro ? { y: 480 } : false}
        animate={{ y: -48 }}
        transition={sceneTransition(0.9, playIntro)}
      >
        <img
          src="/img/banner-images/exportAndShare/jpg.png"
          alt="jpg"
          className="inline-block mr-3 w-[36%]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[44px] right-3 w-[42%] text-right"
        initial={playIntro ? { y: 480, x: -300 } : false}
        animate={{ y: 36, x: 40 }}
        transition={sceneTransition(1.1, playIntro)}
      >
        <img
          src="/img/banner-images/exportAndShare/txt.png"
          alt="txt"
          className="inline-block w-full"
        />
      </motion.div>
    </SceneOverlay>
  );
};

export default ExportAndShareScene;
