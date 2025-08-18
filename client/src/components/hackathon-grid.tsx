import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

// Sample hackathons data - in a real app this would come from API
const hackathons = [
  {
    id: "1",
    title: "Web3 Innovation Summit",
    description: "Build the future of decentralized applications with cutting-edge blockchain technology.",
    domain: "Web3",
    location: "San Francisco, CA",
    startDate: "Sep 15",
    endDate: "Sep 17",
    prizePool: 50000,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://web3summit2025.devpost.com",
  },
  {
    id: "2",
    title: "AI Revolution Hackathon",
    description: "Create intelligent solutions using machine learning and artificial intelligence.",
    domain: "AI/ML",
    location: "Virtual",
    startDate: "Oct 20",
    endDate: "Oct 22",
    prizePool: 30000,
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://airevolution2025.devpost.com",
  },
  {
    id: "3",
    title: "HealthTech Challenge",
    description: "Develop innovative solutions to improve healthcare accessibility and outcomes.",
    domain: "Healthcare",
    location: "Boston, MA",
    startDate: "Nov 10",
    endDate: "Nov 12",
    prizePool: 25000,
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://healthtech2025.devpost.com",
  },
  {
    id: "4",
    title: "Cloud Computing Championship",
    description: "Build scalable cloud-native applications and infrastructure solutions for enterprise.",
    domain: "Cloud",
    location: "Seattle, WA",
    startDate: "Dec 5",
    endDate: "Dec 7",
    prizePool: 40000,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://cloudchampionship2025.devpost.com",
  },
  {
    id: "5",
    title: "Data Science Olympics",
    description: "Analyze complex datasets and create predictive models for real-world challenges.",
    domain: "Data Science",
    location: "Austin, TX",
    startDate: "Jan 15",
    endDate: "Jan 17",
    prizePool: 35000,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://datascienceolympics2026.devpost.com",
  },
  {
    id: "6",
    title: "Blockchain for Good",
    description: "Leverage blockchain technology to solve social and environmental problems.",
    domain: "Web3",
    location: "New York, NY",
    startDate: "Feb 8",
    endDate: "Feb 10",
    prizePool: 45000,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://blockchainforgood2026.devpost.com",
  },
  {
    id: "7",
    title: "Neural Network Challenge",
    description: "Push the boundaries of deep learning with cutting-edge neural architectures.",
    domain: "AI/ML",
    location: "Virtual",
    startDate: "Mar 12",
    endDate: "Mar 14",
    prizePool: 55000,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://neuralchallenge2026.devpost.com",
  },
  {
    id: "8",
    title: "Digital Health Innovation",
    description: "Create digital solutions for mental health, telemedicine, and patient care.",
    domain: "Healthcare",
    location: "Chicago, IL",
    startDate: "Apr 20",
    endDate: "Apr 22",
    prizePool: 32000,
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    registrationUrl: "https://digitalhealthinnovation2026.devpost.com",
  },
];

const getDomainColor = (domain: string) => {
  const colors: Record<string, string> = {
    "Web3": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Healthcare": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Data Science": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Web Dev": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "Cloud": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  };
  return colors[domain] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
};

interface HackathonGridProps {
  searchQuery: string;
  selectedDomain: string;
}

export function HackathonGrid({ searchQuery, selectedDomain }: HackathonGridProps) {
  // Filter hackathons based on search and domain
  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === "All" || hackathon.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8">Featured Hackathons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <Card 
              key={hackathon.id} 
              className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow overflow-hidden"
              data-testid={`card-hackathon-${hackathon.id}`}
            >
              <div className="relative">
                <img
                  src={hackathon.imageUrl}
                  alt={hackathon.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainColor(hackathon.domain)}`}>
                    {hackathon.domain}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {hackathon.startDate}-{hackathon.endDate}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{hackathon.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{hackathon.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {hackathon.location}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${hackathon.prizePool.toLocaleString()}
                  </span>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  data-testid={`button-register-${hackathon.id}`}
                >
                  <a 
                    href={hackathon.registrationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-results">
              No hackathons found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
