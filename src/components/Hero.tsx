import { ChevronDown, MapPin } from 'lucide-react';
import heroImage from '../assets/abim-beauty-hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#f0c2b3]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abim Beauty Lounge lash and brow studio"
          className="w-full h-full object-cover object-center scale-105 opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,8,8,0.86)_0%,rgba(52,16,14,0.76)_18%,rgba(104,44,34,0.62)_36%,rgba(170,90,67,0.28)_56%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.12),transparent_24%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-24 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="w-full max-w-[60%] min-w-[280px] pl-1 text-left sm:max-w-[62%] sm:pl-2 lg:max-w-[60%] lg:pl-3">
          <p className="mb-5 sm:mb-6 text-left text-[0.62rem] sm:text-sm tracking-[0.12em] uppercase font-medium text-[#fffaf6] drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
            Premium beauty studio
          </p>

          <h1 className="mb-5 text-left font-serif text-[2.6rem] font-medium leading-[0.82] tracking-[-0.07em] text-[#fffdfb] drop-shadow-[0_5px_20px_rgba(0,0,0,0.35)] sm:text-[clamp(3.1rem,5.6vw,6.4rem)]">
            <span className="mb-1 block">We make you glow</span>
            <span className="block">with confidence.</span>
          </h1>

          <p className="mb-7 max-w-[30rem] text-left text-base font-medium leading-relaxed text-[#fffdfb] drop-shadow-[0_2px_8px_rgba(0,0,0,0.24)] [text-shadow:0_2px_12px_rgba(0,0,0,0.28)] sm:text-lg sm:leading-8">
            Lashes, brows, facials, nails and bridal glam tailored for women who want to glow with confidence.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 sm:py-4 text-[#fffaf6]"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-secondary w-full sm:w-auto px-8 py-3.5 sm:py-4"
            >
              View Services
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8 sm:mt-10 text-white text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-[#f7f3ed]" />
            <span>Akobo, Ibadan — Open 10:00 AM daily</span>
          </div>
        </div>
      </div>

      <div className="absolute left-[62%] top-[18%] flex h-28 w-28 items-center justify-center rounded-full bg-[#f5d31a]/90 text-center text-[0.7rem] font-black uppercase leading-[1.04] tracking-[0.05em] text-[#2c1a17]/85 shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:left-[64%] sm:h-32 sm:w-32 sm:text-[0.78rem] md:flex md:h-40 md:w-40 md:text-[0.9rem] lg:left-[64%] lg:h-44 lg:w-44 lg:text-[1rem]">
        <span className="flex flex-col justify-center items-center leading-none">
          <span>Made for</span>
          <span className="mt-1">your</span>
          <span className="mt-1">beauty</span>
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
