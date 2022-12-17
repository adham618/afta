/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");



const nextConfig = {
eslint: {
dirs: ["src"],
},
trailingSlash: true,
sassOptions: {
includePaths: [path.join(__dirname, "styles")],
},
reactStrictMode: false,
swcMinify: true,



// Uncoment to add domain whitelist
// images: {
// domains: [
// 'res.cloudinary.com',
// ],
// },



// SVGR
webpack(config) {
config.module.rules.push({
test: /\.svg$/i,
issuer: /\.[jt]sx?$/,
use: [
{
loader: "@svgr/webpack",
options: {
typescript: true,
icon: true,
},
},
],
});



return config;
},
};



module.exports = nextConfig;