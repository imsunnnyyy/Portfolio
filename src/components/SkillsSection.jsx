import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Querying
  { name: "Python", level: 85, category: "programming" },
  { name: "SQL", level: 90, category: "programming" },
  { name: "PySpark", level: 80, category: "programming" },

  // Data Engineering
  { name: "ETL Pipelines", level: 90, category: "data" },
  { name: "Data Warehousing", level: 75, category: "data" },
  { name: "Data Modeling", level: 70, category: "data" },
  { name: "Batch Processing", level: 85, category: "data" },
  { name: "Data Quality Checks", level: 80, category: "data" },
  { name: "Query Optimization", level: 85, category: "data" },

  // Cloud & Big Data
  { name: "AWS S3", level: 85, category: "cloud" },
  { name: "AWS Glue", level: 75, category: "cloud" },
  { name: "AWS Athena", level: 75, category: "cloud" },
  { name: "DynamoDB", level: 70, category: "cloud" },
  { name: "Databricks", level: 80, category: "cloud" },

  // Orchestration & Streaming
  { name: "Apache Airflow", level: 80, category: "orchestration" },
  { name: "Cloud Composer", level: 70, category: "orchestration" },
  { name: "Apache Kafka", level: 75, category: "orchestration" },

  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "Terraform", level: 65, category: "tools" },
  { name: "Linux", level: 60, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },

  // Learning
  { name: "Snowflake", level: 45, category: "learning" },
  { name: "dbt", level: 40, category: "learning" },
  { name: "Lakehouse Architecture", level: 50, category: "learning" },
  { name: "Data Structures & Algorithms", level: 60, category: "learning" },
];

const categories = [
  "all",
  "programming",
  "data",
  "cloud",
  "orchestration",
  "tools",
  "learning",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};