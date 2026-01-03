import { motion } from "framer-motion";

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
  pulse: {
    scale: [1, 1.2, 1],
    boxShadow: [
      "0 0 0px rgba(251, 191, 36, 0.7)",
      "0 0 12px rgba(251, 191, 36, 0.9)",
      "0 0 0px rgba(251, 191, 36, 0.7)",
    ],
    transition: { repeat: Infinity, duration: 2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const descParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const descWord = {
  hidden: { opacity: 0, y: 1 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
  hover: { scale: 1.05, rotate: 1 },
};

export const EachItem = ({
  title,
  institution,
  duration,
  description,
  image,
}) => {
  return (
    <div className="flex justify-between flex-row flex-wrap md:flex-nowrap relative">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 border-l-2 border-yellow-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />

      {/* Timeline Dot */}
      <motion.div
        className="absolute -left-[0.48rem] mt-2 bg-yellow-400 w-4 h-4 rounded-full drop-shadow-glow-yellow"
        initial="hidden"
        whileInView={["visible", "pulse"]}
        viewport={{ once: true }}
        variants={dotVariants}
      />

      {/* Text Content */}
      <div className="flex flex-col ml-8">
        <motion.h3
          className="text-xl font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          {institution}
        </motion.p>

        <div className="pl-4 mt-2">
          {duration && (
            <motion.p
              className="text-gray-400 mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              {duration}
            </motion.p>
          )}

          {description && (
            <motion.p
              className="text-gray-300 flex flex-wrap -gap-1"
              variants={descParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {description.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-1 inline-block"
                  variants={descWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          )}
        </div>
      </div>

      {/* Right Image */}
      {image && (
        <motion.div
          className="flex-shrink-0 ml-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt={title}
            className="h-44 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};
