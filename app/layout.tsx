import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Yasya Indra Blog!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex justify-center">
          <div className="lg:basis-1/2 p-3 lg:p-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
