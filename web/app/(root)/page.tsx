import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main>
        <div className="py-16 md:py-56">
          <Landing></Landing>
          <div className="pt-16">
            <Skills></Skills>
          </div>
        </div>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}
