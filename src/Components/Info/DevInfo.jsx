import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "../../SharedComponent/Typewriter/Typewriter";
import { handleCall, scrollToSection } from "../../utils";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import userProfile from "./../../constant/constant.jsx";

function DevInfo() {
  const {
    profileName,
    typeWriterTexts,
    description,
    profileImage,
    profileLinks,
  } = userProfile;
  const { facebook, linkedin, whatsapp, phone } = profileLinks || {};

  // Variants
  const letterVariant = {
    hidden: { opacity: 0, y: 50, rotate: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
  };

  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const radialIcons = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 150 },
    }),
  };

  const breathingButton = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div
      id="Home"
      className="text-white min-h-screen shadow-xl mt-8 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <main className="relative z-10 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-8 md:py-14">
        {/* Left Section */}
        <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left">
          {/* Split Heading Animation */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-wrap justify-center md:justify-start">
            {"I'M "}
            {profileName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-yellow-500 inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Typewriter with blur entrance */}
          <motion.div
            className="text-xl mb-6 flex"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typewriter
              texts={typeWriterTexts}
              speed={100}
              delayBetweenTexts={1000}
            />
          </motion.div>

          {/* Description with sentence slide-in */}
          <div className="mb-4 space-y-2">
            {description.split(". ").map((sentence, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                {sentence}.
              </motion.p>
            ))}
          </div>

          {/* Breathing Button */}
          <motion.button
            className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-600"
            onClick={() => scrollToSection("ContactMe")}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            animate={breathingButton.animate}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.button>
        </div>

        {/* Right Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={floatAnim}
          animate="animate"
        >
          {profileImage && (
            <motion.div
              className="rounded-lg w-auto border border-neutral-700 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={profileImage}
                alt={profileName}
                className="rounded-lg w-auto md:w-auto hover:drop-shadow-border relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}

          {/* Social Icons with radial burst + float loop */}
          <div className="absolute right-0 bottom-0 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 bg-gray-800 p-2 rounded-tl-lg">
            {[facebook, linkedin, phone, whatsapp].map(
              (link, i) =>
                link && (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={radialIcons}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.2, y: -5 }}
                    viewport={{ once: true }}
                    className="text-[1.65rem]"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {i === 0 && (
                      <Link to={facebook} target="_blank">
                        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
                      </Link>
                    )}
                    {i === 1 && (
                      <Link to={linkedin} target="_blank">
                        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
                      </Link>
                    )}
                    {i === 2 && (
                      <div onClick={handleCall}>
                        <FaPhoneAlt className="text-gray-400 hover:text-white cursor-pointer" />
                      </div>
                    )}
                    {i === 3 && (
                      <Link to={whatsapp} target="_blank">
                        <BsWhatsapp className="text-gray-400 hover:text-white cursor-pointer" />
                      </Link>
                    )}
                  </motion.div>
                )
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default DevInfo;
