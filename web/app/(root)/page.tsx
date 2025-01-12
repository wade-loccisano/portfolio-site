import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main>
        <Landing></Landing>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}
