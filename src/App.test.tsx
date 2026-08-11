import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import App, { type Monster } from './App';

const monsters: Monster[] = [
  { id: '1', name: 'Leanne Graham', email: 'leanne@april.biz' },
  { id: '2', name: 'Ervin Howell', email: 'ervin@melissa.tv' },
];

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response(JSON.stringify(monsters)))
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('App', () => {
  test('renders the title', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /monster rolodex/i })
    ).toBeInTheDocument();
  });

  test('renders a card for every monster it fetches', async () => {
    render(<App />);

    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });

  test('filters the monsters as you type in the search box', async () => {
    const user = userEvent.setup();
    render(<App />);

    await screen.findByText('Leanne Graham');

    await user.type(
      screen.getByPlaceholderText(/search monsters/i),
      'ervin'
    );

    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    expect(screen.queryByText('Leanne Graham')).not.toBeInTheDocument();
  });
});
