import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const highlightClass = "font-bold text-[#fabd2f]";

export default function AboutMe() {
  return (
    <section className="w-full px-6 py-16 font-mono sm:px-10 sm:py-20 lg:px-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-4xl text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#ebdbb2] sm:text-4xl">
          hi, i&apos;m omkar.
        </h1>

        <div className="mt-7 flex flex-wrap items-center justify-start gap-3">
          {["go", "distributed systems", "backend"].map((tag) => (
            <span key={tag} className="rounded border border-[#665c54] bg-[#3c3836] px-3 py-1 text-sm font-bold text-[#fabd2f]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-relaxed text-[#a89984] sm:text-xl">
          <p className="transition-colors duration-200 hover:text-[#ebdbb2]">hi, i am Omkar</p>
          <p className="transition-colors duration-200 hover:text-[#ebdbb2]">
            final-year B.Tech IT student, pursuing Honors in DevOps at DJSCE, Mumbai
          </p>
          <p className="transition-colors duration-200 hover:text-[#ebdbb2]">
            i like distributed systems, security tooling, and LLM infrastructure
          </p>
          <p className="transition-colors duration-200 hover:text-[#ebdbb2]">
            currently building across systems, cloud infrastructure, and agentic AI
          </p>
        </div>

        <div className="mt-9 flex items-center gap-7 text-2xl text-[#a89984] sm:gap-8">
          <a
            href="https://github.com/Omkardalvi01"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#fabd2f]"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-jayanand-dalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#fabd2f]"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dalviomkar0901@gmail.com"
            className="transition-colors hover:text-[#fabd2f]"
            aria-label="Email Omkar"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
}
