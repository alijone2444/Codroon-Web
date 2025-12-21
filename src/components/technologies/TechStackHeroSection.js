export default function TechStackHeroSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-semibold leading-none text-center text-white mb-6">
          Powering Innovation With A Modern, Scalable Tech Stack
        </h1>
        <p className="text-xl font-normal leading-relaxed tracking-tight text-center text-gray-300 max-w-3xl mx-auto">
          We use future-ready technologies that ensure faster development, higher performance, and seamless scalability.
        </p>
      </div>
    </section>
  )
}
