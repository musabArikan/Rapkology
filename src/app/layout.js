import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: "Rapkology Musab Arıkan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] - text-white min-h-screen m-0">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
