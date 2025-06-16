import { Code, Settings, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer | Java & Spring Boot Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a software developer with a background in full-stack .NET development and hands-on experience in building RESTful APIs, modern web apps, and scalable backends. After a recent sabbatical focused on sharpening my problem-solving and system design skills, I’m now diving deep into Java, Spring Boot, and backend-focused AI-integrated solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about clean code, backend architecture, and using tech to solve real-world problems. I’m currently working on AI-driven side projects and actively preparing for product-based roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable and maintainable backend systems using Java, Spring Boot, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">System Design & DSA</h4>
                  <p className="text-muted-foreground">
                    Practicing system design patterns and mastering DSA to solve real-world engineering problems efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Experienced in working within cross-functional teams, contributing to both backend and frontend modules in agile environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};