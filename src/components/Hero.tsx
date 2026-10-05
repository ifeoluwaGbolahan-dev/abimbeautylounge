import { Star, ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6899554/pexels-photo-6899554.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Abim Beauty Lounge interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-down">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <span className="text-white text-sm tracking-wide drop-shadow-md">5.0 rating on Fresha</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-neutral-50 leading-[1.1] mb-6 animate-fade-in-up">
            Where elegance meets
            <span className="block font-medium text-primary-300 drop-shadow-lg">expertise</span>
          </h1>

          <p className="text-lg text-white/90 max-w-xl leading-relaxed mb-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Step into Abim Beauty Lounge, a luxurious space in Akobo, Ibadan designed for those who want to look and feel their best. Nails, lashes, brows, facials, makeup and personalized 1:1 academy training.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 drop-shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-white/50 text-white hover:bg-white/15 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 backdrop-blur-sm drop-shadow-lg"
            >
              View Services
            </a>
          </div>

          <div className="flex items-center gap-2 mt-10 text-white text-sm animate-fade-in drop-shadow-md" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <MapPin className="w-4 h-4 text-primary-400" />
            <span>Akobo, Ibadan — Open 10:00 AM daily</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
