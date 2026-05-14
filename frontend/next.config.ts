import type { NextConfig } from "next"
const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.igai-fez.com" }],
  },
}
export default nextConfig
