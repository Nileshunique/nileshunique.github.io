import { motion } from "framer-motion";
import userProfile from "../../constant/constant.jsx";
import Heading from "../../SharedComponent/Heading/Heading";
import { EachItem } from "./EachItem";

const Experience = () => {
  const { education, experience } = userProfile;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section>
      {experience.length > 0 && (
        <motion.div
          id="Experience"
          className="bg-neutral-900 text-white py-8 px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <Heading text="Experience" borderHeight={"h-9"} />
          <div className="ml-6 space-y-10">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <EachItem
                  title={exp.title}
                  institution={exp.company}
                  duration={exp.duration}
                  description={exp.description}
                  image={exp.image || ""}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {education.length > 0 && (
        <motion.div
          className="bg-neutral-900 text-white py-8 px-8 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <Heading text="Education" borderHeight={"h-9"} />
          <div className="ml-6 space-y-10">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <EachItem
                  title={edu.title}
                  institution={edu.institution}
                  duration={edu.duration}
                  description={edu.description}
                  image={edu.image || ""}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;

