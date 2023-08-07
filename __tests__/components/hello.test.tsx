import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { About } from '../../components/About';

test('home', () => {
    render(<About />)
    //const main = screen.getByText('Hello therre',  { exact: false })
    const main = screen.getByText(/hello/i);    
  })