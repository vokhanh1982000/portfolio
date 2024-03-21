module.exports = {
  // Other Next.js configurations...

  // Configure static HTML export
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      // Define other pages here
    };
  },
};
