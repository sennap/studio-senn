/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditionally enable standalone mode for Docker deployments
  // Set OUTPUT_STANDALONE=true in Container Apps environment
  ...(process.env.OUTPUT_STANDALONE === 'true' && { output: 'standalone' }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig