import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO metadata
export const metadata = {
  title: "Fuvamulah Adventures - Surf & Dive",
  description: "Experience the thrill of surfing and diving in Fuvamulah, home to stunning underwater landscapes and uncrowded surf spots. Join us for an unforgettable adventure!",
  keywords: "Fuvamulah, surfing, diving, tiger sharks, ocean adventures, travel",
  authors: "mouus dev", // Replace with your name or company
  openGraph: {
    title: "Fuvamulah Adventures - Surf & Dive",
    description: "Join us for exhilarating surfing and diving experiences in Fuvamulah. Discover the beauty of the Indian Ocean with expert guidance.",
    url: "#", // Replace with your website URL
    siteName: "Fuvamulah Adventures",
    images: [
      {
        url: "/images/seo.jpg", // Replace with an image URL for social media previews
        width: 800,
        height: 600,
        alt: "Fuvamulah Surfing and Diving Adventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Replace with your Twitter handle
    title: "Fuvamulah Adventures - Surf & Dive",
    description: "Join us for exhilarating surfing and diving experiences in Fuvamulah.",
    image: "/images/seo.jpg", // Replace with an image URL for Twitter previews
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/path-to-your-favicon.ico" /> {/* Replace with your favicon path */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
