import './globals.css';

export const metadata = {
  title: 'Trivia News Trainer',
  description: 'News trivia training app for competitive teams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
