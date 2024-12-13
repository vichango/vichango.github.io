import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || "http://localhost:4321",
	integrations: [
		starlight({
			title: 'Vichango',
			social: {
				github: 'https://github.com/vichango',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{
							label: 'A beat counter',
							slug: 'guides/a-beat-counter',
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
