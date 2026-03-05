import type { ReactNode } from 'react';
import { ConsentManagerDialog, ConsentManagerProvider, CookieBanner } from '@c15t/nextjs';
import { ConsentManagerClient } from './consent-manager.client';

export function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'c15t',
        backendURL: '/api/c15t',
        consentCategories: ['necessary', 'marketing'], // Optional: Specify which consent categories to show in the banner.
        ignoreGeoLocation: false, // Useful for development to always view the banner.
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      <ConsentManagerClient>{children}</ConsentManagerClient>
    </ConsentManagerProvider>
  );
}
