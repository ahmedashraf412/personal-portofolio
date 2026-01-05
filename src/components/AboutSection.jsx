import { Briefcase, Code, User, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const { about, services } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-6 w-6 text-primary" />;
      case "User":
        return <User className="h-6 w-6 text-primary" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-primary" />;
      default:
        return <Code className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold">{about.title}</h3>
            <p className="text-muted-foreground ">{about.content}</p>
            <p className="text-muted-foreground ">{about.additionalContent}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-center lg:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={about.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                download="Ahmed-Ashraf-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </motion.div>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {getIcon(service.icon)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{service.title}</h4>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
