import Heading from "../../SharedComponent/Heading/Heading";
import { handleNavigate } from "../../utils";
import userProfile from "../../constant/constant";
import { motion } from "framer-motion";

function About() {
  const {
    profileImage2,
    personalDetail,
    services,
    skills,
    aboutDescription,
    mainJobRole,
  } = userProfile;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerList = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
    }),
    hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } },
  };

  return (
    <div id="About" className="text-white p-8 font-sans">
      {/* About Me Section */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Heading text="About Me" borderHeight={"h-9"} />
        </motion.div>

        <div className="flex mb-4 gap-4 flex-wrap lg:flex-nowrap">
          {/* Profile Image */}
          <motion.div
            className="rounded-lg mx-auto max-w-md overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img
              src={profileImage2}
              alt="Nilesh Kumar"
              className="rounded-lg relative"
            />
          </motion.div>

          {/* Text and Details */}
          <div className="flex-1 flex flex-col justify-center sm:min-w-[400px]">
            {mainJobRole && (
              <motion.div
                className="flex"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <div className="w-1 bg-yellow-400 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  I’m a<span className="text-yellow-400"> {mainJobRole} </span>
                  {aboutDescription}
                </p>
              </motion.div>
            )}

            {personalDetail.length > 0 && (
              <motion.div
                className="text-gray-100 p-6"
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ul className="space-y-3">
                  {personalDetail.map((item, index) => (
                    <motion.li key={index} className="flex" variants={listItem}>
                      <span className="min-w-24 md:min-w-48 font-semibold text-gray-400">
                        {item.title}
                      </span>
                      <span>: {item.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading text="Service" borderHeight={"h-9"} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900 p-4 rounded-lg flex flex-col gap-2 items-center justify-center border border-solid border-neutral-700"
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div
                  className={`text-4xl mb-2 ${service.color} rounded-md p-2`}
                >
                  {service.type === "image" ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-16 p-1"
                    />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-400 text-justify">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skills?.length > 0 && (
        <section>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading text="My Skills" borderHeight={"h-9"} />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                onClick={() => handleNavigate(skill.link)}
                className="cursor-pointer bg-neutral-900 p-4 rounded-lg flex flex-col items-center justify-center border border-solid border-neutral-700"
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div
                  className={`text-4xl mb-2 ${skill.color} rounded-full p-2`}
                >
                  {skill.type === "image" ? (
                    <img src={skill.icon} alt={skill.name} className="h-6" />
                  ) : (
                    skill.icon
                  )}
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default About;
