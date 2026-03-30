export default function Questionnaire() {
  return (
    <>
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <section className="bg-bg-deep border-b border-border">
        <div className="container-content pt-20 pb-12">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-5">
            Early access
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-fg mb-4 max-w-xl">
            Request access to Valore.
          </h1>
          <p className="text-fg-dim font-light leading-relaxed max-w-lg">
            We are onboarding a limited number of wealth management
            professionals. Complete the form below and our team will be in
            touch to arrange a private demonstration.
          </p>
        </div>
      </section>

      {/* ─── Form embed ──────────────────────────────────────────────── */}
      <section className="bg-bg-deep">
        <div className="container-content py-16 max-w-3xl">
          <div className="bg-card border border-border rounded overflow-hidden">
            {/* Replace PLACEHOLDER with your actual Tally.so form ID */}
            <iframe
              src="https://tally.so/embed/PLACEHOLDER?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="640"
              title="Valore Early Access Request"
              className="block"
              style={{ background: 'transparent' }}
            />
          </div>
          <p className="text-muted text-xs text-center mt-6 font-light">
            Your information is handled with strict confidentiality and will not
            be shared with third parties.
          </p>
        </div>
      </section>
    </>
  )
}
