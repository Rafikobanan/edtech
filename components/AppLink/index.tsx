import Link, { LinkProps } from 'next/link';
import React from 'react';

// @ts-ignore
export interface AppLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: LinkProps['href'];
}

// for global next link configs
const AppLink = ({ href, ...rest }: AppLinkProps) => (
  <Link href={href}>
    <a {...rest} />
  </Link>
);

export default AppLink;
