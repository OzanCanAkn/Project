export type BannerId =
  | 'documentScanner'
  | 'signAndStamp'
  | 'batchScanning'
  | 'advancedFilters'
  | 'exportAndShare';

export interface NavLink {
  label: string;
  id: BannerId;
  icon: string;
}

export const navLinks: NavLink[] = [
  {
    label: 'Document Scanner',
    id: 'documentScanner',
    icon: '/icons/doc.svg',
  },
  {
    label: 'Sign & Stamp',
    id: 'signAndStamp',
    icon: '/icons/cert.svg',
  },
  {
    label: 'Batch Scanning',
    id: 'batchScanning',
    icon: '/icons/scan.svg',
  },
  {
    label: 'Advanced Filters',
    id: 'advancedFilters',
    icon: '/icons/3-circles.svg',
  },
  {
    label: 'Export and Share',
    id: 'exportAndShare',
    icon: '/icons/doc-transfer.svg',
  },
];
