/// <reference lib="dom" />
// // NavDrawer.test.ts
import { render, fireEvent, screen } from '@testing-library/svelte';
import Navigation from './Navigation.svelte';
import { describe, it, expect, vi } from 'vitest';

const options = new Map();
const mockDrawerService = {
	close: vi.fn(() => {})
};

options.set('drawerStore', mockDrawerService);
const { getByText } = render<Navigation>(Navigation, { context: options });

describe('Navigation Component', () => {
	it('renders the links correctly', () => {
		expect(screen.getByText('About')).toBeInTheDocument();
	});

	it('calls drawerClose on link click', async () => {
		await fireEvent.click(getByText('Home'));
		expect(mockDrawerService.close).toHaveBeenCalledTimes(1);

		await fireEvent.click(getByText('About'));
		expect(mockDrawerService.close).toHaveBeenCalledTimes(2);
	});
});
