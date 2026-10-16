import type { ReactNode } from 'react';

const SceneOverlay = ({ children }: { children?: ReactNode }) => {
    return <div className="pointer-events-none absolute inset-0">{children}</div>;
};

export default SceneOverlay;
