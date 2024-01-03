// App.test.js

import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app component', async () => {
  render(<App />);
  await waitFor(() => {
    const appComponent = screen.getByTestId('app-component');
    expect(appComponent).toBeInTheDocument();
  });
});

test('renders header text', async () => {
  render(<App />);
  await waitFor(() => {
    const headerElement = screen.getByText(/welcome to my react app/i);
    expect(headerElement).toBeInTheDocument();
  });
});

test('renders footer text', async () => {
  render(<App />);
  await waitFor(() => {
    const footerElement = screen.getByText(/copyright © 2022/i);
    expect(footerElement).toBeInTheDocument();
  });
});
