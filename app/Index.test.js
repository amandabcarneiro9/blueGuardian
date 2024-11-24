import React from 'react';
import { render } from '@testing-library/react-native';
import Index from './Index';

describe('Index Component', () => {
	it('renders the text "BlueGuardian"', () => {
		const { getByText } = render(<Index />);
		expect(getByText('BlueGuardian')).toBeTruthy();
	});

	it('applies the correct styles', () => {
		const { getByText } = render(<Index />);
		const textElement = getByText('BlueGuardian');
		expect(textElement.parent.props.style).toEqual(
			expect.objectContaining({
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#cabfa8',
			})
		);
	});
});
