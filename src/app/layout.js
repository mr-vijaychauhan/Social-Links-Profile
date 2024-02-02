import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter(
    { 
      subsets: ["latin"] ,
      weight:['400', '600', '700']
    }
  );

export const metadata = {
  title: "Social Links Profile",
  description: "Social Links Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
