interface MarqueeBannerProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  "AUTO GLAM", "CAR SERVICE", "HUBBALLI", "DETAILING EXPERTS",
  "CERAMIC COATING", "PPF", "WRAPPING", "PAINT CORRECTION",
  "GLASS TREATMENT", "ACCESSORIES",
];

const MarqueeBanner = ({ items = DEFAULT_ITEMS }: MarqueeBannerProps) => {
  const repeated = [...items, ...items];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span className="marquee-text">{item}</span>
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
