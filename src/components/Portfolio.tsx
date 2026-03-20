import Image from "next/image";

const projects = [
  { src: "/images/portfolio-1.png", alt: "Luxury modern home exterior", label: "Residential", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/portfolio-2.png", alt: "Commercial office building", label: "Commercial", span: "" },
  { src: "/images/portfolio-3.png", alt: "Modern kitchen remodel", label: "Remodeling", span: "" },
  { src: "/images/portfolio-4.png", alt: "Concrete foundation work", label: "Foundation", span: "" },
  { src: "/images/portfolio-5.png", alt: "Residential framing", label: "Framing", span: "" },
  { src: "/images/portfolio-6.png", alt: "Finished office interior", label: "Interior", span: "md:col-span-2" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            Proof of Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Recent Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-orange-500 mx-auto" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm aspect-[4/3] ${project.span} cursor-pointer`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {project.label}
                </span>
                <p className="text-white text-sm font-semibold mt-1">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
