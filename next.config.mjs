/** @type {import('next').NextConfig} */
// const path = require('path'),
const nextConfig = {
	env: {
		RESEND_TOKEN: process.env.RESEND_TOKEN,
	},
}

export default nextConfig
