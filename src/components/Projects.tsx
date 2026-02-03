import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Droplets, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Simple Sales Data Analysis",
    description: "Databricks + PySpark",
    icon: BarChart3,
    details: [
      "Built a basic data analysis project using PySpark on Databricks",
      "Loaded CSV sales data into Spark DataFrame",
      "Performed data cleaning, filtering, and aggregations (total sales, top products)",
      "Saved processed output as a new CSV file",
    ],
    tech: ["PySpark", "Databricks", "Data Analysis", "ETL"],
  },
  {
    title: "Insurance Management System",
    description: "C# Console Application",
    icon: Shield,
    details: [
      "Developed a console-based insurance management system using C#",
      "Implemented Admin and Underwriter modules with CRUD operations",
      "Added role-based access control, soft delete, and password validation",
      "Used lists, arrays, and local file persistence for data management",
    ],
    tech: ["C#", ".NET", "Console App", "CRUD"],
  },
  {
    title: "Smart Lab Automation System",
    description: "IoT + Cloud",
    icon: Cpu,
    details: [
      "Built an IoT automation system using ESP32, PIR sensors, RFID, and relays",
      "Developed cloud-based dashboard for real-time monitoring",
      "Reduced energy consumption by ~30% and improved lab security by ~15%",
    ],
    tech: ["ESP32", "IoT", "Cloud", "RFID", "Sensors"],
  },
  {
    title: "Smart Water Management System",
    description: "IoT Solution",
    icon: Droplets,
    details: [
      "Designed system to monitor water usage and detect wastage using sensors",
      "Implemented real-time tracking and alerts for water conservation",
    ],
    tech: ["IoT", "Sensors", "Monitoring"],
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="font-normal text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
