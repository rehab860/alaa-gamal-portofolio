import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Academic Background</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                        <h3 className="text-2xl font-bold">BSc Computer Science</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium">
                          2021 – 2025
                        </span>
                      </div>
                      <p className="text-lg text-primary/90 font-medium">CIC-Canadian International College</p>
                    </div>
                    
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4" /> Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Statistical Methods for Data Science", "Data Visualization", "Database Systems", "Data Analytics", "Big Data Analytics"].map((course, idx) => (
                          <Badge key={idx} variant="outline" className="border-border text-foreground bg-background">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/40 border-border/50 hover:border-border transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Secondary School</h3>
                    <p className="text-muted-foreground">Al Saleh Private School</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium">
                    Graduated 2021
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
