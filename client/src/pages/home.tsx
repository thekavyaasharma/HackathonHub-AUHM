import { useState } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SearchFilters } from "@/components/search-filters";
import { AIAssistant } from "@/components/ai-assistant";
import { HackathonGrid } from "@/components/hackathon-grid";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative">
        <HeroSection />
        <SearchFilters
          onSearchChange={setSearchQuery}
          onDomainChange={setSelectedDomain}
          selectedDomain={selectedDomain}
        />
        <AIAssistant />
        <HackathonGrid
          searchQuery={searchQuery}
          selectedDomain={selectedDomain}
        />
      </main>
    </div>
  );
}
