import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Playfair, Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700" , "900" , "500" , "600" , "100" ], 
  variable: "--font-poppins",
});


const playFair = Playfair({
  subsets : ["latin"],
  weight : ["300" , "400" , "500" , "600" , "700" , "800" , "900"],
    variable : "--font-playfair"
})




const openSans = Open_Sans({
  subsets : ["latin"],
  weight : ["300", "400" , "600" , "500" , "700", "800"],
  variable : "--sansFont"
})

export const metadata: Metadata = {
  title: {
    default: "Morokutti Design - Grafikdesign aus Wien",
    template: "%s | Morokutti Design",
  },
  description: "Durchdachtes Design, klare Botschaften – damit Deine Ideen sichtbar werden. Professionelles Grafikdesign für Branding, Printdesign und Social Media aus Wien.",
  keywords: [
    "Grafikdesign",
    "Grafikdesigner Wien",
    "Branding",
    "Corporate Design",
    "Logo Design",
    "Printdesign",
    "Social Media Design",
    "Morokutti Design",
    "Kerstin Morokutti",
    "Design Agentur Wien",
  ],
  authors: [{ name: "Kerstin Morokutti" }],
  creator: "Kerstin Morokutti",
  publisher: "Morokutti Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://morokuttidesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://morokuttidesign.com",
    siteName: "Morokutti Design",
    title: "Morokutti Design - Grafikdesign aus Wien",
    description: "Durchdachtes Design, klare Botschaften – damit Deine Ideen sichtbar werden. Professionelles Grafikdesign für Branding, Printdesign und Social Media.",
    images: [
      {
        url: "/sitelogo.png",
        width: 1200,
        height: 630,
        alt: "Morokutti Design Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morokutti Design - Grafikdesign aus Wien",
    description: "Durchdachtes Design, klare Botschaften – damit Deine Ideen sichtbar werden.",
    images: ["/sitelogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification code kann hier hinzugefügt werden
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://morokuttidesign.com" />
      </head>
      <body
        className={`  ${poppins.variable} ${openSans.variable} ${playFair.variable} `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// antialiased
