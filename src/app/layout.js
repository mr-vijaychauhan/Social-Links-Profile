import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter(
    { 
      subsets: ["latin"] ,
      weight:['400', '600', '700']
    }
  );

export const metadata = {
  title: "Jessica Randall | Social Links Profile",
  description: "Jessica Randall | Social Links Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-off-black ${inter.className}`}>{children}</body>
    </html>
  );
}
