const infrastructure = [
  { name: "AWS", position: "left" },
  { name: "Google Cloud", position: "top" },
  { name: "Cloudflare", position: "top" },
  { name: "Vercel", position: "right" },
  { name: "Docker", position: "center-left" },
  { name: "Kubernetes", position: "center-right" },
  { name: "GitLab CI/CD", position: "bottom-left" },
  { name: "GitHub Actions", position: "bottom" },
  { name: "Bitbucket Pipelines", position: "bottom" },
  { name: "Render", position: "bottom-right" },
]

export default function InfrastructureSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8 text-center">Infrastructure Built for Scale</h2>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Connection lines - decorative curves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Curved connections */}
            <path d="M 150 200 Q 300 100, 450 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
            <path d="M 450 350 Q 550 300, 650 350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
            <path d="M 300 400 Q 400 420, 500 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          </svg>

          {/* Grid layout for infrastructure */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {infrastructure.map((infra) => (
              <div
                key={infra.name}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex items-center justify-center text-center min-h-[120px]"
              >
                <h3 className="text-white text-sm font-medium">{infra.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
