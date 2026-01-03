/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import userProfile from "../../constant/constant";
import Heading from "../../SharedComponent/Heading/Heading";
import { handleNavigate } from "../../utils";

const PortfolioGrid = () => {
  const { portfolioItems } = userProfile;

  if (!portfolioItems || portfolioItems.length === 0) return <></>;

  return (
    <motion.div
      id="Portfolio"
      className="text-white min-h-screen p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Heading text="Portfolio" borderHeight={"h-9"} />

      <div className="flex flex-col gap-12">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {index % 2 === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <ProjectImageDetail item={item} />
                <ProjectDetail item={item.projectData} index={index} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <ProjectDetail item={item.projectData} index={index} />
                <ProjectImageDetail item={item} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioGrid;

/* ================= DETAIL COMPONENT ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 🔥 step by step reveal
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectDetail = ({ item, index }) => {
  if (!item) return null;
  const even = index % 2 === 0;

  return (
    <motion.div
      className={`w-full lg:col-span-3 ${even ? "text-left" : "text-right"}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl font-bold text-yellow-400 mb-2"
        variants={itemVariants}
      >
        {item?.name}
      </motion.h3>

      {item?.role && (
        <motion.p
          className="text-sm italic text-gray-300 mb-1"
          variants={itemVariants}
        >
          Role: <span className="text-yellow-300">{item.role}</span>
        </motion.p>
      )}

      {item?.duration && (
        <motion.p
          className="text-xs text-gray-400 mb-4"
          variants={itemVariants}
        >
          📅 {item.duration}
        </motion.p>
      )}

      <motion.p
        className="text-gray-300 mb-4 leading-relaxed"
        variants={itemVariants}
      >
        {item?.description}
      </motion.p>

      {/* Tech Badges */}
      <motion.div
        className={`flex ${
          even ? "justify-start" : "justify-end"
        } flex-wrap gap-2 mb-4`}
        variants={containerVariants}
      >
        {item.tech.map((tech, i) => (
          <motion.span
            key={i}
            className="bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-full shadow-sm"
            variants={itemVariants}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Responsibilities */}
      <motion.h4
        className="text-lg underline text-yellow-300 mb-2"
        variants={itemVariants}
      >
        Responsibilities
      </motion.h4>
      <motion.ul
        className={`${
          !even ? "flex flex-col items-end" : ""
        } space-y-2 text-gray-300`}
        variants={containerVariants}
      >
        {item?.responsibilities?.map((task, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2"
            variants={itemVariants}
          >
            {even && <span className="text-yellow-400">●</span>}
            <span>{task}</span>
            {!even && <span className="text-yellow-400">●</span>}
          </motion.li>
        ))}
      </motion.ul>

      {/* Visit Button */}
      {item.link && (
        <motion.button
          onClick={() => handleNavigate(item.link)}
          className="mt-4 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-md"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Project
        </motion.button>
      )}
    </motion.div>
  );
};

/* ================= IMAGE COMPONENT ================= */
const ProjectImageDetail = ({ item }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg lg:col-span-2 shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.alt}
          className="w-full aspect-[3/2.2] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full aspect-[3/2.2] bg-gradient-to-r from-blue-400 to-blue-600"></div>
      )}

      {item.title && (
        <motion.div
          className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-6 ${
            item.image ? "opacity-0" : "opacity-100"
          } group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ opacity: item.image ? 0 : 1 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.h3
            className="text-xl font-bold mb-2 text-yellow-300"
            variants={itemVariants}
          >
            {item.title}
          </motion.h3>
          <motion.p className="text-sm mb-4" variants={itemVariants}>
            {item.description}
          </motion.p>
          {item.action && (
            <motion.button
              onClick={() => handleNavigate(item.link)}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.action}
            </motion.button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
