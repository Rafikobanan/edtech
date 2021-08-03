import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  glyph: string;
}

const Icon = ({ glyph, ...rest }: IconProps) => (
  <svg {...rest}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

export default Icon;
