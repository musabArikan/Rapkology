import Image from "next/image";

const TwitchHero = () => {
  return (
    <div className="relative w-full h-[500px] md:mt-[-80] lg:mt-[-50]">
      <div className="hidden md:block w-full h-full absolute inset-0">
        <Image
          src="/images/home/twitch-hero/twitch-hero-desktop.png"
          alt="Twitch Hero Desktop"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="block md:hidden w-full h-full absolute inset-0">
        <Image
          src="/images/home/twitch-hero/twitch-hero-mobile.png"
          alt="Twitch Hero Mobile"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default TwitchHero;
