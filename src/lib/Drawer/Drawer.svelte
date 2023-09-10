<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer>
	<div class="flex flex-row content-center justify-between h-16 p-4">
		<h2 class="h2 self-center">Navigation</h2>
		<button class="btn self-center" on:click={drawerClose}>X</button>
	</div>
	<hr />
	<Navigation />
</Drawer>
