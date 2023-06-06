require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    SERVER: process.env.SERVER,
  },
}

module.exports = nextConfig
