import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../../SharedComponent/Heading/Heading";
import userProfile from "../../constant/constant";

function DevToBlogFeed() {
  const { devBlogProfileLink, blogs } = userProfile;
  const [posts, setPosts] = useState(blogs || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(devBlogProfileLink)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, [devBlogProfileLink]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          className="text-amber-400 text-xl"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading articles...
        </motion.div>
      </div>
    );
  }

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 1, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentParent = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const contentItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="Blogs" className=" text-white min-h-screen p-8">
      <Heading text="My Latest Blog" borderHeight={"h-9"} />

      <div className="container mx-auto">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.5)",
              }}
            >
              {/* Image */}
              {(post.cover_image || post.social_image) && (
                <motion.div
                  className="aspect-video overflow-hidden"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={post.cover_image || post.social_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Inner Content with staggered animation */}
              <motion.div
                className="p-6 flex flex-col gap-3"
                variants={contentParent}
              >
                {/* Title */}
                <motion.h3
                  className="text-xl font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  variants={contentItem}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {post.title}
                  </a>
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-300 line-clamp-3 leading-relaxed"
                  variants={contentItem}
                >
                  {post.description}
                </motion.p>

                {/* Metadata */}
                <motion.div
                  className="space-y-2 text-sm text-gray-400"
                  variants={contentItem}
                >
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-semibold">
                      📅 Published:
                    </span>
                    {post.readable_publish_date}
                  </p>

                  {post.tag_list && post.tag_list.length > 0 && (
                    <motion.div
                      className="flex flex-wrap gap-1 mt-3"
                      variants={contentParent}
                    >
                      {post.tag_list.map((tag, index) => (
                        <motion.span
                          key={index}
                          className="px-2 py-1 bg-amber-400 bg-opacity-20 text-amber-400 text-xs rounded-full border border-amber-400 border-opacity-30"
                          variants={contentItem}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between text-xs text-gray-500"
                  variants={contentItem}
                >
                  <span>💖 {post.public_reactions_count} reactions</span>
                  <span>💬 {post.comments_count} comments</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {posts.length === 0 && (
          <motion.div
            className="text-center text-gray-400 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl">No articles found</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default DevToBlogFeed;
