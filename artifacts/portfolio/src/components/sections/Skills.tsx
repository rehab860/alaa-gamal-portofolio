import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, LineChart, Code2, Cpu, Wrench, Settings } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: [
        { name: "Excel (Advanced)", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Python (Pandas, NumPy)", level: 75 }
      ]
    },
    {
      title: "Core Processes",
      icon: <Settings className="w-5 h-5 text-primary" />,
      skills: [
        { name: "ETL", level: 85 },
        { name: "Data Cleaning", level: 90 },
        { name: "Data Preparation", level: 85 },
        { name: "Data Visualization", level: 90 }
      ]
    },
    {
      title: "Concepts",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: [
        { name: "Statistics", level: 80 },
        { name: "Data Modeling", level: 75 },
        { name: "NLP basics", level: 60 },
        { name: "Big Data basics", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Technical Arsenal</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit designed for extracting, transforming, and visualizing data effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-md bg-primary/10">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent to-white/20" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-widest">Languages</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="text-sm py-1.5 px-4 bg-card hover:bg-card/80 border-primary/20 text-foreground">
              Arabic <span className="text-primary ml-2 font-normal">Native</span>
            </Badge>
            <Badge variant="outline" className="text-sm py-1.5 px-4 bg-card hover:bg-card/80 border-primary/20 text-foreground">
              English <span className="text-primary ml-2 font-normal">Fluent</span>
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
