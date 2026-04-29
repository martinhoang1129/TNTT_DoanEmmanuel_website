import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Đoàn Emmanuel – Vietnamese Eucharistic Youth Movement',
  description: 'Đoàn Emmanuel is a Vietnamese Eucharistic Youth Movement community serving Vietnamese Catholic families in the USA.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
