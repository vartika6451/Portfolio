import { projects } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label="work"
          title="Selected projects."
          description="A mix of full-stack products, AI tools, and blockchain systems — each one built to solve a real, specific problem."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
