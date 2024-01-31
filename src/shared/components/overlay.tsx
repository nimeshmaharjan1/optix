/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { cn } from '@/shared/lib/utils';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface OverlayProps {
  onClick?: () => void;
  className?: string;
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (props, ref) => (
    <div
      ref={ref}
      onClick={props.onClick}
      className={cn([
        'absolute top-0  w-full h-full z-[1399] bg-[rgba(0,0,0,0.40)   ',
        props.className,
      ])}
    />
  )
);

export default Overlay;

Overlay.displayName = 'Overlay';
