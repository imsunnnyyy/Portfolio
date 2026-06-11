import { Database, Workflow, BarChart3 } from "lucide-react";

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
              Data Engineer | PySpark | AWS | Airflow
            </h3>

            <p className="text-muted-foreground">
              I’m a Data Engineer with 4+ years of experience building ETL
              pipelines, cloud-based data workflows, and analytics-ready
              datasets across healthcare and e-commerce domains. My work focuses
              on ingesting, transforming, validating, and optimizing data so
              business and analytics teams can use it reliably.
            </p>

            <p className="text-muted-foreground">
              At IQVIA, I worked on healthcare data platforms for pharmaceutical
              clients, building ETL workflows using Python, SQL, PySpark,
              Databricks, AWS S3, Glue, and DynamoDB. I worked on consolidating
              data from multiple sources, improving transformation logic, and
              preparing clean datasets for reporting and downstream analytics.
            </p>

            <p className="text-muted-foreground">
              At Quicknify, I worked on data engineering workflows for an
              e-commerce client, supporting reporting, pipeline automation, and
              cloud-based data processing. I contributed to ETL pipelines,
              Airflow and Cloud Composer orchestration, Kafka-based event
              processing, and SQL performance optimization.
            </p>

            <p className="text-muted-foreground">
              My core stack includes Python, SQL, PySpark, Airflow, Kafka,
              Databricks, Snowflake, AWS, Terraform, and cloud data platforms. I’m
              particularly interested in building scalable data pipelines,
              distributed processing systems, streaming workflows, and reliable
              data platforms that turn raw data into useful business insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://flowcv.com/resume/bb2d43th7a4c"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Pipelines & ETL
                  </h4>
                  <p className="text-muted-foreground">
                    Building batch and cloud-based ETL pipelines using Python,
                    SQL, PySpark, Databricks, Snowflake, AWS Glue, S3, and DynamoDB for
                    clean, analytics-ready datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Workflow Orchestration
                  </h4>
                  <p className="text-muted-foreground">
                    Orchestrating data workflows using Airflow, with focus on reliable scheduling, dependency
                    management, monitoring, and failure handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Analytics & Performance
                  </h4>
                  <p className="text-muted-foreground">
                    Optimizing SQL queries, improving pipeline performance, and
                    preparing reliable datasets for reporting, dashboards, and
                    business decision-making.
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