import type { PhoneSceneProps } from '../types';

//Added for future implementations in any case and for nice type declarations
const DocumentScannerScene = ({ isSettled }: PhoneSceneProps) => {
    if (!isSettled) return null;

    return null;
};

export default DocumentScannerScene;
