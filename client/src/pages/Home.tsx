import { motion } from "framer-motion";
import { Globe, MessageCircle, Crown, MapPin, Music2 } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_24_de_fev._de_2026,_07_57_59_1771930776929.png";
import bgImg from "@assets/sua-imagem_1771931299241.png";
import { useEffect, useState } from "react";

const links = [
  {
    title: "SITE",
    icon: Globe,
    url: "https://vitorsurf.lojavirtualnuvem.com.br/",
    id: "site"
  },
  {
    title: "WHATSAPP",
    icon: MessageCircle,
    url: "https://wa.me/message/QU7T6N2U5HV5D1",
    id: "whatsapp"
  },
  {
    title: "GRUPO VIP",
    icon: Crown,
    url: "https://chat.whatsapp.com/KjalVf0t9Ep5rOAoRWLpei?mode=gi_t",
    id: "vip"
  },
  {
    title: "ENDEREÇO",
    icon: MapPin,
    url: "https://share.google/ntGR2jecLlyYc4C4o",
    id: "address"
  },
  {
    title: "TIK TOK",
    icon: Music2,
    url: "https://www.tiktok.com/@vitor.surf.loja?_r=1&_t=ZS-94AtUn0tOIn",
    id: "tiktok"
  }
];

export default function Home() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center py-12 px-4 sm:px-6 z-0 overflow-hidden">
      {/* Background Image with New Overlay */}
      <div 
        className="absolute inset-0 z-[-3] bg-cover bg-center bg-no-repeat bg-fixed md:bg-fixed sm:bg-scroll"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="overlay-v2" />

      {/* Particles (Mantidos para o efeito premium) */}
      <div className="particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Light spots */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#00d2ff] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#00d2ff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md flex flex-col items-center z-10"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-2 bg-[#00d2ff] rounded-full blur-lg opacity-40 animate-pulse"></div>
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#00d2ff] logo-container relative z-10 bg-black p-1">
              <img 
                src={logoImg} 
                alt="Vitor Surf Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Neon blue sparks floating */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-4 text-[#00d2ff] text-3xl font-bold font-heading text-neon-glow"
            >
              ✦
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-8 text-[#00d2ff] text-4xl font-bold font-heading text-neon-glow"
            >
              ✦
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-black font-heading tracking-tight mb-2 text-brand-blue text-center"
            style={{ WebkitTextStroke: '1px rgba(0,0,0,0.5)' }}
          >
            Vitor Surf
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2 drop-shadow-lg"
          >
            MODA MASCULINA • PRODUTOS 100% ORIGINAIS
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-5">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1), type: "spring", stiffness: 100 }}
              className="glass-button w-full rounded-full py-4 px-6 flex items-center group relative no-underline"
              data-testid={`link-${link.id}`}
            >
              <div className="absolute left-6 text-[#00d2ff] group-hover:text-white transition-colors duration-300">
                <link.icon size={28} strokeWidth={2.5} />
              </div>
              <span className="w-full text-center text-xl sm:text-2xl font-bold font-heading text-[#00d2ff] group-hover:text-white tracking-wide transition-colors duration-300">
                {link.title}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Ocean Waves V2 */}
      <div className="wave-v2"></div>
    </div>
  );
}
