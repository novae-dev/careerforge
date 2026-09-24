```tsx
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  LayoutDashboard,
  Sparkles,
  Target,
} from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">
          Career<span className="text-blue-500">Forge</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
        </div>

        <button className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium hover:border-zinc-500">
          Sign in
        </button>
      </nav>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300">
          <Sparkles size={15} className="text-blue-400" />
          Build the career you want
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Turn your skills into
          <span className="block text-blue-500">career opportunities.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          CareerForge helps students and early-career professionals build
          stronger profiles, create professional resumes, manage applications,
          and move from learning to getting hired.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black hover:bg-zinc-200">
            Build your career
            <ArrowRight size={17} />
          </button>

          <button className="rounded-full border border-zinc-700 px-7 py-3 font-medium text-white hover:border-zinc-500">
            Explore CareerForge
          </button>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            icon={<FileText />}
            title="Build your resume"
            description="Create a professional resume from one structured career profile."
          />

          <Feature
            icon={<BriefcaseBusiness />}
            title="Track opportunities"
            description="Keep your applications, opportunities, and progress organized."
          />

          <Feature
            icon={<Target />}
            title="Know your direction"
            description="Turn your skills, projects, and goals into a clearer career path."
          />
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-zinc-900 bg-zinc-950/60"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-blue-400">THE CAREER OS</p>
            <h2 className="mt-3 text-3xl font-semibold">
              Everything starts with your career profile.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400">
            <Step number="01" text="Create your career profile." />
            <Step number="02" text="Add your skills, education and projects." />
            <Step number="03" text="Generate your resume and manage opportunities." />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
        <span>© 2026 CareerForge</span>
        <span>Build. Apply. Grow.</span>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 leading-7 text-zinc-500">{description}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-5 border-b border-zinc-900 pb-5">
      <span className="font-mono text-sm text-blue-400">{number}</span>
      <span className="text-zinc-200">{text}</span>
    </div>
  );
}

export default App;
```
