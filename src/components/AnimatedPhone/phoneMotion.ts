import type { Variants } from 'framer-motion';

export const PHONE_ENTER_DURATION = 0.7;

export const phoneVariants: Variants = {
    initial: { y: '100%' },
    enter: {
        y: 0,
        transition: { duration: PHONE_ENTER_DURATION, ease: 'easeOut' },
    },
    exit: {
        y: 0,
        opacity: 0,
        transition: { duration: 0, ease: 'easeOut' },
    },
};
