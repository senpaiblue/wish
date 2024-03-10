import { Lato } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";

const lato_init = Lato({
  subsets: ["latin"],
  weight: ["100","300", "400","700","900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Wish",
  description: "Make A Wish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato_init.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
