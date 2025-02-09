import './globals.css';

export const metadata = {
  title: 'I\'m Sorry',
  description: 'A heartfelt apology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 