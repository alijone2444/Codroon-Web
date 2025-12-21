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
  const [positions, setPositions] = useState({})

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = {}
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) return

      // Get all unique item IDs from connections
      const allItemIds = new Set()
      connections.forEach((conn) => {
        allItemIds.add(conn.from)
        allItemIds.add(conn.to)
      })

      // Calculate positions for all items
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

    // Wait for images to load
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
          // All images loaded, update positions
          setTimeout(updatePositions, 50)
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          checkComplete()
        } else {
          img.addEventListener('load', checkComplete)
          img.addEventListener('error', checkComplete) // Also count errors
        }
      })

      // Fallback timeout
      setTimeout(updatePositions, 2000)
    }

    // Initial positioning attempts
    const timeout1 = setTimeout(updatePositions, 100)
    const timeout2 = setTimeout(waitForImages, 300)
    const timeout3 = setTimeout(updatePositions, 1000)
    const timeout4 = setTimeout(updatePositions, 2000)
    
    window.addEventListener("resize", updatePositions)
    
    // Use MutationObserver to detect layout changes
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

  const renderItem = (item) => (
    <div
      key={item.id}
      id={item.id}
      className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center w-[140px] mb-6"
    >
      <div className="relative w-16 h-16 mb-3 group-hover:scale-110 transition-transform">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-white text-sm font-medium leading-tight">{item.name}</h3>
    </div>
  )

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-12 text-center">Infrastructure Built for Scale</h2>

        <div ref={containerRef} className="relative min-h-[700px] flex items-center justify-center">
          {/* Glowing connecting lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 0, overflow: 'visible' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur">
                  <animate attributeName="stdDeviation" values="3;8;3" dur="2s" repeatCount="indefinite"/>
                </feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow-strong">
                <feGaussianBlur stdDeviation="8" result="coloredBlur">
                  <animate attributeName="stdDeviation" values="6;15;6" dur="2s" repeatCount="indefinite"/>
                </feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {connections.map((conn, idx) => {
              const fromPos = positions[conn.from]
              const toPos = positions[conn.to]
              if (!fromPos || !toPos) return null

              // Check if this is AWS to Google Cloud connection
              const isAwsToGoogle = (conn.from === "aws" && conn.to === "google-cloud")
              
              // Calculate control point for curved line
              const midX = (fromPos.x + toPos.x) / 2
              const midY = (fromPos.y + toPos.y) / 2
              
              // Calculate direction vector
              const dx = toPos.x - fromPos.x
              const dy = toPos.y - fromPos.y
              
              // Calculate perpendicular vector for curve direction
              // Reverse direction for AWS to Google Cloud
              const perpX = isAwsToGoogle ? dy : -dy
              const perpY = isAwsToGoogle ? -dx : dx
              
              // Normalize and scale the perpendicular vector
              const length = Math.sqrt(perpX * perpX + perpY * perpY)
              const curveAmount = 80 // Adjust this to control curve intensity
              const controlX = midX + (perpX / length) * curveAmount
              const controlY = midY + (perpY / length) * curveAmount

              // Create curved path using quadratic Bezier curve
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
          <div className="relative flex gap-8 items-center justify-center z-10">
            {/* Column 1 - 2 items */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column1.map(renderItem)}
            </div>

            {/* Column 2 - 3 items */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column2.map(renderItem)}
            </div>

            {/* Column 3 - 3 items */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column3.map(renderItem)}
            </div>

            {/* Column 4 - 2 items */}
            <div className="flex flex-col items-center justify-center">
              {infrastructure.column4.map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
