import AboutMe from "@/components/AboutMe";
import PageBackground from "@/components/PageBackground";
import React from "react";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageBackground />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center">
        <AboutMe />
      </div>
    </main>
  );
};

export default Home;
