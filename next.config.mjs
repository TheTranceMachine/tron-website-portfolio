/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/v2/C5603AQH9UEDAH8S8RQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516606124765',
        search: '?e=1742428800&v=beta&t=jj36h7g94Vm0yOBv1TojbhCi3QgHkobWSbeJJ7sqqLc',
      },
    ],
  },
};

export default nextConfig;
