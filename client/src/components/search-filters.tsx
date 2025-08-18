import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const domains = ["All", "Web3", "AI/ML", "Data Science", "Web Dev", "Healthcare", "Cloud"];

interface SearchFiltersProps {
  onSearchChange: (search: string) => void;
  onDomainChange: (domain: string) => void;
  selectedDomain: string;
}

export function SearchFilters({ onSearchChange, onDomainChange, selectedDomain }: SearchFiltersProps) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Search hackathons..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            data-testid="input-search"
          />
        </div>

        {/* Domain Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {domains.map((domain) => (
            <Button
              key={domain}
              variant={selectedDomain === domain ? "default" : "secondary"}
              onClick={() => onDomainChange(domain)}
              className="px-4 py-2 rounded-lg font-medium transition-colors"
              data-testid={`button-filter-${domain.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {domain}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
