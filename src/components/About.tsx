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
    <section id="about" className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/7755473/pexels-photo-7755473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Salon experience"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/37229304/pexels-photo-37229304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Facial treatment"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Salon reception"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/31261686/pexels-photo-31261686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Eyebrow care"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-700 text-neutral-50 rounded-2xl p-6 shadow-2xl hidden md:block">
              <p className="font-serif text-3xl font-medium">5.0</p>
              <p className="text-sm text-neutral-200">Fresha Rating</p>
            </div>
          </div>

          <div>
            <p className="text-primary-600 text-sm font-medium tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
              Beauty begins with
              <span className="text-primary-700 font-medium"> confidence</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6 text-pretty">
              Step into Abim Beauty Lounge, where elegance blends seamlessly with expertise in a space designed for those who want to look and feel their best. Every detail is thoughtfully curated to provide a luxurious experience, offering a wide range of treatments that highlight and enhance your natural beauty.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              For those ready to take the next step, we also offer personalised 1:1 training through our academy — because beauty begins with confidence.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {highlights.map((h) => (
                <div key={h.title}>
                  <div className="bg-primary-100 rounded-xl p-3 w-fit mb-3">
                    <h.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <h3 className="font-medium text-neutral-900 text-sm mb-1">{h.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
