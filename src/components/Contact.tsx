import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, Instagram, Facebook, Loader2 } from 'lucide-react';
import { salonInfo, openingHours, serviceCategories } from '@/data';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const allServices = serviceCategories.flatMap(cat => cat.services.map(s => s.name));

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || '') || null,
      service: String(formData.get('service') || ''),
      preferred_date: String(formData.get('preferred_date') || ''),
      preferred_time: String(formData.get('preferred_time') || ''),
      message: String(formData.get('message') || '') || null,
    };

    try {
      const { error } = await supabase.from('bookings').insert(payload);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-600 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            Book your appointment
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Ready to look and feel your best? Send us your details and we'll confirm your booking right away.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-primary-100 rounded-xl p-3 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Visit Us</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{salonInfo.address}</p>
                  <a
                    href={salonInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 text-sm font-medium hover:text-primary-800 transition-colors mt-2 inline-block"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-primary-100 rounded-xl p-3 flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Call Us</h3>
                  <p className="text-neutral-500 text-sm">{salonInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-xl p-3 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Email Us</h3>
                  <p className="text-neutral-500 text-sm">{salonInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary-700" />
                <h3 className="font-medium text-neutral-900">Opening Hours</h3>
              </div>
              <div className="space-y-2">
                {openingHours.map((entry) => (
                  <div key={entry.day} className="flex justify-between text-sm">
                    <span className="text-neutral-600">{entry.day}</span>
                    <span className={entry.hours === 'Closed' ? 'text-accent-600 font-medium' : 'text-neutral-800'}>
                      {entry.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl py-3 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href={salonInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl py-3 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-primary-100 rounded-full p-5 mb-6">
                    <CheckCircle className="w-12 h-12 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-neutral-900 mb-3">Booking Received!</h3>
                  <p className="text-neutral-500 max-w-md mb-6">
                    Thank you for choosing Abim Beauty Lounge. We'll contact you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-primary-700 font-medium text-sm hover:text-primary-900 transition-colors"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
                      placeholder="jane@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Select Service *</label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm bg-white"
                    >
                      <option value="" disabled>Select a service...</option>
                      {allServices.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                      <option value="Academy Training">Academy 1:1 Training</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        name="preferred_date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Time *</label>
                      <input
                        type="time"
                        name="preferred_time"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Additional Notes (optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about any specific requests or preferences..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-accent-600 text-sm bg-accent-50 px-4 py-3 rounded-xl">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:opacity-60 text-neutral-50 px-6 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-xl disabled:hover:shadow-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Booking
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
