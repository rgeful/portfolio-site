import About from "@/components/About";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="lg:flex lg:h-screen">
      <div className="lg:w-4/12 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:overflow-hidden lg:pt-16">
        <Hero />
      </div>
      
      <div className="lg:w-8/12 lg:ml-auto lg:overflow-y-auto lg:h-screen">
        <About />
        <Project />
      </div>
    </div>
  );
}
