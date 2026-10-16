import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { BannerId } from '../../constants/navLinks';
import heroTexts from '../../constants/heroText';
import AnimatedPhone from '../AnimatedPhone';
import HeroText from './HeroText';

interface HeroProps {
  activeId: BannerId;
}

const Hero = ({ activeId }: HeroProps) => {
  const heroText = heroTexts[activeId];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="xl:px-16 px-2 flex flex-col lg:flex-row lg:!h-[613px] w-full items-center lg:items-end justify-evenly overflow-hidden">
      <AnimatedPhone bannerId={activeId} className="order-2 lg:order-1" />
      <div className="grid !h-full order-1 lg:order-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeId}
            className="col-start-1 row-start-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <HeroText
              title={heroText.title}
              subtitle={heroText.subtitle}
              description={heroText.description}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
