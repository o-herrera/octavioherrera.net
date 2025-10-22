import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Octavio Herrera',
	favicon: 'favicon.ico',
	owner: 'Octavio Herrera',
	profileImage: 'octavio herrera en su taller Evry 2007_edited.jpg',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/octavioeherrera/',
			icon: Instagram,
		} as SocialLink,
	],
};
