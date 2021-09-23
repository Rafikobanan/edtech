import React, { useRef, useState } from 'react';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  sideMargin?: number;
}

const Slider = ({ children, className, sideMargin = 16 }: SliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const startPosition = useRef<number>(0);

  const [position, setPosition] = useState<number>(0);

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!ref.current) return;

    const { clientWidth }: { clientWidth: number } = document.documentElement;
    const { scrollWidth }: { scrollWidth: number } = ref.current;
    const canScroll: number = clientWidth - scrollWidth - sideMargin * 2;

    if (canScroll >= 0) return;

    let manualPosition: number = position + e.clientX - startPosition.current;
    manualPosition = Math.min(manualPosition, 0);

    if (manualPosition <= canScroll) {
      setPosition(canScroll);
    } else {
      setPosition(manualPosition);
    }
  };

  const mouseUpHandler = () => {
    window.removeEventListener('mousemove', mouseMoveHandler);
  };

  const mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    startPosition.current = e.clientX;

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  return (
    <div className={className} onMouseDown={mouseDownHandler}>
      <div ref={ref} style={{ transform: `translateX(${position}px)` }}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
