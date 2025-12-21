import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TechStackCTASection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/modern-technology-infrastructure.jpg" alt="Technology" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl rotate-45"></div>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Build smarter, faster, and at scale — powered by cutting-edge technology
          </h2>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 rounded-full text-lg">
            Request A Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
