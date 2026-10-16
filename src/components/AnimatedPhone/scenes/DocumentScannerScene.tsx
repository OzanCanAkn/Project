import type { ComponentType } from 'react';
import type { PhoneSceneProps } from '../types';

// The scan frame and glow are part of the phone image, so this scene has no overlay.
const DocumentScannerScene: ComponentType<PhoneSceneProps> = () => null;

export default DocumentScannerScene;
