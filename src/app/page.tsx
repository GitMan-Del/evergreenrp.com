import Image from "next/image";
import Navbar from "./components/navbar";
import { Urbanist } from "next/font/google";
import Footer from "./components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="bg-[#040303] min-h-screen w-full relative flex flex-col overflow-hidden text-white">
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



      {/* STORY SECTION - PIXEL PERFECT DESIGN */}
    
        {/* SVG GRID PATTERN LEFT */}
        <div className="absolute left-0 top-0 h-full w-[30%] z-10 pointer-events-none opacity-10">
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
        </div>
        {/* SVG GRID PATTERN RIGHT */}
        <div className="absolute right-0 top-0 h-full w-[30%] z-10 pointer-events-none opacity-10">
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
        </div>
        {/* BLUR PATCHES */}
        <div className="story-blur-patch" style={{top: '10%', left: '-8%', width: 300, height: 200, background: '#17FF90'}} />
        <div className="story-blur-patch" style={{bottom: '10%', right: '-8%', width: 300, height: 200, background: '#17FF90'}} />
        <div className="story-blur-patch" style={{top: '60%', left: '30%', width: 200, height: 120, background: '#17FF90'}} />
        {/* MAIN STORY CONTENT - HERO STYLE */}
        <div className="flex flex-col md:flex-row min-w-[90%] sm:min-w-[60%] mx-auto h-full items-center relative justify-between p-2 sm:p-5 --border border-y-0" style={{justifyContent:'center'}}>
          {/* LEFT: STORY CARDS */}
          <div className="flex flex-col justify-between mx-auto min-w-[570px] max-w-[520px] w-full gap-6 relative z-30">
            {/* STORY TITLE GRADIENT */}
            <div className="w-full flex justify-start pl-2 -mt-8 mb-2">
              <span className="gradient-story-title text-[90px] leading-none font-extrabold tracking-tight select-none" style={{lineHeight:'1', letterSpacing:'-0.04em'}}>STORY</span>
            </div>
            {/* CARD 1 */}
            <div className="story-card-border bg-[#17FF90] bg-opacity-100 flex flex-row items-center gap-4 p-3 min-h-[140px] relative overflow-visible" style={{borderColor:'#17FF90'}}>
              <div className="flex-1 z-10">
                <h3 className="font-bold text-xl sm:text-2xl text-black">CREATE AND MANAGE YOUR OWN BUSINESS</h3>
                <p className="text-black text-sm sm:text-base mt-1">Stores, Gas Stations, DealerShips, Gun Stores, and many more...</p>
              </div>
              <div className="w-60 h-60 flex items-center justify-center z-20 -mr-3">
                <Image src="/GTA_V_Artwork_Business_PNG 1.png" alt="Business Woman Car" width={180} height={120} className="object-contain w-full h-full drop-shadow-xl" />
              </div>
            </div>
            {/* CARD 2 */}
            <div className="story-card-border-dark bg-black bg-opacity-90 flex flex-row items-center gap-4 p-3 min-h-[140px] relative overflow-visible" style={{borderColor:'#17FF90'}}>
              <div className="flex-1 z-10">
                <h3 className="font-bold text-xl sm:text-2xl text-white">BUILD YOUR OWN STORY HOW YOU LIKE</h3>
                <p className="text-[#ADADAD] text-sm sm:text-base mt-1">Choose the way on how you want to play. You want to be an employee or an important person?</p>
              </div>
              <div className="w-60 h-60 flex items-end justify-center z-20 -mr-6">
                <Image src="/gta-online-importexport-artwork-png 1.png" alt="Business Man" width={120} height={160} className="object-contain drop-shadow-xl" />
              </div>
            </div>
            {/* CARD 3 */}
            <div className="story-card-border-dark bg-black bg-opacity-90 flex flex-row items-center gap-4 p-3 min-h-[140px] relative overflow-visible" style={{borderColor:'#17FF90'}}>
              <div className="flex flex-1 flex-col z-10 justify-center">
                <h3 className="font-bold text-xl sm:text-2xl text-white">BECOME A GANGSTER</h3>
                <p className="text-[#ADADAD] text-sm sm:text-base mt-1">Brake the law and build your empire on our server. Show the power that you have!</p>
              </div>
              <div className="relative flex-shrink-0 flex items-center justify-end h-[160px] w-[240px] z-20">
                <Image src="/gun_PNG1356 1 (1).png" alt="Gun" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
            {/* CARD 4 */}
            <div className="story-card-border-dark bg-black bg-opacity-90 flex flex-row items-center gap-4 p-3 min-h-[140px] relative overflow-visible" style={{borderColor:'#17FF90'}}>
              <div className="flex flex-1 flex-col z-10 justify-center">
                <h3 className="font-bold text-xl sm:text-2xl text-white">WANT TO EVOLVE BE A STAFF MEMBER</h3>
                <p className="text-[#ADADAD] text-sm sm:text-base mt-1">Want to help and be one of the most important member in the community? Apply Now!</p>
              </div>
              <div className="relative flex-shrink-0 flex items-center justify-end h-[220px] w-[220px] z-20">
                <Image src="/golden-crown-3d-crown-icon-3d-crown-design-free-png 1.png" alt="Crown" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
          </div>
          {/* RIGHT: BIG IMAGE + CTA */}
          <div className="flex-1 flex flex-col items-end justify-between min-w-[700px] max-w-[800px] w-full z-30 p-5">
            <div className="w-full h-full min-h-[680px] max-h-[1000px] flex flex-col justify-between">
              <div className="relative w-full h-full flex flex-col justify-end rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio:'0.50/1'}}>
                {/* Main image for right card */}
                <Image src="/Rectangle 8432.png" alt="Richest Businessman" fill className="object-fill flex justify-center items-center w-full h-full" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#17FF90]/40 to-transparent p-6 flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">FROM THE HOMELESS TO THE RICHEST BUSINESSMAN</h3>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full mt-6">
                <p className="text-white text-lg font-bold">OVER <span className="text-[#17FF90]">1.000</span> MEMBERS IN THE COMMUNITY</p>
                <button className="bg-[#17FF90] px-10 py-3 text-lg font-bold rounded-xl shadow-lg hover:scale-105 transition-all">JOIN THEM</button>
              </div>
            </div>
          </div>
        </div>
     
    

        <Footer />
    </div>
  );
}