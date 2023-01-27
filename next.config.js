const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
