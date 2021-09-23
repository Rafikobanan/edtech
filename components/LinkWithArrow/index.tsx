import React from 'react';
import cn from 'classnames';
import LinkArrowSvg from 'assets/link-arrow.svg';
import AppLink, { AppLinkProps } from 'components/AppLink';
import styles from './styles.module.scss';

type LinkWithArrowProps = AppLinkProps;

// for global next link configs
const LinkWithArrow = ({ children, className, ...rest }: LinkWithArrowProps) => (
  <AppLink {...rest} className={cn(styles.link, className)}>
    {children}
    <LinkArrowSvg />
  </AppLink>
);

export default LinkWithArrow;
