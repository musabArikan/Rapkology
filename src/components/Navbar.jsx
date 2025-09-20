import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Container from "./Container";
export default function Navbar() {
  return (
    <nav className="md:border-b-[1px] border-[#2a2a2a] text-white md:sticky top-0 z-50 w-full h-[80px] bg-black md:bg-transparent backdrop-blur-sm">
      <Container className="flex items-center justify-between h-[80px]">
        <div className="flex items-center">
          <Image
            src="/images/navbar/logo.png"
            alt="Logo"
            width={230}
            height={59}
            className="object-cover md:object-contain  md:w-[235px] md:h-[59px] w-[182.79px] h-[45.92px]"
          />
        </div>

        <div className="hidden md:flex gap-[20px]  lg:gap-[30px] ml-4 lg:ml-18">
          {["HABERLER", "ETKİNLİKLER", "MÜZİKLER", "VİDEOLAR", "İLETİŞİM"].map(
            (item) => (
              <span
                key={item}
                className="text-sm font-normal tracking-wide uppercase select-none"
              >
                {item}
              </span>
            )
          )}
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-9 ml-4 lg:ml-auto">
          <FiSearch className="text-2xl " />
          <button className="bg-white text-black font-bold text-[14px] leading-[100%] px-5 h-10 w-[120px] uppercase text-center cursor-pointer">
            GİRİŞ YAP
          </button>
        </div>

        <div className="flex md:hidden items-center ml-auto">
          <Image
            src="/icons/home/header/mobile-menu-btn.png"
            alt="Mobil Menü Butonu"
            width={31}
            height={10}
          />
        </div>
      </Container>
    </nav>
  );
}
