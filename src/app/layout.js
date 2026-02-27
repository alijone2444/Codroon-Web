import "./globals.css";
import { Barlow, Montserrat } from "next/font/google";
import Header from "@/components/navbar";
import Navbar from "@/components/footer";
import RunFadeGlobally from "@/utils/RunFadeGlobally";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  variable: "--font-barlow",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"], // Regular
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://codroon.com"),
  title: "Custom Software Development Company | Codroon",
  description:
    "Codroon builds AI-powered web apps, SaaS platforms, and scalable software solutions. Engineering performance, scalability, and growth. Get started today.",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/android-chrome-192x192.png",
  },
  openGraph: {
    title: "Custom Software Development Company | Codroon",
    description:
      "Codroon builds AI-powered web apps, SaaS platforms, and scalable software solutions. Engineering performance, scalability, and growth. Get started today.",
    url: "https://codroon.com",
    siteName: "Codroon",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <main className="min-h-screen min-w-screen">
          {children}
          <RunFadeGlobally />
        </main>
        <Navbar />
      </body>
    </html>
  );
}
