import PageBackground from "@/components/PageBackground";

export default function SideQuestsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-[#ebdbb2]">
      <PageBackground />
      <section className="relative z-20 min-h-screen px-4 py-20 md:px-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-[#fabd2f]">
            <h1 className="text-3xl font-medium tracking-wide text-[#ebdbb2] sm:text-4xl">
              side quests
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
