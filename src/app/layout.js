import localFont from "next/font/local";
import "./globals.css";

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Siddiqui Skills Academy | PMA, AFNS & IT Training",
  description: "Accelerate your career and prepare for PMA initial tests, AFNS nursing initial tests, and master MS Office with expert-led training at Siddiqui Skills Academy.",
  keywords: "Siddiqui Skills Academy, PMA Preparation, AFNS Test Preparation, MS Office Training, Initial Test Preparation, Forces Academy, Computer Course, Army Initial Test, AFNS Initial Test",
  authors: [{ name: "Siddiqui Skills Academy" }],
  icons: {
    icon: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
