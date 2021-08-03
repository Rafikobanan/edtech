import Link, { LinkProps } from 'next/link';
import React from 'react';

type AppLinkProps = React.PropsWithChildren<LinkProps>;

// for global next link configs
const AppLink = (props: AppLinkProps) => <Link {...props} />;

export default AppLink;
