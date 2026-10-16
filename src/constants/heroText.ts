import type { BannerId } from './navLinks';

export interface HeroTextContent {
  title: string;
  subtitle: string;
  description: string;
}

const heroTexts: Record<BannerId, HeroTextContent> = {
  documentScanner: {
    title: 'DOCUMENT SCANNER',
    subtitle: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  signAndStamp: {
    title: 'SIGN & STAMP',
    subtitle: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  batchScanning: {
    title: 'BATCH SCANNING',
    subtitle: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  advancedFilters: {
    title: 'ADVANCED FILTERS',
    subtitle: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  exportAndShare: {
    title: 'EXPORT & SHARE',
    subtitle: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  },
};

export default heroTexts;
