import { motion } from "framer-motion";
import userProfile from "../../constant/constant";
import Heading from "../../SharedComponent/Heading/Heading";
import { EachItem } from "../Experience/EachItem";

const Certificates = () => {
  const { certificates } = userProfile;

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
      {certificates && certificates.length > 0 && (
        <motion.div
          id="Certificates"
          className="bg-neutral-900 text-white py-8 px-8 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <Heading text="Certificates" borderHeight={"h-9"} />
          <div className="ml-6 space-y-10">
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <EachItem
                  title={cert.title}
                  institution={cert.institution}
                  duration={cert.duration}
                  description={cert.description}
                  image={cert.image || ""}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;

