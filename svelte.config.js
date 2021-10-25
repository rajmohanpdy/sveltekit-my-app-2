/** @type {import('@sveltejs/kit').Config} */
//import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })
		// adapter: adapter({
		// 	// default options are shown
		// 	out: 'build',
		// 	precompress: false,
		// 	env: {
		// 		host: 'HOST',
		// 		port: 'PORT'
		// 	}
		// })
		adapter: adapter(), // currently the adapter does not take any options
	}
};

export default config;
