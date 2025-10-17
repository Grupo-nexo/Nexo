import '../styles/globals.css';

export const metadata = {
  title: 'Recuperar Senha | NEXO',
  description: 'Página de recuperação de senha',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
