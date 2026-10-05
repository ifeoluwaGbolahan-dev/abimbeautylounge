import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-950/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-50 mb-4">
            Loved by our clients
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <span className="text-neutral-300 text-sm">5.0 from 3+ verified reviews on Fresha</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`,
              }}
            >
              <Quote className="w-8 h-8 text-primary-500/40 mb-4" />
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-medium text-neutral-100 text-sm">{review.name}</p>
                <p className="text-neutral-500 text-xs mt-1">{review.service}</p>
                <p className="text-neutral-600 text-xs mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
