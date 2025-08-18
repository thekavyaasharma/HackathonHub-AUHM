export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">
          AUHM
        </h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">
          An Ultimate Hackathon Matrix
        </h2>
        <h3 className="text-4xl font-bold text-foreground mb-6">
          Discover{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Amazing
          </span>{" "}
          Hackathons
        </h3>
        <p className="text-xl text-muted-foreground mb-12">
          Find hackathons across Web3, AI/ML, Data Science, and more. Join thousands of students building the future.
        </p>
      </div>
    </section>
  );
}
