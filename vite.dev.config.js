import vue from '@vitejs/plugin-vue'
// import fs from 'fs'

// const options = {
// 	key: fs.readFileSync('./openpharma.dev-key.pem'),
// 	cert: fs.readFileSync('./openpharma.dev.pem')
// }

export default {
	clearScreen: false,
	server: {
		// https: options,
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				// target: 'https://127.0.0.1:3443',
				changeOrigin: false
			}
		}
	},
	plugins: [
		vue(),
	]
}