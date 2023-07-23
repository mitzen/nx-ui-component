// import React from 'react';
// import { Key, ReactElement, ReactNode } from 'react';

// type InternalLinkProps = {
//     /**
//      * The path or URL to navigate to. It can also be an object.
//      *
//      * @example https://nextjs.org/docs/api-reference/next/link#with-url-object
//      */
//     href: string;
//     /**
//      * Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).
//      */
//     as?: string;
//     /**
//      * Replace the current `history` state instead of adding a new url into the stack.
//      *
//      * @defaultValue `false`
//      */
//     replace?: boolean;
//     /**
//      * Whether to override the default scroll behavior
//      *
//      * @example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page
//      *
//      * @defaultValue `true`
//      */
//     scroll?: boolean;
// }

// declare const MyLink: React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> & InternalLinkProps & {
// children?: React.ReactNode;
// } & React.RefAttributes<HTMLAnchorElement>>;

// export default MyLink

// export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//     startIcon?: React.ReactNode;
//     //write other extra props here...
// }



// const Button = ({ startIcon, children, ...props }: ButtonProps) => {
//     //render the button
//     return (
//       <button {...props} className="btn gap-2">
//         {startIcon}
//         {children}
//       </button>
//     );
//   };
  
//   export default Button;
// const MyButton = ({ startIcon, children, ...props }: ButtonProps) => {
//     //render the button
//     return (<button> </button>)
//  };
  
//   export default MyButton;

import type { ComponentPropsWithoutRef } from 'react';

interface InputGroupProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export function InputGroup({ label, ...rest }: InputGroupProps) {
    return (<label>{label}<input {...rest} /></label>);
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
}

export function MyButton({ label, ...rest }: ButtonProps) {
    return (<button><button {...rest} /></button>);
}


