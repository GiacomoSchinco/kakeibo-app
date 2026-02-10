import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "家計簿 (Kakeibo) - Personal Finance Tracker",
  description: "Track your income and expenses with the traditional Japanese budgeting method",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
