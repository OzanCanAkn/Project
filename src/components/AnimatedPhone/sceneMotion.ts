import type { Transition } from 'framer-motion';
import { useState } from 'react';
import { PHONE_ENTER_DURATION } from './phoneMotion';
import type { PhoneSceneProps } from './types';

export const useSceneIntro = ({ isSettled }: PhoneSceneProps) => {
    const [playIntro] = useState(!isSettled);

    return playIntro;
};

export const sceneTransition = (delay: number, playIntro: boolean): Transition =>
    playIntro ? { duration: PHONE_ENTER_DURATION, ease: 'easeInOut', delay } : { duration: 0 } as Transition;
