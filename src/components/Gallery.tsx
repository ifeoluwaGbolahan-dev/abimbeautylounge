import { galleryImages } from '@/data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-600 text-sm font-medium tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            A glimpse into our world
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Explore the elegance, artistry and attention to detail that defines every visit to Abim Beauty Lounge.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                img.span ? 'col-span-2 row-span-2' : ''
              }`}
              style={{
                animation: `scaleIn 0.6s ease-out ${idx * 0.08}s both`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 text-neutral-50 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
