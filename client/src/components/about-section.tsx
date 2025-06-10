import { motion } from "framer-motion";
import { Code, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const skills = [
    { name: "NextJS & React", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "Database Design", level: 88 },
    { name: "UI/UX Design", level: 85 },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", color: "from-blue-500 to-purple-600" },
    { value: "3+", label: "Years Experience", color: "from-emerald-500 to-teal-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Passionate about creating innovative solutions that bridge the gap between design and functionality
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="glass-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center">
                    <Code className="text-blue-600 dark:text-blue-400 mr-3" />
                    Full Stack Excellence
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    With expertise in modern web technologies, I specialize in creating scalable applications using NextJS, React, and Node.js. 
                    My passion lies in building user-centric solutions that combine beautiful design with robust functionality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center">
                    <Lightbulb className="text-blue-600 dark:text-blue-400 mr-3" />
                    Innovation & Growth
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    I believe in continuous learning and staying at the forefront of technology. From advanced animations with Framer Motion 
                    to seamless user experiences, I'm committed to delivering excellence in every project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Professional Skills */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="skill-item"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white text-center shadow-lg`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
