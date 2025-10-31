import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { HistoryTimeline } from "@/components/history-timeline"
import { LandmarksSection } from "@/components/landmarks-section"
import { InfographicsSection } from "@/components/infographics-section"
import { SourcesSection } from "@/components/sources-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HistoryTimeline />
      <LandmarksSection />
      <InfographicsSection />
      <SourcesSection />
      <Footer />
    </main>
  )
}
