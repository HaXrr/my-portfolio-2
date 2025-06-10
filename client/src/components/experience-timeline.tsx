import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ExperienceTimeline = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led development of scalable web applications using NextJS and Node.js. Architected microservices infrastructure serving 100k+ users.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ],
      technologies: ["NextJS", "Node.js", "PostgreSQL", "AWS", "Docker"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Remote",
      period: "2021 - 2022",
      type: "Contract",
      description: "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications.",
      achievements: [
        "Delivered 12+ projects on time and within budget",
        "Increased client retention rate by 40%",
        "Built responsive designs for mobile-first approach"
      ],
      technologies: ["React", "Express", "MongoDB", "Stripe API"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Focused on creating beautiful and intuitive user interfaces for a fintech startup's mobile and web applications.",
      achievements: [
        "Improved user engagement by 45%",
        "Collaborated with UX team to redesign entire platform",
        "Implemented real-time data visualization dashboards"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50" ref={ref}>
      <span className='absolute text-destructive text-sm right-0 md:px-10 bg-destructive-foreground' >dummy Data</span>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My career progression and key achievements in full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white dark:border-slate-950 shadow-lg`}
                  />
                </div>

                {/* Content Card */}
                <div className="ml-8 flex-1">
                  <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col items-end mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                          <Award className="h-4 w-4 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                              className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Technologies Used
                        </h5>
                        <div className="flex gap-2 flex-wrap">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 1.2 + index * 0.2 + i * 0.05 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;