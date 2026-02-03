import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>System Engineer</CardTitle>
                <CardDescription className="text-base">
                  Tata Consultancy Services (TCS) • September 2025 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    Undergoing training in Databricks and PySpark for big data processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    Working with Spark DataFrames for data cleaning, transformation, and analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    Learning to build basic ETL pipelines using PySpark
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    Collaborating with team members to understand real-world data engineering workflows
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>Databricks</Badge>
                  <Badge>PySpark</Badge>
                  <Badge>ETL</Badge>
                  <Badge>Big Data</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">B.E. Computer Science Engineering (IoT)</CardTitle>
                    <CardDescription>Chandigarh University • 2021 – 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-primary border-primary">CGPA: 8.36</Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Intermediate (CBSE)</CardTitle>
                    <CardDescription>Tilak Public School, Jaipur • 2020</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-primary border-primary">81.4%</Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Matriculation (CBSE)</CardTitle>
                    <CardDescription>Spring Daisy Convent School, Tauru • 2018</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-primary border-primary">92%</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
