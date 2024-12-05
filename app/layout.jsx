import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar/navbar";
import BottomNavbar from "@/components/ui/navbar/bottomNavbar";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "CTO'D",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full`}
        suppressHydrationWarning

      >
        <Navbar />
        <div className="min-h-[calc(97vh-130px)]">
          {children}
        </div>
        <BottomNavbar />
      </body>
    </html>
  );
}
