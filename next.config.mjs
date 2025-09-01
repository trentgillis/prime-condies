import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(path.dirname(fileURLToPath(import.meta.url))),
  },
};

export default nextConfig;
