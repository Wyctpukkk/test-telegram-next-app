import Head from 'next/head';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
