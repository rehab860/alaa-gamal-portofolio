import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Data Science Program",
      company: "Shababna Initiative",
      period: "Sep 2025 – Present",
      location: "Cairo, Egypt",
      skills: ["Python", "Pandas/NumPy", "SQL", "Power BI", "EDA", "Dashboards", "Statistics", "NLP overview"]
    },
    {
      title: "Data Engineering Intern",
      company: "Atos",
      period: "Nov 2024 – Apr 2025",
      location: "Cairo, Egypt",
      skills: ["ETL pipelines", "Advanced SQL", "Power BI dashboards", "Data Storytelling", "Python scripting"]
    },
    {
      title: "Data Analysis Training",
      company: "Holol",
      period: "Sep 2024 – Oct 2024",
      location: "Cairo, Egypt",
      skills: ["Advanced Excel", "Pivot Tables", "Data Cleaning", "Actionable Insights"]
    },
    {
      title: "Artificial Intelligence Training",
      company: "ITI",
      period: "Aug 2024 – Sep 2024",
      location: "Cairo, Egypt",
      skills: ["AI Fundamentals", "Real-world AI Applications"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Professional Journey</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
              
              {/* Content Box */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4 ${idx % 2 === 0 ? "" : "md:justify-end"}`}>
                    <span className="flex items-center gap-1 font-medium text-primary/90">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "" : "md:justify-end"}`}>
                    {exp.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-normal border border-border/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
