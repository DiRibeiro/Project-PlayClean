import './globals.css';

export const metadata = {
  title: 'Jogue Limpo',
  description: 'Aplicação modernizada com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
