import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to accept HMR / asset requests from devices on the
  // local network (e.g. testing on a phone over Wi-Fi). Without this, HMR
  // is blocked for any host that isn't `localhost`, so updates from the
  // editor never reach the device.
  allowedDevOrigins: [
    "172.20.10.5",
    "*.local",
    "*.lan",
  ],
};

export default nextConfig;
