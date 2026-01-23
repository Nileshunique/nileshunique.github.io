import React, { useState } from "react";

const Blogs = () => {
  const [articles] = useState(articlesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags
  const allTags = [
    ...new Set(articles.flatMap((article) => article.tag_list)),
  ].filter(Boolean);

  // Filter articles based on search term and selected tag
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "" ||
      (article.tag_list && article.tag_list.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-11 min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search and filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-black text-white overflow-hidden shadow rounded-lg flex flex-col h-full"
            >
              {article.cover_image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4 flex-grow">
                <div className="flex items-center mb-4">
                  <img
                    src={article.user.profile_image_90}
                    alt={article.user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium">{article.user.name}</p>
                    <p className="text-xs text-gray-400">
                      {article.readable_publish_date}
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tag_list &&
                    article.tag_list.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-black text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 text-black text-sm flex justify-between items-center bg-gray-50">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 text-red-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.public_reactions_count}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-1.008c-.568.381-1.615.924-2.53.924-.522 0-.98-.135-1.324-.396-.348-.267-.598-.658-.598-1.146 0-.342.134-.647.286-.86A6.908 6.908 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.comments_count}
                  </span>
                </div>
                <span>{article.reading_time_minutes} min read</span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center pt-24">
            <p className="text-xl text-white">
              No articles found matching your search criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blogs;

const articlesData = [
  {
    type_of: "article",
    id: 2281596,
    title: "How to Create Custom Aliases in Vite for Cleaner Imports",
    description:
      "Tired of messy import paths in your React project? Learn how to simplify your code with custom...",
    readable_publish_date: "Feb 16",
    slug: "how-to-create-custom-aliases-in-vite-for-cleaner-imports-20pk",
    path: "/nileshcodehub/how-to-create-custom-aliases-in-vite-for-cleaner-imports-20pk",
    url: "https://dev.to/nileshcodehub/how-to-create-custom-aliases-in-vite-for-cleaner-imports-20pk",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2025-02-16T03:34:22Z",
    language: "en",
    subforem_id: 1,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft525vwu5yah9psjahm1k.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft525vwu5yah9psjahm1k.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-create-custom-aliases-in-vite-for-cleaner-imports-20pk",
    created_at: "2025-02-16T03:14:27Z",
    edited_at: "2025-03-07T20:26:21Z",
    crossposted_at: null,
    published_at: "2025-02-16T03:34:22Z",
    last_comment_at: "2025-02-16T03:34:22Z",
    reading_time_minutes: 3,
    tag_list: ["react", "nileshcodehub", "programming", "vite"],
    tags: "react, nileshcodehub, programming, vite",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2264839,
    title: "Without JWT Library Decode and Verify a JWT Token in JavaScript",
    description:
      "Description   JSON Web Tokens (JWT) are widely used for authentication, but just decoding...",
    readable_publish_date: "Feb 7",
    slug: "without-jwt-library-decode-and-verify-a-jwt-token-in-javascript-17mk",
    path: "/nileshcodehub/without-jwt-library-decode-and-verify-a-jwt-token-in-javascript-17mk",
    url: "https://dev.to/nileshcodehub/without-jwt-library-decode-and-verify-a-jwt-token-in-javascript-17mk",
    comments_count: 0,
    public_reactions_count: 1,
    collection_id: null,
    published_timestamp: "2025-02-07T17:36:57Z",
    language: "en",
    subforem_id: 1,
    positive_reactions_count: 1,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0vwqxgnxjwj0lzxjwem5.jpg",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0vwqxgnxjwj0lzxjwem5.jpg",
    canonical_url:
      "https://dev.to/nileshcodehub/without-jwt-library-decode-and-verify-a-jwt-token-in-javascript-17mk",
    created_at: "2025-02-07T17:36:10Z",
    edited_at: "2025-03-07T20:27:36Z",
    crossposted_at: null,
    published_at: "2025-02-07T17:36:57Z",
    last_comment_at: "2025-02-07T17:36:57Z",
    reading_time_minutes: 3,
    tag_list: [],
    tags: "",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2241242,
    title: "Learning Node.js with Express.js: A Day-by-Day Guide",
    description:
      "Learning Node.js with Express.js: A Day-by-Day Guide   This document outlines a detailed...",
    readable_publish_date: "Jan 26",
    slug: "learning-nodejs-with-expressjs-a-day-by-day-guide-3ope",
    path: "/nileshcodehub/learning-nodejs-with-expressjs-a-day-by-day-guide-3ope",
    url: "https://dev.to/nileshcodehub/learning-nodejs-with-expressjs-a-day-by-day-guide-3ope",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2025-01-26T06:49:22Z",
    language: "en",
    subforem_id: 1,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbcgo1mkhqshguoamqvb6.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbcgo1mkhqshguoamqvb6.png",
    canonical_url:
      "https://dev.to/nileshcodehub/learning-nodejs-with-expressjs-a-day-by-day-guide-3ope",
    created_at: "2025-01-26T06:48:37Z",
    edited_at: "2025-03-07T21:50:53Z",
    crossposted_at: null,
    published_at: "2025-01-26T06:49:22Z",
    last_comment_at: "2025-01-26T06:49:22Z",
    reading_time_minutes: 4,
    tag_list: ["tutorial", "node", "express", "nileshcodehub"],
    tags: "tutorial, node, express, nileshcodehub",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2156482,
    title: "How to Search Amazon Products Using Node.js and Amazon PA-API",
    description:
      "Description   Learn how to set up and use the Amazon Product Advertising API (PA-API) in a...",
    readable_publish_date: "Dec 17 '24",
    slug: "how-to-search-amazon-products-using-nodejs-and-amazon-pa-api-2g65",
    path: "/nileshcodehub/how-to-search-amazon-products-using-nodejs-and-amazon-pa-api-2g65",
    url: "https://dev.to/nileshcodehub/how-to-search-amazon-products-using-nodejs-and-amazon-pa-api-2g65",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2024-12-17T18:10:44Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff4ihtbljwu68rhotp7cd.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff4ihtbljwu68rhotp7cd.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-search-amazon-products-using-nodejs-and-amazon-pa-api-2g65",
    created_at: "2024-12-14T12:08:41Z",
    edited_at: "2025-03-07T21:54:37Z",
    crossposted_at: null,
    published_at: "2024-12-17T18:10:44Z",
    last_comment_at: "2024-12-17T18:10:44Z",
    reading_time_minutes: 3,
    tag_list: [
      "amazonapi",
      "affiliatemarketing",
      "amazonproducts",
      "nodejsdevelopment",
    ],
    tags: "amazonapi, affiliatemarketing, amazonproducts, nodejsdevelopment",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2156378,
    title: "How to Record and Upload Your Voice Using React Native! 🎙️✨",
    description:
      "Have you ever thought, “What if I could record my voice and send it to an app to turn it into text?”...",
    readable_publish_date: "Dec 14 '24",
    slug: "how-to-record-and-upload-your-voice-using-react-native-b6e",
    path: "/nileshcodehub/how-to-record-and-upload-your-voice-using-react-native-b6e",
    url: "https://dev.to/nileshcodehub/how-to-record-and-upload-your-voice-using-react-native-b6e",
    comments_count: 1,
    public_reactions_count: 3,
    collection_id: null,
    published_timestamp: "2024-12-14T11:29:21Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 3,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuwfiy5yhrcybspayvm09.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuwfiy5yhrcybspayvm09.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-record-and-upload-your-voice-using-react-native-b6e",
    created_at: "2024-12-14T11:03:05Z",
    edited_at: "2025-03-07T20:31:26Z",
    crossposted_at: null,
    published_at: "2024-12-14T11:29:21Z",
    last_comment_at: "2024-12-16T23:43:43Z",
    reading_time_minutes: 4,
    tag_list: [
      "reactnative",
      "voicerecorderapp",
      "speechtotext",
      "nileshcodehub",
    ],
    tags: "reactnative, voicerecorderapp, speechtotext, nileshcodehub",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2106750,
    title: "Download base64 Audio Files in React in Two Ways",
    description:
      "Introduction   In modern web development, audio files are commonly used for many features...",
    readable_publish_date: "Nov 16 '24",
    slug: "download-base64-audio-files-in-react-in-two-ways-28pl",
    path: "/nileshcodehub/download-base64-audio-files-in-react-in-two-ways-28pl",
    url: "https://dev.to/nileshcodehub/download-base64-audio-files-in-react-in-two-ways-28pl",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2024-11-16T11:21:42Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4m7ep02af5k74b2mhisk.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4m7ep02af5k74b2mhisk.png",
    canonical_url:
      "https://dev.to/nileshcodehub/download-base64-audio-files-in-react-in-two-ways-28pl",
    created_at: "2024-11-16T07:02:59Z",
    edited_at: "2025-03-07T20:32:46Z",
    crossposted_at: null,
    published_at: "2024-11-16T11:21:42Z",
    last_comment_at: "2024-11-16T11:21:42Z",
    reading_time_minutes: 3,
    tag_list: [],
    tags: "",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2104596,
    title: "How to Cancel API Calls in React with Axios: A Step-by-Step Guide",
    description:
      "Learn how to manage multiple API calls in React by canceling previous requests with Axios. This guide...",
    readable_publish_date: "Nov 14 '24",
    slug: "how-to-cancel-api-calls-in-react-with-axios-a-step-by-step-guide-41b6",
    path: "/nileshcodehub/how-to-cancel-api-calls-in-react-with-axios-a-step-by-step-guide-41b6",
    url: "https://dev.to/nileshcodehub/how-to-cancel-api-calls-in-react-with-axios-a-step-by-step-guide-41b6",
    comments_count: 1,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2024-11-14T18:31:54Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7fqpm0pwmn3biggx6uyl.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7fqpm0pwmn3biggx6uyl.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-cancel-api-calls-in-react-with-axios-a-step-by-step-guide-41b6",
    created_at: "2024-11-14T18:10:50Z",
    edited_at: "2025-03-07T21:57:45Z",
    crossposted_at: null,
    published_at: "2024-11-14T18:31:54Z",
    last_comment_at: "2025-03-05T20:58:48Z",
    reading_time_minutes: 4,
    tag_list: [],
    tags: "",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2090493,
    title: "How To Logout User From All Tabs At Once In React",
    description:
      "In many React applications, it's common to track changes to state or localStorage values across...",
    readable_publish_date: "Nov 9 '24",
    slug: "how-to-track-localstorage-update-in-different-tabs-and-same-tab-3f30",
    path: "/nileshcodehub/how-to-track-localstorage-update-in-different-tabs-and-same-tab-3f30",
    url: "https://dev.to/nileshcodehub/how-to-track-localstorage-update-in-different-tabs-and-same-tab-3f30",
    comments_count: 0,
    public_reactions_count: 5,
    collection_id: null,
    published_timestamp: "2024-11-09T18:04:54Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 5,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw42fg9ahgp5613wfzxzn.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw42fg9ahgp5613wfzxzn.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-track-localstorage-update-in-different-tabs-and-same-tab-3f30",
    created_at: "2024-11-09T17:46:32Z",
    edited_at: "2025-03-07T20:35:09Z",
    crossposted_at: null,
    published_at: "2024-11-09T18:04:54Z",
    last_comment_at: "2024-11-09T18:04:54Z",
    reading_time_minutes: 4,
    tag_list: ["nileshcodehub", "webdev", "programming", "react"],
    tags: "nileshcodehub, webdev, programming, react",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2086870,
    title: "How to Track User Inactivity on Your Website and Why It Matters",
    description:
      "In today’s web applications, ensuring that users remain active while maintaining good user experience...",
    readable_publish_date: "Nov 8 '24",
    slug: "how-to-track-user-inactivity-on-your-website-and-why-it-matters-2b7h",
    path: "/nileshcodehub/how-to-track-user-inactivity-on-your-website-and-why-it-matters-2b7h",
    url: "https://dev.to/nileshcodehub/how-to-track-user-inactivity-on-your-website-and-why-it-matters-2b7h",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2024-11-08T14:54:37Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 0,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa39m2m1v1xqbbgfhogcb.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa39m2m1v1xqbbgfhogcb.png",
    canonical_url:
      "https://dev.to/nileshcodehub/how-to-track-user-inactivity-on-your-website-and-why-it-matters-2b7h",
    created_at: "2024-11-08T13:43:23Z",
    edited_at: "2025-03-07T22:00:12Z",
    crossposted_at: null,
    published_at: "2024-11-08T14:54:37Z",
    last_comment_at: "2024-11-08T14:54:37Z",
    reading_time_minutes: 6,
    tag_list: ["nileshcodehub", "userinactive", "react", "webdev"],
    tags: "nileshcodehub, userinactive, react, webdev",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2083613,
    title: "Building a Custom Audio Player in React: A Step-by-Step Guide",
    description:
      "Introduction: In this blog, we’re building a simple yet powerful audio player component in React....",
    readable_publish_date: "Nov 7 '24",
    slug: "building-a-custom-audio-player-in-react-a-step-by-step-guide-25d0",
    path: "/nileshcodehub/building-a-custom-audio-player-in-react-a-step-by-step-guide-25d0",
    url: "https://dev.to/nileshcodehub/building-a-custom-audio-player-in-react-a-step-by-step-guide-25d0",
    comments_count: 0,
    public_reactions_count: 5,
    collection_id: null,
    published_timestamp: "2024-11-07T09:14:30Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 5,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flqbm4po5ztzr7xhslix1.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flqbm4po5ztzr7xhslix1.png",
    canonical_url:
      "https://dev.to/nileshcodehub/building-a-custom-audio-player-in-react-a-step-by-step-guide-25d0",
    created_at: "2024-11-07T09:14:31Z",
    edited_at: "2025-03-07T22:04:19Z",
    crossposted_at: null,
    published_at: "2024-11-07T09:14:30Z",
    last_comment_at: "2024-11-07T09:14:30Z",
    reading_time_minutes: 4,
    tag_list: ["nileshcodehub", "audioplayer", "customaudioplayer", "react"],
    tags: "nileshcodehub, audioplayer, customaudioplayer, react",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
  {
    type_of: "article",
    id: 2083149,
    title:
      "Mastering JavaScript Objects: Comparison, Manipulation, and Control Techniques",
    description:
      "JavaScript objects are incredibly powerful and versatile. They allow us to store complex data and...",
    readable_publish_date: "Nov 7 '24",
    slug: "mastering-javascript-objects-comparison-manipulation-and-control-techniques-g53",
    path: "/nileshcodehub/mastering-javascript-objects-comparison-manipulation-and-control-techniques-g53",
    url: "https://dev.to/nileshcodehub/mastering-javascript-objects-comparison-manipulation-and-control-techniques-g53",
    comments_count: 0,
    public_reactions_count: 1,
    collection_id: null,
    published_timestamp: "2024-11-07T08:03:48Z",
    language: "en",
    subforem_id: null,
    positive_reactions_count: 1,
    cover_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe0qsg1ehc5qk4npwqw4t.png",
    social_image:
      "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe0qsg1ehc5qk4npwqw4t.png",
    canonical_url:
      "https://dev.to/nileshcodehub/mastering-javascript-objects-comparison-manipulation-and-control-techniques-g53",
    created_at: "2024-11-07T07:54:43Z",
    edited_at: "2025-03-07T22:06:38Z",
    crossposted_at: null,
    published_at: "2024-11-07T08:03:48Z",
    last_comment_at: "2024-11-07T08:03:48Z",
    reading_time_minutes: 2,
    tag_list: ["nileshcodehub", "javascript", "webdev", "development"],
    tags: "nileshcodehub, javascript, webdev, development",
    user: {
      name: "Nilesh Kumar",
      username: "nileshcodehub",
      twitter_username: null,
      github_username: null,
      user_id: 2024246,
      website_url: null,
      profile_image:
        "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
      profile_image_90:
        "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2024246%2F3f0e0721-1d16-4a62-b72d-65dffc3366a3.png",
    },
  },
];
