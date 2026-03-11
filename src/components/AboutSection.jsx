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
              I’m a Java backend developer with about four years of experience
              building Spring Boot microservices used in enterprise healthcare
              and business automation platforms. My work mostly revolves around
              designing APIs, building backend services that coordinate
              multiple systems, and making sure production services behave
              predictably under real workloads.
            </p>

            <p className="text-muted-foreground">
              At IQVIA, I worked on backend services supporting patient
              enrollment and copay assistance workflows used across multiple
              healthcare programs. These systems had strict requirements around
              data accuracy and reliability, so a lot of my work involved
              debugging multi-service request flows, handling validation logic,
              and publishing operational events to Kafka so downstream systems
              could react to workflow updates.
            </p>

            <p className="text-muted-foreground">
              More recently at Quicknify, I worked on backend services powering
              workflow automation and reporting pipelines across client
              platforms. I spent a good amount of time improving reporting
              performance by rewriting PostgreSQL queries, adding indexes, and
              introducing Redis caching on frequently used endpoints. Alongside
              that, I also built a Spring Boot service that integrates with LLM
              APIs to generate summaries of operational reports used internally
              by business teams.
            </p>

            <p className="text-muted-foreground">
              Outside of work, I build microservice-style backend systems using
              Spring Boot, Kafka, gRPC, Docker, and AWS to stay close to modern
              backend architecture patterns. I’m particularly interested in
              backend roles where I can work on distributed systems, data
              pipelines, and production-scale services end to end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1olQHXzP8idTvh814-2aiqhsaTlvA8T6r/view?usp=sharing"
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
                  <h4 className="font-semibold text-lg">Backend Systems</h4>
                  <p className="text-muted-foreground">
                    Building Spring Boot microservices, REST APIs, and
                    distributed backend services that integrate with databases,
                    internal systems, and external partner platforms.
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
                    Performance & Production Debugging
                  </h4>
                  <p className="text-muted-foreground">
                    Diagnosing production issues across microservices,
                    databases, and event streams while improving query
                    performance, caching strategies, and service stability.
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
                  <h4 className="font-semibold text-lg">
                    AI-Powered Backend Features
                  </h4>
                  <p className="text-muted-foreground">
                    Integrating LLM APIs into backend services for document
                    summarization and workflow automation with structured
                    outputs, retries, and failure isolation.
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