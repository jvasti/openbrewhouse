<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import AvatarIcon from '../AvatarIcon/AvatarIcon.svelte';

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
			<span>
				<svg viewBox="0 0 100 75" class="fill-token w-5 h-5">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
				</svg>
			</span>
		</button>
		<strong class="text-xl uppercase">Openbrewhouse</strong>
	</svelte:fragment>

	<svelte:fragment slot="trail"><AvatarIcon /></svelte:fragment>
</AppBar>
