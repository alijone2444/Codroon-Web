import { Button } from "@/components/ui/button"

export default function BlogsHeroSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-semibold leading-none text-center text-white mb-6">Blogs</h1>
        <p className="text-xl font-normal leading-relaxed tracking-tight text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our
          creativity and expertise.
        </p>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-full text-base">
          Read More
        </Button>
      </div>
    </section>
  )
}
