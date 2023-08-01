import type { SSTConfig } from 'sst';
import { SvelteKitSite } from 'sst/constructs';

export default {
	config() {
		return {
			name: 'openbrewhouse',
			region: 'eu-north-1',
			profile: 'openbrewhouse-dev'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site');
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
