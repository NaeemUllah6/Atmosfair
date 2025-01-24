import { Lato } from "next/font/google";
import "./globals.css";

// Import Lato font with weights
const lato = Lato({
  variable: "--font-lato", // You can change this to your preference
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you want to include
});

export const metadata = {
  title: "Atmosfair",
  description: "Kompensieren Sie Ihren CO₂-Fußabdruck und unterstützen Sie wirkungsvolle Klimaschutzprojekte. Gestalten Sie Klimaschutz aktiv für eine nachhaltige Zukunft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
