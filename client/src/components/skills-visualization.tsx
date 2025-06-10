import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const SkillsVisualization = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      label: "Frontend",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React/NextJS", level: 95, experience: "3+ years" },
        { name: "TypeScript", level: 90, experience: "2+ years" },
        { name: "Tailwind CSS", level: 92, experience: "2+ years" },
        { name: "Framer Motion", level: 88, experience: "1+ years" },
        { name: "Redux/Zustand", level: 85, experience: "2+ years" },
      ]
    },
    backend: {
      label: "Backend",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 90, experience: "3+ years" },
        { name: "Express.js", level: 88, experience: "2+ years" },
        { name: "PostgreSQL", level: 85, experience: "2+ years" },
        { name: "MongoDB", level: 82, experience: "2+ years" },
        { name: "GraphQL", level: 75, experience: "1+ years" },
      ]
    },
    tools: {
      label: "Tools & DevOps",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Git/GitHub", level: 93, experience: "3+ years" },
        { name: "Docker", level: 80, experience: "1+ years" },
        { name: "AWS/Vercel", level: 78, experience: "1+ years" },
        { name: "CI/CD", level: 75, experience: "1+ years" },
        { name: "Jest/Testing", level: 82, experience: "2+ years" },
      ]
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Interactive visualization of my technical skills and experience
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-lg"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {skill.experience}
                    </Badge>
                  </div>
                  
                  {/* Circular Progress */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-slate-200 dark:text-slate-700"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="30"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 188.5" }}
                        animate={isVisible ? {
                          strokeDasharray: `${(skill.level / 100) * 188.5} 188.5`
                        } : { strokeDasharray: "0 188.5" }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
                          <stop offset="100%" className="text-purple-600" stopColor="currentColor" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-lg font-bold text-slate-900 dark:text-white"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                  </div>

                  {/* Skill Bar Alternative */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} h-2 rounded-full`}
                    />
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

export default SkillsVisualization;