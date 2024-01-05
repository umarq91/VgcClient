/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.unsplash.com",'res.cloudinary.com'],
    },   webpack: (config) => {
        config.module.rules.push({
          test: /\.(mp4|webm)$/,
          use: {
            loader: "file-loader",
            options: {
              publicPath: "/_next",
              name: "static/media/[name].[hash].[ext]",
            },
          },
        });
    
        return config;
      },
  };
  
  module.exports =nextConfig
  