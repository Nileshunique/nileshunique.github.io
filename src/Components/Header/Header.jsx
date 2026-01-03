import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./../../assets/images/nkLogo.webp";
import { scrollToSection } from "../../utils";
import resume from "./../../assets/Resume/Nilesh_Resume.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  const links = [
    { id: "About", label: "About" },
    { id: "Experience", label: "Experience" },
    { id: "Certificates", label: "Certificates" },
    { id: "Portfolio", label: "Portfolio" },
    { id: "Blogs", label: "Blogs" },
    { id: "ContactMe", label: "Contact" },
    { id: "Resume", label: "Resume", link: resume },
  ];

  useEffect(() => {
    // Trigger animation after mount
    setLinksVisible(true);
  }, []);

  const linkAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-8 fixed top-0 right-0 left-0 !z-50">
      <motion.header
        className="bg-neutral-800 z-50 w-full p-0 flex justify-between items-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          onClick={() => scrollToSection("Home")}
          className="text-2xl font-bold text-yellow-500 py-2 px-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <img src={Logo} alt="logo" className="w-14 h-10 cursor-pointer" />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:block rounded-bl-full h-full bg-red-700 py-4 pl-20 pr-10">
          <ul className="md:flex md:space-x-4 space-y-2 md:space-y-0">
            {links.map((link, index) => (
              <motion.li
                key={link.id}
                initial="hidden"
                animate={linksVisible ? "visible" : "hidden"}
                variants={linkAnimation}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "#facc15",
                    textDecoration: "underline",
                  }}
                  className="cursor-pointer"
                  onClick={() => !link.link && scrollToSection(link.id)}
                >
                  {link.link ? (
                    <a
                      className="hover:text-yellow-500 hover:underline"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    link.label
                  )}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden pr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed w-full bg-gray-700 p-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col space-y-3">
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      color: "#facc15",
                      textDecoration: "underline",
                    }}
                    className="cursor-pointer"
                    onClick={() => {
                      !link.link && scrollToSection(link.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      link.label
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
