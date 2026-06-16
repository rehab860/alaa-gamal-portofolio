import React from "react";
import { Logo } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo className="scale-75 opacity-70 grayscale" />
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Alaa Gamal. Built with passion for data.
        </p>
      </div>
    </footer>
  );
};
