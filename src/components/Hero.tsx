import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-xl" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-primary/10" />
              
              {/* Avatar */}
              <Avatar className="relative h-48 w-48 md:h-64 md:w-64 border-4 border-background shadow-2xl">
                <AvatarImage
                  src={`/portfolio/ProfilePhoto.png`}
                  alt="Abhishek Sehrawat"
                />

                <AvatarFallback className="text-4xl md:text-5xl font-bold bg-primary text-primary-foreground">
                  AS
                </AvatarFallback>
              </Avatar>
              
              {/* Status indicator */}
              <motion.div 
                className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-green-500 border-4 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm md:text-base font-medium text-primary tracking-wider uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Abhishek</span>{" "}
                <span className="text-primary">Sehrawat</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                System Engineer | Software Developer | Data Engineer
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <MapPin className="h-4 w-4" />
              <span>Palwal, Haryana</span>
              <span className="mx-2">•</span>
              <span>English, Hindi</span>
            </motion.div>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Motivated Computer Science Engineer with strong foundations in software development, 
              data structures, IoT systems, and blockchain technologies. Passionate about building 
              scalable software and smart systems that solve real-world problems.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = "mailto:2abhisehrawat@gmail.com"}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://github.com/4Abhisehrawat", "_blank")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://www.linkedin.com/in/1abhisehrawat/", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>

            </motion.div>

            {/* Stats */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">550+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">LeetCode Problems</p>
                </motion.div>
                <div className="h-10 w-px bg-border" />
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">8.36</p>
                  <p className="text-xs md:text-sm text-muted-foreground">CGPA</p>
                </motion.div>
                <div className="h-10 w-px bg-border" />
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">3+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Awards Won</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
