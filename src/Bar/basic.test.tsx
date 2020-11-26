import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Basic from './basic';
test('test-basic', () => {
  render(<Basic />);
  expect(screen.getByText('First Demo')).toBeTruthy();
});
