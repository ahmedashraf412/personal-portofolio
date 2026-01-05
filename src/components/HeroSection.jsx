import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { name, description } = portfolioData;
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ wordSpacing: "-0.1em" }}
          >
            <span> Hi, I'm</span>
            <span className="text-primary">
              {" "}
              {firstName}
            </span>
            <span className="text-gradient ml-2">
              {" "}
              {lastName}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {description}
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
