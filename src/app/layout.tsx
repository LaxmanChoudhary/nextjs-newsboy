import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  title: "NewsBoy - Your news buddy",
  description: "Leveraging APIs for news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
