import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center px-0 py-0 z-50 bg-transparent">
      <div className="relative w-full max-w-[60%] rounded-t-4xl px-8 py-10 flex flex-col md:flex-row items-center md:items-end justify-between shadow-2xl overflow-visible bg-black/90 gap-8 md:gap-0">
        {/* Left: Disclaimer */}
        <div className="flex-1 w-full md:w-auto text-xs text-[#ADADAD] leading-relaxed md:text-left text-center mb-6 md:mb-0">
          <span className="font-bold" style={{ color: '#00FF99' }}>EverGreen</span> nu este afiliat cu sau susținut de Take-Two, Rockstar North/Interactive sau de orice alt deținător de drepturi. Toate celelalte mărci comerciale aparțin proprietarilor respectivi.
        </div>
        {/* Center: Logo */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* 3D/metallic effect via CSS */}
            <div className="">
              <Image src="/logo.png" alt="EverGreen Logo" width={100} height={60} className="object-contain drop-shadow-[0_2px_8px_rgba(0,255,153,0.5)]" style={{ filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 8px #00FF99)' }} />
            </div>
          </div>
        </div>
        {/* Right: Socials & Character */}
        <div className="flex-1 flex flex-col items-end justify-end relative min-w-[160px]">
           <span className="text-xs text-[#ADADAD] mb-2 mr-1">Socials</span>
            <div className="flex flex-row gap-3 items-center mb-2">
            {/* Discord */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <Image src="/dis.png" alt="Discord" width={38} height={38} className="cursor-pointer" />
            </a>
            {/* TikTok */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Image src="/tt.png" alt="TikTok" width={38} height={38} className="cursor-pointer" />
            </a>
            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#FF0000"/><path d="M19 12.3c0-.7-.6-1.3-1.3-1.3H10.3C9.6 11 9 11.6 9 12.3v3.4c0 .7.6 1.3 1.3 1.3h7.4c.7 0 1.3-.6 1.3-1.3v-3.4zm-6.2 3.2v-2.6l2.3 1.3-2.3 1.3z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 