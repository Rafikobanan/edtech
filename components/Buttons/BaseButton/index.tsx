import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type BaseButtonProps = React.HTMLProps<HTMLButtonElement>;

const BaseButton = ({ className, children, ...rest }: BaseButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [size, setSize] = useState(0);
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    const { width, height } = ref.current!.getBoundingClientRect();
    const sizeInPx = width > height ? width : height;

    setSize(sizeInPx * 2);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const node = e.target as HTMLButtonElement;
    const rect = node.getBoundingClientRect();

    setCoords({ x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2 });
    setIsRippling(true);
  };

  const handleMouseUp = () => {
    setIsRippling(false);
  };

  return (
    <button
      {...rest}
      ref={ref}
      className={cn(className, styles.button)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      type="button"
    >
      <div className={styles.content}>{children}</div>
      {isRippling && (
        <span
          style={{
            width: size,
            height: size,
            left: coords.x,
            top: coords.y
          }}
          className={styles.ripple}
        />
      )}
    </button>
  );
};

export default BaseButton;
