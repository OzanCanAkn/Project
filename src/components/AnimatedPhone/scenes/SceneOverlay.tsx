import type { ReactNode } from 'react';

interface SceneOverlayProps {
  children?: ReactNode;
}

const SceneOverlay = ({ children }: SceneOverlayProps) => {
  return <div className="pointer-events-none absolute inset-0">{children}</div>;
};

export default SceneOverlay;
