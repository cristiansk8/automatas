import { ReactNode } from 'react';

export interface PageProps {
  params: { lang: string };
}

export interface LayoutProps {
  children: ReactNode;
  params: { lang: string };
}