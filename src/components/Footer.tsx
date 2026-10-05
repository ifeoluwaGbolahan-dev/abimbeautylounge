import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { salonInfo } from '@/data';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Academy', href: '#academy' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-light text-neutral-50 mb-3">
              Abim Beauty Lounge
            </h3>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Where elegance blends seamlessly with expertise. A luxurious beauty salon in Akobo, Ibadan, offering nails, lashes, brows, facials, makeup and 1:1 academy training.
            </p>
            <div className="flex gap-3">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-primary-600 text-neutral-300 hover:text-neutral-50 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-primary-600 text-neutral-300 hover:text-neutral-50 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-neutral-200 text-sm mb-4 tracking-wide">Explore</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-200 text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{salonInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>{salonInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>{salonInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Abim Beauty Lounge. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-primary-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
