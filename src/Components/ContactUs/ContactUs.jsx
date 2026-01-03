import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Heading from "../../SharedComponent/Heading/Heading";
import { Link } from "react-router-dom";
import { handleCall, handleOpenMail, handleOpenMaps } from "../../utils";

const ContactMe = () => {
  return (
    <div id="ContactMe" className="bg-neutral-800 text-white py-8 px-8">
      {/* Header */}
      <Heading text="Contact Me" borderHeight={"h-9"} />

      {/* Contact Info */}
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-4 mb-8">
        <div
          onClick={handleOpenMail}
          className="cursor-pointer flex items-center bg-gray-700 p-4 rounded-md min-w-max md:w-auto justify-center gap-2"
        >
          <FaEnvelope className="text-2xl" />
          <span>nilesh.document1@gmail.com</span>
        </div>
        <div
          onClick={handleCall}
          className="cursor-pointer flex items-center bg-gray-700 p-4 rounded-md min-w-max md:w-auto justify-center gap-2"
        >
          <FaPhoneAlt className="text-2xl" />
          <span>(+91) 9911148122</span>
        </div>
        <div
          onClick={handleOpenMaps}
          className="cursor-pointer flex items-center bg-gray-700 p-4 rounded-md min-w-max md:w-auto justify-center gap-2"
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span>Gurgaon, Haryana (122001)</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-2">
        <div className="border-b-2 border-yellow-400 h-3 w-full"></div>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            to={"https://www.facebook.com/nileshunique/"}
            target="_blank"
            className="text-white text-2xl"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"https://www.instagram.com/gyantocode/"}
            target="_blank"
            className="text-white text-2xl"
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/nilesh-kumar-692906236/"}
            target="_blank"
            className="text-white text-2xl"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={"https://wa.me/9911148122"}
            target="_blank"
            className="text-white text-2xl"
          >
            <FaWhatsapp />
          </Link>
        </div>
        <div className="border-b-2 border-yellow-400 h-3 w-full"></div>
      </div>
    </div>
  );
};

export default ContactMe;
