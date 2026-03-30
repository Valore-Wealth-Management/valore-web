export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-card border border-border rounded p-6 flex flex-col gap-3 hover:border-accent/40 transition-colors duration-200">
      <div className="w-5 h-px bg-accent" />
      <h3 className="font-serif text-lg font-semibold text-fg">{title}</h3>
      <p className="text-fg-dim text-sm leading-relaxed font-light">{description}</p>
    </div>
  )
}
