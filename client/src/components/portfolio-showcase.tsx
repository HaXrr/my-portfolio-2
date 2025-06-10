import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github,Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const PortfolioShowcase = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "Next-generation e-commerce platform with AI recommendations, real-time analytics, and microservices architecture.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["NextJS", "TypeScript", "Node.js", "PostgreSQL", "Redis", "OpenAI"],
      features: ["AI Recommendations", "Real-time Analytics", "Payment Gateway", "Admin Dashboard"],
      metrics: { users: "50k+", uptime: "99.9%", performance: "95/100" },
      category: "Full Stack",
      status: "Live",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-600 via-pink-600 to-blue-600"
    },
    {
      id: 2,
      title: "Real-time Collaboration Tool",
      description: "Professional collaboration platform with real-time editing, video calls, and project management features.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Socket.io", "WebRTC", "MongoDB", "Express", "AWS"],
      features: ["Real-time Editing", "Video Conferencing", "File Sharing", "Team Analytics"],
      metrics: { users: "25k+", uptime: "99.8%", performance: "92/100" },
      category: "SaaS",
      status: "Beta",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Fintech Dashboard Analytics",
      description: "Advanced financial analytics dashboard with real-time market data, portfolio tracking, and risk assessment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "TimescaleDB", "Docker"],
      features: ["Real-time Trading", "Risk Analysis", "Portfolio Tracking", "Market Insights"],
      metrics: { users: "10k+", uptime: "99.95%", performance: "98/100" },
      category: "Fintech",
      status: "Live",
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Showcase of production-ready applications with real-world impact and cutting-edge technology stacks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isVisible }: { project: any; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        className="preserve-3d"
      >
        <Card className="glass-card overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          {/* Project Image with Overlay */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Status Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Live' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-yellow-500 text-black'
            }`}>
              {project.status}
            </div>

            {/* Category Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
              {project.category}
            </div>

            {/* Hover Overlay with Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
            >
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </motion.div>
          </div>

          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Key Features
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature: string) => (
                  <div key={feature} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.metrics.users}</div>
                  <div className="text-xs text-slate-500">Users</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-600">{project.metrics.uptime}</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">{project.metrics.performance}</div>
                  <div className="text-xs text-slate-500">Score</div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex gap-1 flex-wrap">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioShowcase;