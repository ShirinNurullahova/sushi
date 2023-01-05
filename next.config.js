module.exports = {
  images: {
    domains: [
      "flagcdn.com",
      "upload.wikimedia.org",
      "mainfacts.com",
      "picsum.photos",
      "www.imgacademy.com",
    ],
    formats: ["image/avif", "image/webp"],
  },

  headers: async () => {
    return [
      {
        source: "/:path*",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=10, stale-while-revalidate=10000",
          },
        ],
      },
    ];
  },
};
