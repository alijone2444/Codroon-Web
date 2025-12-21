import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogsCTASection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/futuristic-digital-world-technology.jpg" alt="Digital World" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-6">
          {/* Logo/Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl rotate-45"></div>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p className="text-xl font-normal leading-relaxed tracking-tight text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            No matter which services you choose, we are committed to delivering exceptional results that exceed your
            expectations. Our Revolutionary team works closely together to ensure seamless collaboration and a unified
            vision for your digital project.
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 rounded-full text-lg">
            Start Project
          </Button>
        </div>
      </div>
    </section>
  )
}
