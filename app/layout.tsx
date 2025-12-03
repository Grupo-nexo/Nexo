import "./globals.css";

export const metadata = {
  title: "Nexo - Solicitação de Abono",
  description: "Tela de abono de faltas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}