import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import type { BannerId } from '../../constants/navLinks';
import { phoneVariants } from './phoneMotion';
import { phoneScenes } from './scenes';
import clsx from 'clsx';

interface AnimatedPhoneProps {
  bannerId: BannerId;
  className?: string;
}

const AnimatedPhone = ({ bannerId, className }: AnimatedPhoneProps) => {
  const [settledId, setSettledId] = useState<BannerId | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isSettled = shouldReduceMotion === true || settledId === bannerId;
  const Scene = phoneScenes[bannerId];

  return (
    <div
      className={clsx(
        'relative h-[320px] aspect-[366/483] lg:h-[520px]',
        className,
      )}
    >
      <div
        className={clsx(
          'absolute max-lg:-left-[78px] max-lg:-bottom-28 lg:relative lg:ml-12 aspect-[366/483] lg:scale-100 scale-[58%] h-[520px]',
        )}
      >
        <AnimatePresence>
          <motion.div
            key={bannerId}
            className="relative h-full w-full"
            variants={phoneVariants}
            initial={shouldReduceMotion ? false : 'initial'}
            animate="enter"
            {...(shouldReduceMotion ? { transition: { duration: 0 } } : {})}
            onAnimationComplete={(definition) => {
              if (definition === 'enter') setSettledId(bannerId);
            }}
          >
            <img
              src={`/img/banner-images/${bannerId}/phone.png`}
              alt="phone"
              className="h-full w-full"
            />
            <Scene isSettled={isSettled} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedPhone;
