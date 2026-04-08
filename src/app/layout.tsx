export const metadata = {
  title: "CI/CD Next.js",
  description: "Projeto com pipeline CI/CD configurado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
