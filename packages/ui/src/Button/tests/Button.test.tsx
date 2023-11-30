import '@testing-library/jest-dom';

import { describe, test, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button component rendering', () => {
  test('Renders with default classes', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByText('Click me');
    expect(button.className).toContain('btn__primary');
  });

  test('Renders with specified props and appropriate classes', () => {
    render(<Button color="secondary" size='small' variant='outlined'>Click me</Button>);
    const button = screen.getByText('Click me');

    console.log(button.className);

    expect(button.className).toContain('btn--small');
    expect(button.className).toContain('btn-outlined__secondary');
  });
});

