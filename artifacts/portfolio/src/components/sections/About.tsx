import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Avatar */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center border border-border shadow-lg shadow-primary/10 overflow-hidden">
                <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 28L20 12L26 28" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 22H24" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 18C28.5 16 25 15 22 17C19 19 19 23 22 25C25 27 28 26 30 24" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="12" r="2" fill="#14b8a6" />
                  <circle cx="14" cy="28" r="2" fill="#14b8a6" />
                  <circle cx="26" cy="28" r="2" fill="#14b8a6" />
                </svg>
              </div>
            </div>

            {/* Bio & Contact */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <div className="w-12 h-1 bg-primary rounded-full" />
              </div>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-md shadow-black/5 hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Computer Science graduate from CIC-Canadian International College (2021–2025), Cairo, Egypt. Passionate about data analysis, visualization, and transforming complex datasets into clear business insights.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:alaagamal292003@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors" data-testid="link-email">
                      alaagamal292003@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider">Location</p>
                    <span className="text-sm text-foreground">Cairo, Egypt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
