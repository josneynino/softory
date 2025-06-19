"use client"

import AboutCompany from "@/components/AboutCompany"
import Methodology from "@/components/Methodology"
import SuccessCases from "@/components/SuccessCases"
import PricingPlans from "@/components/PricingPlans"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Projects from "@/components/Projects"
import Team from "@/components/Team"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutCompany />
      <Methodology />
      <SuccessCases />
      <PricingPlans />
      <Services />
      <Process />
      <Projects />
      <Team />
      <Contact />
    </div>
  )
} 