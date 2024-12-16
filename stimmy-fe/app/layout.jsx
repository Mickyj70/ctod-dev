import { Navbar } from "../components/ui/navbar/navbar";
import "./globals.css";
import BottomNavbar from "../components/ui/navbar/bottomNavbar";
import { CustomProvider } from "rsuite";

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
  title: "stimmy",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full`} suppressHydrationWarning>
        <div className="min-h-[calc(97vh-130px)] relative">
          <Navbar />
          <CustomProvider theme="dark">{children}</CustomProvider>
          <BottomNavbar />
        </div>
      </body>
    </html>
  );
}
