import Image from "next/image";
import Navbar from "./components/navbar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="bg-[#040303] min-h-screen w-full relative flex flex-col overflow-y-hidden text-white">
      <Navbar />
      {/* Background Blurs */}
      <div className="w-[300px] h-[40%] sm:w-[400px] sm:h-[70%] bg-[#17FF90]/50 blur-[70px] sm:blur-[90px] absolute top-1/2 -translate-y-1/2 -left-10 sm:-left-20 opacity-30 rounded-full"></div>
      <div className="w-[40%] h-[120px] sm:w-[30%] sm:h-[300px] bg-[#17FF90]/50 blur-[70px] sm:blur-[90px] rounded-full absolute -bottom-10 sm:-bottom-20 -translate-x-1/2 left-1/2 opacity-40 z-20"></div>
      <div className="w-[20%] h-[120px] sm:w-[10%] sm:h-[345px] bg-[#17FF90]/50 blur-[70px] sm:blur-[90px] absolute top-1/2 -translate-y-1/2 right-0 opacity-30 rounded-full"></div>
      <div className="w-[40%] h-[100px] sm:w-[35%] sm:h-[245px] bg-[#17FF90]/50 blur-[70px] sm:blur-[90px] absolute -top-20 sm:-top-36 translate-x-1/2 right-1/2 opacity-40 rounded-full "></div>

      {/* SVG Grid Overlays */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[10%] sm:h-[20%] w-[90%] sm:w-[60%] z-10 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g opacity='0.5'><path d='M20 10V30M10 20H30' stroke='white' stroke-width='1' stroke-linecap='round'/></g></svg>")`,
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 20%, transparent 80%, #040303 100%)",
          }}
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-[30%] sm:w-[20%] z-10 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g opacity='0.5'><path d='M20 10V30M10 20H30' stroke='white' stroke-width='1' stroke-linecap='round'/></g></svg>")`,
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 80%, transparent 90%, #040303 100%)",
          }}
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-[30%] sm:w-[20%] z-10 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g opacity='0.5'><path d='M20 10V30M10 20H30' stroke='white' stroke-width='1' stroke-linecap='round'/></g></svg>")`,
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 20% 50%, transparent 60%, #040303 100%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col md:flex-row min-w-[90%] sm:min-w-[60%] mx-auto h-full items-center relative justify-between p-2 sm:p-5 --border border-y-0"
        style={{
          minHeight: "calc(100vh - 64px)", // 64px = aprox navbar height
          justifyContent: "center",
        }}
      >
        {/* Background Image */}
        <Image
          src="/Bg.png"
          alt="Background"
          height={1920}
          width={1080}
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
        />

        {/* Left Content */}
        <div className="relative z-20 w-full md:w-1/2 flex flex-col items-start">
          <div className="bg-gradient-to-r relative from-[#17FF90]/15 to-transparent backdrop-blur-2xl flex flex-row items-center gap-2 sm:gap-5 w-fit py-1 sm:py-2 px-2 sm:px-4 mb-2 sm:mb-5">
            <div className="bg-[#17FF90] rounded px-1 text-white">
              <span className="font-bold text-xs sm:text-base">#1</span>
            </div>
            <span className="text-xs sm:text-base">Balkan Server Network</span>
          </div>
          <div className="h-8 md:h-10 w-1 rounded-full bg-[#17FF90] absolute top-0 left-0"></div>
          <h1 className={`${urbanist.className} max-w-[95vw] sm:max-w-[775px] font-extrabold text-base sm:text-2xl md:text-3xl`}>
            Ever
            <span className="--green">Green{" "}</span>
            is an advanced Roleplay server based on a real economy, with small tweaks
            for the most authentic experience. We strive to mimic real life down to the smallest detail,
            giving you the opportunity to enter a complex and immersive world.
          </h1>
          <p className="--p-text text-xs sm:text-base md:text-lg font-bold max-w-[95vw] sm:max-w-[775px] mt-3 sm:mt-7">
            In EverGreen City, YOU choose who you want to be! Enter and discover a world where authentic roleplay is at home!
          </p>
          <div className="flex flex-row gap-2 mt-3 sm:mt-5">
            <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer">
              <Image
                src="/dis.png"
                alt="Discord"
                height={50}
                width={50}
                className="hover:cursor-pointer hover:rotate-6 transition-all duration-200"
              />
            </a>
            <a href="https://tiktok.com/@your-tiktok-handle" target="_blank" rel="noopener noreferrer">
              <Image
                src="/tt.png"
                alt="TikTok"
                height={50}
                width={50}
                className="hover:cursor-pointer hover:rotate-6 transition-all duration-200"
              />
            </a>
          </div>
          <button className="bg-[#17FF90] md:hidden px-5 py-2 text-2xl rounded-xl mt-5">PLAY NOW

          </button>
          <p className="text-[#6B6B6B] md:hidden text-xs mt-3">Are you still thinking?</p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 hidden h-full relative bg-transparent z-30 md:flex flex-col items-center">
          <Image
            src="/Mask.png"
            alt="Background"
            height={238}
            width={516}
            className="md:absolute hidden md:block top-1/2 -translate-y-1/2 -right-20 z-20 object-contain"
          />

          <div className="absolute top-64  -right-10 items-center z-30">
            <a
              href="https://link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:-translate-y-2 hover:scale-105"
            >
              <Image src="/button.svg" alt="button" width={250} height={80} className="w-[410px] h-[170px]" />
            </a>
          </div>

          {/* Info Boxes */}
          <div className="bg-black/40 backdrop-blur-2xl p-2  px-4 rounded-none absolute top-52  right-10 z-20 whitespace-nowrap float-rotate float-delay-1">
            <h1 className="text-xs sm:text-sm">The most advanced servers in{" "}
              <span className="--green">Blakan{" "}</span>
              Community
            </h1>
          </div>

          <div className="bg-black/40 backdrop-blur-2xl p-1  px-2  rounded-none absolute top-10 -right-52 z-20 flex flex-row gap-1  items-center whitespace-nowrap float-rotate float-delay-2">
            <h1 className="text-xs sm:text-sm">Join Ever
              <span className="--green">Green</span> - Romanian Server
            </h1>
            <p className="text-[10px] sm:text-xs">128/128 - online</p>
            <span className="flex items-center gap-1 sm:gap-2">
              {/* Romania Flag SVG */}
              <span
                className="relative inline-flex items-center justify-center"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 24,
                  height: 24,
                  border: '2px solid #fff',
                  boxShadow: '0 0 0 2px #222'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <g>
                    <rect width="8" height="24" x="0" y="0" fill="#002B7F"/>
                    <rect width="8" height="24" x="8" y="0" fill="#FCD116"/>
                    <rect width="8" height="24" x="16" y="0" fill="#CE1126"/>
                  </g>
                </svg>
              </span>
            </span>
          </div>

          <div className="bg-black/40 backdrop-blur-2xl p-1 sm:p-2 px-2 sm:px-4 rounded-none absolute bottom-72  right-20 z-20 flex flex-row gap-1  items-center whitespace-nowrap float-rotate float-delay-3">
            <h1 className="text-xs sm:text-sm">Join Ever
              <span className="--green">Green</span> -Bulgarian Server
            </h1>
            <p className="text-[10px] sm:text-xs">128/128 - online</p>
            <span className="flex items-center gap-1 sm:gap-2">
              {/* Bulgaria Flag SVG */}
              <span
                className="relative inline-flex items-center justify-center"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 24,
                  height: 24,
                  border: '2px solid #fff',
                  boxShadow: '0 0 0 2px #222'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <g>
                    <rect width="24" height="24" fill="#fff"/>
                    <rect y="8" width="24" height="8" fill="#00966E"/>
                    <rect y="16" width="24" height="8" fill="#D62612"/>
                  </g>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}