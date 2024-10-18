import * as React from 'react';
import { render } from '@testing-library/react-native';

import ProfileApp from './ProfileApp';

test('renders correctly', () => {
  const { getByTestId } = render(<ProfileApp />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
