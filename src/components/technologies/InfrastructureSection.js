"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const infrastructure = {
  column1: [
    { name: "AWS", image: "/Images/technologies/infrastructure-aws.png", id: "aws" },
    { name: "GitLab CI/CD", image: "/Images/technologies/infrastructure-git-lab.png", id: "gitlab" },
  ],
  column2: [
    { name: "Google Cloud", image: "/Images/technologies/infrastructure-google-cloud.png", id: "google-cloud" },
    { name: "Docker", image: "/Images/technologies/infrastructure-docker.png", id: "docker" },
    { name: "GitHub Actions", image: "/Images/technologies/infrastructure-github-actions.png", id: "github-actions" },
  ],
  column3: [
    { name: "Cloudflare", image: "/Images/technologies/infrastructure-cloud-flare.png", id: "cloudflare" },
    { name: "Kubernetes", image: "/Images/technologies/infrastructure-kubernetes.png", id: "kubernetes" },
    { name: "Bitbucket Pipelines", image: "/Images/technologies/infrastructure-bitbucket.png", id: "bitbucket" },
  ],
  column4: [
    { name: "Vercel", image: "/Images/technologies/infrastructure-vercel.png", id: "vercel" },
    { name: "Render", image: "/Images/technologies/infrastructure-render.png", id: "render" },
  ],
};
const connections = [
  { from: "aws", to: "google-cloud" },
  { from: "gitlab", to: "github-actions" },
  { from: "bitbucket", to: "render" },
  { from: "vercel", to: "cloudflare" },
]

export default function InfrastructureSection() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const [positions, setPositions] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = {}
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) return

      const allItemIds = new Set()
      connections.forEach((conn) => {
        allItemIds.add(conn.from)
        allItemIds.add(conn.to)
      })

      allItemIds.forEach((itemId) => {
        const el = document.getElementById(itemId)
        if (el) {
          const rect = el.getBoundingClientRect()
          newPositions[itemId] = {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          }
        }
      })

      if (Object.keys(newPositions).length > 0) {
        setPositions(newPositions)
      }
    }

    const waitForImages = () => {
      const images = containerRef.current?.querySelectorAll('img')
      if (!images || images.length === 0) {
        updatePositions()
        return
      }

      let loadedCount = 0
      const totalImages = images.length

      const checkComplete = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setTimeout(updatePositions, 50)
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          checkComplete()
        } else {
          img.addEventListener('load', checkComplete)
          img.addEventListener('error', checkComplete)
        }
      })

      setTimeout(updatePositions, 2000)
    }

    const timeout1 = setTimeout(updatePositions, 100)
    const timeout2 = setTimeout(waitForImages, 300)
    const timeout3 = setTimeout(updatePositions, 1000)
    const timeout4 = setTimeout(updatePositions, 2000)

    window.addEventListener("resize", updatePositions)

    const observer = new MutationObserver(() => {
      setTimeout(updatePositions, 50)
    })
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      })
    }

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
      window.removeEventListener("resize", updatePositions)
      observer.disconnect()
    }
  }, [])

  const renderItem = (item, columnIndex, itemIndex) => (
    <div
      key={item.id}
      id={item.id}
      className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer group flex flex-col items-center justify-center text-center w-[70px] xs:w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 hover:shadow-[0_0_30px_rgba(82,176,105,0.2)] hover:-translate-y-1 reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${(columnIndex * 3 + itemIndex) * 0.08}s` }}
    >
      <div className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-white text-[10px] xs:text-xs sm:text-sm font-medium leading-tight transition-colors duration-300 group-hover:text-[#52B069]">{item.name}</h3>
    </div>
  )

  return (
    <section ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 md:mb-12 text-center reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
          Infrastructure Built for Scale
        </h2>

        <div ref={containerRef} className="relative min-h-[300px] xs:min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[700px] flex items-center justify-center overflow-x-auto">
          {/* Glowing connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0, overflow: 'visible' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur">
                  <animate attributeName="stdDeviation" values="3;8;3" dur="2s" repeatCount="indefinite" />
                </feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-strong">
                <feGaussianBlur stdDeviation="8" result="coloredBlur">
                  <animate attributeName="stdDeviation" values="6;15;6" dur="2s" repeatCount="indefinite" />
                </feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {connections.map((conn, idx) => {
              const fromPos = positions[conn.from]
              const toPos = positions[conn.to]
              if (!fromPos || !toPos) return null

              const isAwsToGoogle = (conn.from === "aws" && conn.to === "google-cloud")

              const midX = (fromPos.x + toPos.x) / 2
              const midY = (fromPos.y + toPos.y) / 2

              const dx = toPos.x - fromPos.x
              const dy = toPos.y - fromPos.y

              const perpX = isAwsToGoogle ? dy : -dy
              const perpY = isAwsToGoogle ? -dx : dx

              const length = Math.sqrt(perpX * perpX + perpY * perpY)
              const containerWidth = containerRef.current?.getBoundingClientRect().width || 0
              const curveAmount = containerWidth < 640 ? 30 : containerWidth < 1024 ? 50 : 80
              const controlX = midX + (perpX / length) * curveAmount
              const controlY = midY + (perpY / length) * curveAmount

              const pathData = `M ${fromPos.x} ${fromPos.y} Q ${controlX} ${controlY} ${toPos.x} ${toPos.y}`

              return (
                <path
                  key={`${conn.from}-${conn.to}-${idx}`}
                  d={pathData}
                  fill="none"
                  stroke="#57BB6D"
                  strokeWidth={isAwsToGoogle ? "4" : "3"}
                  opacity="0.9"
                  filter={isAwsToGoogle ? "url(#glow-strong)" : "url(#glow)"}
                />
              )
            })}
          </svg>

          {/* 4 Column Layout */}
          <div className="relative flex flex-wrap sm:flex-nowrap gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center z-10">
            {/* Column 1 */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column1.map((item, idx) => renderItem(item, 0, idx))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column2.map((item, idx) => renderItem(item, 1, idx))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column3.map((item, idx) => renderItem(item, 2, idx))}
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column4.map((item, idx) => renderItem(item, 3, idx))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
