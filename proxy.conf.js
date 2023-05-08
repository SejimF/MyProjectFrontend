const PROXY_CONFIG = [
  {
    context: [
      "/graphql/",
      "/static/",
    ],
    // Локальная разработка
    target: "http://localhost:8000",
    secure: false,
    changeOrigin: true,
    ws: true,
  },
];

module.exports = PROXY_CONFIG;
