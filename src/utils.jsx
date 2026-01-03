import userProfile from "./constant/constant.jsx";

const { location, phone, email } = userProfile?.profileLinks || {};

export const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

export const handleCall = () => {
  window.location.href = `tel:${phone}`;
};

export const handleOpenMail = () => {
  window.location.href = `mailto:${email}`;
};

export const handleOpenMaps = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;
  window.open(mapsUrl, "_blank");
};

export const handleNavigate = (link) => {
  if (link) {
    window.open(link, "_blank", "rel=noopener noreferrer");
  }
};
