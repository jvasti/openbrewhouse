<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Drawer from '$lib/Drawer/Drawer.svelte';
	import AppBar from '$lib/AppBar/AppBar.svelte';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Drawer />

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-56">
	<svelte:fragment slot="header">
		<AppBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<slot />
</AppShell>
