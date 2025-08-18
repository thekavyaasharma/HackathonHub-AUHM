import { motion } from "framer-motion";

export function AnimatedBackground() {
  const circles = [
    {
      id: 1,
      size: "w-[32rem] h-[32rem]",
      gradient: "from-indigo-500/15 to-purple-500/15 dark:from-indigo-400/12 dark:to-purple-400/12",
      position: "top-[-5%] left-[-15%]",
      animation: {
        y: [0, -30, 20, 0],
        x: [0, 15, -25, 0],
        rotate: [0, 180, 360],
      },
      duration: 12,
    },
    {
      id: 2,
      size: "w-[28rem] h-[28rem]",
      gradient: "from-blue-500/15 to-cyan-500/15 dark:from-blue-400/12 dark:to-cyan-400/12",
      position: "top-[50%] right-[-15%]",
      animation: {
        y: [0, 25, -20, 0],
        x: [0, -20, 30, 0],
        rotate: [360, 180, 0],
      },
      duration: 14,
    },
    {
      id: 3,
      size: "w-[24rem] h-[24rem]",
      gradient: "from-emerald-500/15 to-teal-500/15 dark:from-emerald-400/12 dark:to-teal-400/12",
      position: "top-[20%] left-[50%]",
      animation: {
        y: [0, -25, 15, 0],
        x: [0, 20, -30, 0],
        rotate: [0, -180, -360],
      },
      duration: 10,
    },
    {
      id: 4,
      size: "w-[30rem] h-[30rem]",
      gradient: "from-violet-500/15 to-pink-500/15 dark:from-violet-400/12 dark:to-pink-400/12",
      position: "bottom-[10%] left-[10%]",
      animation: {
        y: [0, 20, -25, 0],
        x: [0, -15, 35, 0],
        rotate: [0, 90, 180],
      },
      duration: 16,
    },
    {
      id: 5,
      size: "w-[20rem] h-[20rem]",
      gradient: "from-orange-500/15 to-red-500/15 dark:from-orange-400/12 dark:to-red-400/12",
      position: "bottom-[30%] right-[20%]",
      animation: {
        y: [0, -30, 25, 0],
        x: [0, 25, -20, 0],
        rotate: [180, 270, 360],
      },
      duration: 8,
    },
    {
      id: 6,
      size: "w-[26rem] h-[26rem]",
      gradient: "from-rose-500/15 to-amber-500/15 dark:from-rose-400/12 dark:to-amber-400/12",
      position: "top-[70%] left-[70%]",
      animation: {
        y: [0, 18, -22, 0],
        x: [0, -28, 12, 0],
        rotate: [0, -90, -180],
      },
      duration: 11,
    },
    {
      id: 7,
      size: "w-[22rem] h-[22rem]",
      gradient: "from-sky-500/15 to-indigo-500/15 dark:from-sky-400/12 dark:to-indigo-400/12",
      position: "bottom-[60%] right-[60%]",
      animation: {
        y: [0, -18, 28, 0],
        x: [0, 22, -18, 0],
        rotate: [360, 180, 0],
      },
      duration: 13,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-50/5 to-purple-50/5 dark:from-transparent dark:via-indigo-900/5 dark:to-purple-900/5" />
      
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className={`absolute rounded-full bg-gradient-to-br ${circle.gradient} ${circle.size} ${circle.position} blur-sm`}
          animate={circle.animation}
          transition={{
            duration: circle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
      
      {/* Animated mesh pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
