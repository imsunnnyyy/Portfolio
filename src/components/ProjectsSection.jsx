import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "Patient Management System",
    description: "Patient Management System built on microservices architechture which clear separation between patient, billing and analytic services.",
    image: "/projects/project2.png",
    tags: ["JAVA", "Spring Boot"],
    demoUrl: "#",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
  {
    id: 2,
    title: "Blog API Backend",
    description: "A Spring Boot backend for managing blog posts with full CRUD support.",
    image: "/projects/project2.png",
    tags: ["JAVA", "Spring Boot"],
    demoUrl: "https://blog-app-backend.up.railway.app/",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
  {
    id: 3,
    title: "Smart Summary",
    description: "A Chrome extension that uses Gemini API to generate quick summaries from selected text.",
    image: "/projects/project2.png",
    tags: ["JAVA", "Spring Boot", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
  {
    id: 4,
    title: "To-Do App",
    description: "A simple task manager built using Spring Boot to organize daily goals.",
    image: "/projects/project2.png",
    tags: ["JAVA", "Spring Boot"],
    demoUrl: "#",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Personal portfolio website built with React and TailwindCSS.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://shashankportfolio-rho.vercel.app/",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
  {
    id: 6,
    title: "Quiz App",
    description: "A responsive quiz platform built in React for testing knowledge interactively.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/imsunnnyyy?tab=repositories",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/imsunnnyyy/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};