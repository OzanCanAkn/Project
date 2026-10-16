import type { ReactNode } from 'react';

const VIEWBOX_SIZE = 56;
const CENTER = VIEWBOX_SIZE / 2;
const RING_RADIUS = 173 / (2 * Math.PI);

type CircularLoadingBarProps = {
  isActive: boolean;
  children: ReactNode;
};

const CircularLoadingBar = ({ isActive, children }: CircularLoadingBarProps) => {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        aria-hidden="true"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_RADIUS}
          fill="none"
          className="stroke-gray-300"
          strokeWidth="1"
        />
      </svg>
      {isActive ? (
        <svg
          className="animate-feature-svg absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
          aria-hidden="true"
        >
          <circle cx={CENTER} cy={CENTER} r={RING_RADIUS} fill="none" />
        </svg>
      ) : null}
      {children}
    </div>
  );
};

export default CircularLoadingBar;
