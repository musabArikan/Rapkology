"use client";

import Image from "next/image";

const trends = [
  {
    id: "01",
    avatar: "/images/trends/avatar-1.png",
    name: "Jonathan Stewart",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.",
  },
  {
    id: "02",
    avatar: "/images/trends/avatar-2.png",
    name: "Steve Rogerson",
    title:
      "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
  },
  {
    id: "03",
    avatar: "/images/trends/avatar-3.png",
    name: "Ismail Kor",
    title:
      "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
  },
  {
    id: "04",
    avatar: "/images/trends/avatar-1.png",
    name: "Jonathan Stewart",
    title:
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.",
  },
  {
    id: "05",
    avatar: "/images/trends/avatar-2.png",
    name: "Steve Rogerson",
    title:
      "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
  },
  {
    id: "06",
    avatar: "/images/trends/avatar-3.png",
    name: "Ismail Kor",
    title:
      "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
  },
];

export default function TrendsHero() {
  return (
    <section className="w-full bg-[#121212] text-white py-12 ">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-14">
        <h2 className="font-saira-condensed font-bold text-3xl md:text-4xl tracking-tight">
          TRENDLER
        </h2>
        <Image
          src="/icons/trends/trendingUp.png"
          alt="Trending Up Icon"
          width={40}
          height={28}
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        {trends.map((t, index) => {
          const hideOnMobile = index >= 6 ? "hidden md:block" : "block";

          return (
            <article
              key={t.id}
              className={`${hideOnMobile} relative flex items-start md:items-center gap-0 md:gap-7`}
            >
              <div className="flex-shrink-0 h-full mr-6">
                <span
                  className="text-5xl  font-bold text-[#2a2a2a] leading-none select-none"
                  aria-hidden
                >
                  {t.id}
                </span>
              </div>

              <div className="flex-1 mt-[13px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 md:w-8 md:h-8 rounded-full overflow-hidden">
                    <Image
                      src={t.avatar}
                      width={32}
                      height={32}
                      alt={`${t.name} avatar`}
                      className="object-cover"
                    />
                  </div>
                  <span
                    className="font-sans text-[16px] leading-[120%] tracking-[1.5%]"
                    style={{ fontWeight: 400 }}
                  >
                    {t.name}
                  </span>
                </div>
                <h3
                  className="font-saira-condensed font-bold text-[20px]  leading-[1.04] uppercase mb-4"
                  style={{ fontWeight: 700 }}
                >
                  {t.title}
                </h3>

                <div className="border-t border-[#3B3B3B] mb-4" />

                <div>
                  <button
                    type="button"
                    className="text-[14px] cursor-pointer text-[rgba(255,255,255,0.85)]"
                  >
                    Daha Fazla Oku
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-23 flex justify-center">
        <Image
          src="/images/trends/all-see-btn.png"
          alt="Daha Fazla Oku Butonu"
          width={186}
          height={48}
          className=" cursor-pointer "
        />
      </div>
    </section>
  );
}
