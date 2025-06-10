import { motion } from "framer-motion";

const FloatingGeometry = () => {
  const shapes = [
    {
      id: 1,
      className: "w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full",
      style: { top: "10%", left: "5%" },
      duration: 6,
      delay: 0,
    },
    {
      id: 2,
      className: "w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rotate-45",
      style: { top: "20%", right: "10%" },
      duration: 8,
      delay: 2,
    },
    {
      id: 3,
      className: "w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-600/20",
      style: { 
        top: "30%", 
        left: "20%",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
      },
      duration: 10,
      delay: 4,
    },
    {
      id: 4,
      className: "w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-lg",
      style: { bottom: "20%", right: "5%" },
      duration: 7,
      delay: 1,
    },
    {
      id: 5,
      className: "w-18 h-18 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full",
      style: { bottom: "10%", left: "10%" },
      duration: 9,
      delay: 3,
    },
    {
      id: 6,
      className: "w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rotate-12",
      style: { top: "50%", right: "15%" },
      duration: 11,
      delay: 5,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.className}`}
          style={shape.style}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGeometry;
