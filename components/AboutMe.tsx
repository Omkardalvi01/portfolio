import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="w-full px-6 py-16 font-mono sm:px-10 sm:py-20 lg:px-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-4xl text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#ebdbb2] sm:text-4xl">
          hi, i&apos;m omkar.
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold uppercase tracking-[0.14em] text-[#fabd2f] sm:text-base">
          <span>go</span>
          <span aria-hidden="true" className="text-[#7c6f64]">{"\u00b7"}</span>
          <span>cloud</span>
          <span aria-hidden="true" className="text-[#7c6f64]">{"\u00b7"}</span>
          <span>backend</span>
        </div>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[#a89984] sm:text-xl">
          <p>
            final-year B.Tech IT student (Honors in DevOps) at DJSCE, Mumbai. Hackathon winner.
          </p>
          <p>
            worked as an AI intern designing and building multi-agent systems and RAG pipelines.
          </p>
          <p>
            on my own, i&apos;ve built an LLM gateway in <span className="text-[#fabd2f]">Go</span>, a federated learning system over <span className="text-[#fabd2f]">WebRTC</span> in <span className="text-[#fabd2f]">Python</span>,
            and an anonymous file transfer system hosted on <span className="text-[#fabd2f]">AWS</span>.
          </p>
          <p>
            currently open to backend and cloud roles. here&apos;s my{" "}
            <Link href="/experience" className="text-[#d5c4a1] transition-colors hover:text-[#ebdbb2]">
              work
            </Link>
            , and here are{" "}
            <Link href="/projects" className="text-[#d5c4a1] transition-colors hover:text-[#ebdbb2]">
              things i&apos;ve built on my own
            </Link>
            , either to learn or just for fun.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-base text-[#a89984] sm:gap-x-8">
          <a
            href="https://github.com/Omkardalvi01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#fabd2f]"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden="true" size={19} />
            <span>github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-jayanand-dalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#fabd2f]"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" size={19} />
            <span>linkedin</span>
          </a>
          <a
            href="mailto:dalviomkar0901@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#fabd2f]"
            aria-label="Email"
          >
            <MdEmail aria-hidden="true" size={20} />
            <span>email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
