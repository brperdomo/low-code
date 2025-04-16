import { PoC } from './types';

export const getPoCs = (): PoC[] => {
  const data = localStorage.getItem('pocs');
  return data ? JSON.parse(data) : [];
};

export const savePoCs = (pocs: PoC[]) => {
  localStorage.setItem('pocs', JSON.stringify(pocs));
};
