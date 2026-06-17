/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set if deploying to username.github.io/repo-name (project page).
  // Leave both empty if using a custom domain or username.github.io root repo.
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
