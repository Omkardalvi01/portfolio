import PageBackground from "@/components/PageBackground";

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-[#ebdbb2]">
      <PageBackground />
      <div className="relative z-20 px-4 py-20 md:px-16">
      <div className="mx-auto mb-10 w-full max-w-2xl">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-2 text-[#fabd2f]">
            <span aria-hidden="true" className="font-mono text-4xl font-bold">
              &gt;
            </span>
            <h1 className="text-3xl font-medium tracking-wide text-[#ebdbb2] sm:text-4xl">
              work experience
            </h1>
          </div>

          <article className="relative w-full overflow-hidden rounded-lg border-2 border-[#665c54] bg-background shadow-[3px_3px_0_#665c54] transition-all duration-300 hover:shadow-[5px_5px_0_#665c54] sm:shadow-[4px_4px_0_#665c54] sm:hover:shadow-[6px_6px_0_#665c54]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
            <div className="relative z-10 space-y-4 p-4 sm:p-5">
              <div>
                <h2 className="text-xl font-bold tracking-tight">AI Intern</h2>
                <p className="mt-1 text-sm text-[#a89984]">Digikendr Marketing firm</p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#bdae93] sm:text-base">
                <li>
                  Engineered a LangGraph multi-agent advertising system that
                  matched CTR, ROAS, etc. against campaign objectives to guide
                  new ad generation, with specialised agents and a review agent
                  iteratively evaluating and refining creatives made using
                  Seedance and Google Gemini Veo 3.1.
                </li>
                <li>
                  Enhanced an AI-powered Shopify storefront optimisation system,
                  translating recommendations into reusable Liquid components
                  integrated directly into storefronts.
                </li>
                <li>
                  Deployed AI services on AWS EC2 and S3, containerising services
                  with Docker Compose and configuring Nginx as a reverse proxy.
                </li>
                <li>
                  Contributed to an internal procurement automation system for
                  vendor orders, ingredient-level manufacturer notifications,
                  order approvals, and invoice generation.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "LangGraph",
                  "Shopify Liquid",
                  "AWS EC2 & S3",
                  "Docker Compose",
                  "Nginx",
                  "Seedance",
                  "Gemini Veo 3.1",
                ].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[#3c3836] px-3 py-1.5 text-sm text-[#d5c4a1]"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>
    </main>
  );
}
