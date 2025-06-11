import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@/lib/types.ts";

const BlogSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  // Fallback blog posts for demo
  const fallbackPosts = [
    {
      id: 1,
      title: "Advanced React Hooks: Custom Hooks for Complex State Management",
      slug: "advanced-react-hooks",
      excerpt: "Learn how to create powerful custom hooks that simplify complex state logic and make your React components more maintainable...",
      content: "",
      category: "React",
      tags: ["React", "Hooks"],
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      published: true,
      readTime: 5,
      createdAt: new Date("2023-12-15"),
      updatedAt: new Date("2023-12-15"),
    },
    {
      id: 2,
      title: "Node.js Performance Optimization: From Basics to Advanced Techniques",
      slug: "nodejs-performance-optimization",
      excerpt: "Comprehensive guide to optimizing Node.js applications for production, covering caching, clustering, and memory management...",
      content: "",
      category: "Node.js",
      tags: ["Node.js", "Performance"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      published: true,
      readTime: 7,
      createdAt: new Date("2023-12-12"),
      updatedAt: new Date("2023-12-12"),
    },
    {
      id: 3,
      title: "NextJS 14: New Features and Migration Best Practices",
      slug: "nextjs-14-features",
      excerpt: "Exploring the latest features in NextJS 14 and practical strategies for upgrading your existing applications...",
      content: "",
      category: "NextJS",
      tags: ["NextJS", "Migration"],
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      published: true,
      readTime: 6,
      createdAt: new Date("2023-12-10"),
      updatedAt: new Date("2023-12-10"),
    },
  ];

  const postsToShow = blogPosts.length > 0 ? blogPosts.slice(0, 3) : fallbackPosts;

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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-600",
      "Node.js": "bg-emerald-600",
      NextJS: "bg-purple-600",
      JavaScript: "bg-yellow-600",
      TypeScript: "bg-blue-700",
    };
    return colors[category] || "bg-gray-600";
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 relative" ref={ref}>
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
            Latest <span className="text-blue-600 dark:text-blue-400">Blog Posts</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Sharing insights about web development, technology trends, and programming best practices
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="glass-card shadow-lg">
                <div className="animate-pulse">
                  <div className="w-full h-48 bg-slate-300 dark:bg-slate-700"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-3/4 mb-3"></div>
                    <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded mb-3"></div>
                    <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-2/3 mb-4"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                      <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-20"></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {postsToShow.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group blog-card glass-card shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.imageUrl || `https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300`}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.createdAt)}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
