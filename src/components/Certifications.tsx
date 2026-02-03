import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Blockchain Technology (Ethereum & Polygon)",
    issuer: "Chandigarh University & Metacrafters",
    year: "2023",
    modules: ["JS PROOF", "ETH PROOF", "ETH + AVAX PROOF", "POLY PROOF"],
  },
  {
    title: "Ethical Hacking",
    issuer: "SWAYAM",
    year: "",
    modules: [],
  },
  {
    title: "Introduction to IoT",
    issuer: "SWAYAM",
    year: "",
    modules: [],
  },
  {
    title: "Microprocessors & Microcontrollers",
    issuer: "SWAYAM",
    year: "",
    modules: [],
  },
  {
    title: "INNOWAVE",
    issuer: "IIT Roorkee",
    year: "",
    modules: [],
  },
];

const achievements = [
  {
    title: "First Prize – Generative AI Contest",
    description: "Chandigarh University (Women Safety Device)",
    place: "1st",
  },
  {
    title: "Second Prize – IoTSHALA",
    description: "Smart Home Solution",
    place: "2nd",
  },
  {
    title: "Third Prize – Tech Expo 2024",
    description: "Chandigarh University (IoT Automation)",
    place: "3rd",
  },
  {
    title: "Certificate of Appreciation",
    description: "CU Scholar Summit 2024",
    place: "✓",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const achievementVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-primary/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} {cert.year && `• ${cert.year}`}
                      </p>
                    </CardHeader>
                    {cert.modules.length > 0 && (
                      <CardContent>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.modules.map((module, modIndex) => (
                            <Badge key={modIndex} variant="outline" className="text-xs font-normal">
                              {module}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={achievementVariants}>
                  <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-bold text-primary">{achievement.place}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
