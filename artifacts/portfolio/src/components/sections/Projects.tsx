import React from "react";
import { motion } from "framer-motion";
import { PieChart, Code, Database, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      category: "Power BI Dashboard",
      icon: <PieChart className="w-10 h-10" />,
      color: "text-blue-400"
    },
    {
      title: "E-Commerce Customer Insights",
      category: "Python EDA",
      icon: <Code className="w-10 h-10" />,
      color: "text-green-400"
    },
    {
      title: "Inventory Optimization Query Set",
      category: "SQL Analysis",
      icon: <Database className="w-10 h-10" />,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl">
              A selection of analytical deep-dives and dashboards demonstrating practical problem-solving with data.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/30 backdrop-blur-md border-border/50 overflow-hidden group">
                <div className="h-48 bg-muted/50 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
                  <div className={`p-4 rounded-2xl bg-card border border-border/50 shadow-lg ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-border px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    Coming Soon
                  </div>
                </div>
                
                <CardContent className="flex-1 p-6">
                  <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-6">
                    <div className="w-full h-full bg-muted-foreground/20 animate-pulse" />
                  </div>
                  <div className="w-3/4 h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div className="w-full h-full bg-muted-foreground/20 animate-pulse" />
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full justify-between opacity-50 cursor-not-allowed" disabled data-testid={`button-project-${idx}`}>
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
