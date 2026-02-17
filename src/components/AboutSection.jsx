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
              Java Backend Developer | Spring Boot | Microservices
            </h3>

            <p className="text-muted-foreground">
              I’m a Java backend developer with around 2.5 years of experience
              building Spring Boot microservices in enterprise healthcare
              systems. At my previous role, I worked on services handling
              patient enrollment, eligibility validation, and copay workflows
              where correctness and stability mattered more than fancy
              architecture. Most of my work involved building REST endpoints,
              debugging multi-service request flows, publishing events to
              Kafka, and making sure services behaved reliably across
              environments.
            </p>

            <p className="text-muted-foreground">
              I’ve worked with containerized services in AWS environments using
              ECS, RDS, and S3, and I’m comfortable supporting deployments,
              investigating production issues, and fixing race conditions or
              inconsistent state updates. I’ve also built backend utilities
              integrating LLM APIs for summarization and classification, with a
              focus on structured outputs, retries, and fallback handling so AI
              features don’t break normal workflows.
            </p>

            <p className="text-muted-foreground">
              Outside of work, I build microservice-style backend projects using
              Spring Boot, Kafka, gRPC, Docker, and CI/CD to stay sharp and
              close skill gaps. I’m currently preparing for strong product
              backend roles where I can work on real systems end-to-end and grow
              into deeper system design and ownership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1E0cMKIj37oRp6U1ktgta5w0kA-1-diz4/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
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
                    Building and maintaining Spring Boot microservices, REST
                    APIs, and Kafka-based event flows with focus on stability,
                    validation, and clean service boundaries.
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
                  <h4 className="font-semibold text-lg">
                    Systems & Production Debugging
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in debugging multi-service flows, fixing race
                    conditions, investigating production issues, and supporting
                    deployments in AWS container environments.
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
                  <h4 className="font-semibold text-lg">AI Integration</h4>
                  <p className="text-muted-foreground">
                    Integrated LLM APIs into backend services for summarization,
                    classification, and workflow routing with retries,
                    validation, and structured response handling.
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
