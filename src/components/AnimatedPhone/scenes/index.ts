import type { ComponentType } from 'react';
import type { BannerId } from '../../../constants/navLinks';
import type { PhoneSceneProps } from '../types';
import AdvancedFiltersScene from './AdvancedFiltersScene';
import BatchScanningScene from './BatchScanningScene';
import DocumentScannerScene from './DocumentScannerScene';
import ExportAndShareScene from './ExportAndShareScene';
import SignAndStampScene from './SignAndStampScene';

export const phoneScenes: Record<BannerId, ComponentType<PhoneSceneProps>> = {
    documentScanner: DocumentScannerScene,
    signAndStamp: SignAndStampScene,
    batchScanning: BatchScanningScene,
    advancedFilters: AdvancedFiltersScene,
    exportAndShare: ExportAndShareScene,
};
