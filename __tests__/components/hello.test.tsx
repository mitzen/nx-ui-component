import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { About } from '../../components/hello';

test('home', () => {
    render(<About />)
    //const main = screen.getByText('Hello therre',  { exact: false })
    const main = screen.getByText(/hello/i)

    //console.log(main);
    //const hello = main.getByText(/main)
    //expect(hello).contain("Home")
    // expect(
    //   main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })
    // ).toBeDefined()
  
    // const footer = within(screen.getByRole('contentinfo'))
    // const link = within(footer.getByRole('link'))
    // expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined()
  })