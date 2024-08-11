import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Erredebe",
  description: "Tu herramienta favorita para documentar y crear esquemas limpios de tu base de datos ",
};

export default async function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
