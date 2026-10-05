import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/data';
import { Hand, Eye, Sparkles } from 'lucide-react';

const iconMap: Record<string, typeof Hand> = { Hand, Eye, Sparkles };

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const category = serviceCategories[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-600 text-sm font-medium tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            Treatments crafted for you
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Every detail is thoughtfully curated to provide a luxurious experience, offering a wide range of treatments that highlight and enhance your natural beauty.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 bg-neutral-100 p-2 rounded-full flex-wrap justify-center">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-primary-700 text-neutral-50 shadow-lg hover:bg-primary-800'
                    : 'text-neutral-600 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-neutral-500 text-sm mb-10 italic">{category.tagline}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 overflow-hidden h-48 sm:h-auto relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-neutral-900 mb-2 leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex flex-col gap-1">
                        <span className="text-primary-700 font-semibold text-lg">{service.price}</span>
                        <span className="flex items-center gap-1 text-neutral-400 text-xs">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                      </div>
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="flex items-center gap-1 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors group/btn"
                      >
                        Book
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
