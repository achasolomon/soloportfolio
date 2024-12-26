import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains_mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Solomon",
  description: "created by Solomon Acha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${jetBrainsMono.variable} font-jetbrains`}>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </body>
  </html>
  ); 
}
