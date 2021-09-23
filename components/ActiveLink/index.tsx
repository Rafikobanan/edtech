import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import AppLink, { AppLinkProps } from 'components/AppLink';

interface ActiveLinkProps extends AppLinkProps {
  activeClassName: string;
}

const ActiveLink = ({ children, className, activeClassName, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === rest.href || asPath === rest.as;

  return (
    <AppLink {...rest} className={cn(className, { [activeClassName]: isActive })}>
      {children}
    </AppLink>
  );
};

export default ActiveLink;
