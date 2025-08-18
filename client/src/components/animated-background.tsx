import { motion } from "framer-motion";

export function AnimatedBackground() {
  const circles = [
    {
      id: 1,
      size: "w-96 h-96",
      gradient: "from-indigo-500/8 to-purple-500/8",
      position: "top-[10%] left-[-10%]",
      animation: {
        y: [0, -20, 10, 0],
        x: [0, 10, -15, 0],
      },
      duration: 6,
    },
    {
      id: 2,
      size: "w-80 h-80",
      gradient: "from-blue-500/8 to-cyan-500/8",
      position: "top-[60%] right-[-10%]",
      animation: {
        y: [0, 15, -10, 0],
        x: [0, -10, 20, 0],
      },
      duration: 8,
    },
    {
      id: 3,
      size: "w-64 h-64",
      gradient: "from-emerald-500/8 to-teal-500/8",
      position: "top-[30%] left-[60%]",
      animation: {
        y: [0, -20, 10, 0],
        x: [0, 10, -15, 0],
      },
      duration: 7,
    },
    {
      id: 4,
      size: "w-72 h-72",
      gradient: "from-violet-500/8 to-pink-500/8",
      position: "bottom-[20%] left-[20%]",
      animation: {
        y: [0, 15, -10, 0],
        x: [0, -10, 20, 0],
      },
      duration: 9,
    },
    {
      id: 5,
      size: "w-56 h-56",
      gradient: "from-orange-500/8 to-red-500/8",
      position: "bottom-[40%] right-[30%]",
      animation: {
        y: [0, -20, 10, 0],
        x: [0, 10, -15, 0],
      },
      duration: 5,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className={`absolute rounded-full bg-gradient-to-br ${circle.gradient} ${circle.size} ${circle.position}`}
          animate={circle.animation}
          transition={{
            duration: circle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}
