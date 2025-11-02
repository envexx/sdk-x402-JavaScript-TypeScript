import { RootProvider } from 'next-docs-ui/provider';
import 'next-docs-ui/style.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'x402 JavaScript/TypeScript SDK Documentation',
  description: 'The ultimate SDK for payment-gated APIs on Solana. Transform any API into a paid service in minutes.',
  keywords: ['x402', 'Solana', 'SDK', 'payment', 'API', 'blockchain', 'cryptocurrency', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'ENVXX Team' }],
  openGraph: {
    title: 'x402 JavaScript/TypeScript SDK Documentation',
    description: 'The ultimate SDK for payment-gated APIs on Solana',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'x402 JavaScript/TypeScript SDK Documentation',
    description: 'The ultimate SDK for payment-gated APIs on Solana',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
