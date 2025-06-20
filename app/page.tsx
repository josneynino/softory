"use client"

import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import SuccessCases from "@/components/SuccessCases"
import Methodology from "@/components/Methodology"
import AboutCompany from "@/components/AboutCompany"
import Team from "@/components/Team"
import PricingPlans from "@/components/PricingPlans"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Projects />
      <SuccessCases />
      <Methodology />
      <AboutCompany />
      <Team />
      <PricingPlans />
      <Contact />
    </div>
  )
} 