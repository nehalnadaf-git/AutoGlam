import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wrench, CircleDot, Shield } from "lucide-react";

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const offers = [
  {
    icon: Wrench,
    highlight: "10%",
    title: "Offer On Service",
    desc: "Comprehensive car maintenance services to keep your vehicle running smoothly and efficiently.",
  },
  {
    icon: CircleDot,
    highlight: "20%",
    title: "Save On Ceramic",
    desc: "Quality ceramic coating with unlock offers available for long-lasting protection!",
  },
  {
    icon: Shield,
    highlight: "10%",
    title: "PPF Offer",
    desc: "Unlock savings with our paint protection film purchase — shield your ride today.",
  },
];

const SpecialOffers = () => (
  <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
    {/* Subtle tyre-tread pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--foreground)) 10px, hsl(var(--foreground)) 11px)" }} />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((o, i) => (
          <Reveal key={o.title} delay={i * 150}>
            <div className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
              {/* Warm glow accent */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <span className="font-display text-5xl text-primary">{o.highlight}</span>
                    <span className="ml-1 text-lg text-muted-foreground">OFF</span>
                  </div>
                  <o.icon className="h-10 w-10 text-muted-foreground/50" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-card-foreground">{o.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialOffers;
