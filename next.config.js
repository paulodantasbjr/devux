module.exports = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  env: {
    BASE_URL: "https://www.devux.com.br",
    //BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb+srv://devux:devux@cluster0.osmxz.mongodb.net/devux?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "Dev-UX-Token-Secret",
    REFRESH_TOKEN_SECRET: "Dev-UX-RefreshToken-Secret",
  },
};
