import { CheckCircle, Award, Users, Heart } from 'lucide-react';

const highlights = [
  { icon: Award, title: 'Expert Artistry', text: 'Years of experience and a passion for perfection in every treatment.' },
  { icon: Users, title: 'Personalized Care', text: 'Every client receives individual attention and tailored beauty solutions.' },
  { icon: Heart, title: 'Luxurious Experience', text: 'A calming, elegant space designed for your comfort and relaxation.' },
];

const features = [
  'Premium quality products',
  'Hygienic, sanitized tools',
  'Skilled, certified professionals',
  'Personalized consultations',
  'Instant booking confirmation',
  'Convenient Akobo location',
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#fffaf8] via-neutral-50 to-[#f9f3f1] py-24 md:py-32">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/7755473/pexels-photo-7755473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Salon experience"
                  className="h-64 w-full rounded-[1.5rem] object-cover shadow-[0_20px_50px_rgba(76,38,32,0.12)]"
                />
                <img
                  src="https://images.pexels.com/photos/37229304/pexels-photo-37229304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Facial treatment"
                  className="h-48 w-full rounded-[1.5rem] object-cover shadow-[0_20px_50px_rgba(76,38,32,0.12)]"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Salon reception"
                  className="h-48 w-full rounded-[1.5rem] object-cover shadow-[0_20px_50px_rgba(76,38,32,0.12)]"
                />
                <img
                  src="https://images.pexels.com/photos/31261686/pexels-photo-31261686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Eyebrow care"
                  className="h-64 w-full rounded-[1.5rem] object-cover shadow-[0_20px_50px_rgba(76,38,32,0.12)]"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary-700 p-6 text-neutral-50 shadow-[0_20px_40px_rgba(122,61,54,0.28)] md:block">
              <p className="font-serif text-3xl font-medium">5.0</p>
              <p className="text-sm text-neutral-200">Fresha Rating</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-600">About Us</p>
            <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
              Beauty begins with
              <span className="font-medium text-primary-700"> confidence</span>
            </h2>
            <p className="mb-6 text-pretty leading-relaxed text-neutral-600">
              Step into Abim Beauty Lounge, where elegance blends seamlessly with expertise in a space designed for those who want to look and feel their best. Every detail is thoughtfully curated to provide a luxurious experience, offering a wide range of treatments that highlight and enhance your natural beauty.
            </p>
            <p className="mb-8 leading-relaxed text-neutral-600">
              For those ready to take the next step, we also offer personalised 1:1 training through our academy — because beauty begins with confidence.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-primary-100 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100">
                    <h.icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <h3 className="mb-1 text-sm font-medium text-neutral-900">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-neutral-500">{h.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2.5 text-sm text-neutral-700 shadow-sm"
                >
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary-600" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
