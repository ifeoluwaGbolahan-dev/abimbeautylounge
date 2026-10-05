import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const curriculum = [
  'Nail artistry — acrylics, gel polish, nail design',
  'Lash extensions — classic, volume and hybrid',
  'Brow shaping, threading and lamination',
  'Makeup application — everyday glam to bridal',
  'Skincare and facial treatment fundamentals',
  'Client consultation and business skills',
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 md:py-32 bg-gradient-to-br from-primary-50 to-neutral-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Abim Beauty Academy
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
              Turn your passion into a
              <span className="text-primary-700 font-medium"> career</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Ready to take the next step? Our personalised 1:1 training programme equips you with the skills, confidence and business know-how to build your own beauty career. Learn directly from experienced professionals in a real salon environment.
            </p>

            <div className="space-y-3 mb-8">
              {curriculum.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary px-8 py-4 group"
            >
              Enquire About Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8031803/pexels-photo-8031803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Beauty academy training"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl hidden md:block max-w-xs">
              <p className="font-serif text-3xl font-medium text-primary-700">1:1</p>
              <p className="text-neutral-500 text-sm mt-1">Personalised training with individual attention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
